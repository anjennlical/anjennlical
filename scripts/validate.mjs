// Integrity, translation parity and editorial checks. No browser/network needed.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../',import.meta.url));
const walk=path=>readdirSync(path,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(path,e.name)):[resolve(path,e.name)]);
const anchor=t=>t.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu,'').replace(/ /g,'-');
const words=t=>t.trim().split(/\s+/).length;
const result=[];
const texts=['README.md','README.en.md'].map(name=>({name,text:readFileSync(resolve(root,name),'utf8')}));
for(const {name,text} of texts){
 const targets=[...text.matchAll(/(?:\]\(|(?:src|srcset|href)=")(.*?)(?:\)|")/g)].map(m=>m[1]);
 const headings=new Set([...text.matchAll(/^#{1,6} (.+)$/gm)].map(m=>anchor(m[1])));
 for(const target of targets){
  if(target.startsWith('#')) assert(headings.has(target.slice(1)),`${name}: missing anchor ${target}`);
  else if(!/^(https:|mailto:)/.test(target)) assert(existsSync(resolve(root,target)),`${name}: missing file ${target}`);
 }
 assert.equal((text.match(/```/g)||[]).length%2,0,`${name}: unclosed code fence`);
 assert.equal((text.match(/<details>/g)||[]).length,(text.match(/<\/details>/g)||[]).length,`${name}: unclosed details`);
 for(const m of text.matchAll(/<img\b[^>]*>/g)) assert(/alt="[^"]+"/.test(m[0]),`${name}: missing alt text`);
 assert(!/<script|<style|<iframe|onclick=/.test(text),`${name}: unsupported executable markup`);
 assert(/href="README.md"/.test(text)&&/href="README.en.md"/.test(text),`${name}: missing language switch`);
 const intro=text.split('**\n\n')[1].split(/\n\n(?:\[|<!-- sakura:navigation -->)/)[0];
 const introWords=words(intro); assert(introWords>=60&&introWords<=100,`${name}: introduction is ${introWords} words`);
 const descriptions=[...text.matchAll(/^### 0\d \/ (.+)\n\n.*\n\n([^\n]+)/gm)].map(m=>({project:m[1],words:words(m[2])}));
 assert.equal(descriptions.length,3,`${name}: missing project`);
 for(const p of descriptions) assert(p.words>=40&&p.words<=65,`${name}: ${p.project} description is ${p.words} words`);
 const imagePaths=[...text.matchAll(/(?:(?:src|srcset)="|\]\()(assets\/[^"\)]+)/g)].map(m=>m[1]);
 const imageBytes=[...new Set(imagePaths)].reduce((n,p)=>n+statSync(resolve(root,p)).size,0);
 assert(imageBytes<600_000,`${name}: displayed images exceed 600 KB`);
 result.push({file:name,localTargets:targets.filter(t=>!/^https:|^mailto:/.test(t)).length,introWords,descriptions,displayedImageBytes:imageBytes});
}
const normalize=t=>t.replace(/-(pt|en)(?=-|\.)/g,'-locale');
const images=t=>[...t.matchAll(/(?:(?:src|srcset)="|\]\()(assets\/[^"\)]+)/g)].map(m=>normalize(m[1])).sort();
assert.deepEqual(images(texts[0].text),images(texts[1].text),'Image parity differs between languages');
const urls=t=>[...new Set([...t.matchAll(/https:\/\/[^\s)"<>]+/g)].map(m=>m[0]))].sort();
assert.deepEqual(urls(texts[0].text),urls(texts[1].text),'External links differ between languages');
const assets=walk(resolve(root,'assets/profile'));
let svgFiles=0;
for(const file of assets.filter(f=>f.endsWith('.svg'))){
 const s=readFileSync(file,'utf8'); svgFiles++;
 assert(/viewBox="[^"]+"/.test(s),`Missing viewBox: ${file}`);
 if(!relative(root,file).replaceAll('\\','/').includes('/icons/')) assert(s.includes('<title')&&s.includes('<desc'),`Missing metadata: ${file}`);
 assert(!/<script|foreignObject|@import|onload=|(?:href|src)=["']https?:/i.test(s),`Executable/external SVG: ${file}`);
 if(file.endsWith('-static.svg')) assert(!s.includes('@keyframes'),`Animated static fallback: ${file}`);
}
const bytes=assets.reduce((n,f)=>n+statSync(f).size,0);
assert(bytes<850_000,`Source asset budget exceeded: ${bytes}`);
const ownFiles=walk(root).filter(f=>!relative(root,f).startsWith('.git')&&/\.(md|mjs|svg|json)$/.test(f));
for(const f of ownFiles) assert(!/gh[pousr]_[a-zA-Z0-9]{20,}|sk-[a-zA-Z0-9]{20,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(readFileSync(f,'utf8')),`Potential credential in ${f}`);
console.log(JSON.stringify({documents:result,svgFiles,totalSourceAssetBytes:bytes,checks:'passed'},null,2));
