// Local integrity checks, without a browser or network.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = fileURLToPath(new URL('../', import.meta.url));
const readme = readFileSync(resolve(root,'README.md'),'utf8');
const targets = [...readme.matchAll(/(?:\]\(|(?:src|href)=")(.*?)(?:\)|")/g)].map(m=>m[1]);
const anchor = text => text.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu,'').replace(/ /g,'-');
const headings = new Set([...readme.matchAll(/^#{1,6} (.+)$/gm)].map(m=>anchor(m[1])));
for(const t of targets) {
  if(t.startsWith('#')) assert(headings.has(t.slice(1)),`Missing anchor ${t}`);
  else if(!/^(https:|mailto:)/.test(t)) assert(existsSync(resolve(root,t)),`Missing local file ${t}`);
}
assert.equal((readme.match(/```/g)||[]).length % 2,0,'Unclosed code fence');
assert.equal((readme.match(/<details>/g)||[]).length,(readme.match(/<\/details>/g)||[]).length,'Unclosed details');
for(const m of readme.matchAll(/<img\b[^>]*>/g)) assert(/alt="[^"]+"/.test(m[0]),'Image without alt text');
const walk = path => readdirSync(path,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(path,e.name)):[resolve(path,e.name)]);
const assets = walk(resolve(root,'assets/profile'));
for(const f of assets.filter(f=>f.endsWith('.svg'))) {
 const s=readFileSync(f,'utf8');
 assert(/viewBox="0 0 \d+ \d+"/.test(s),`Missing viewBox ${f}`);
 assert(s.includes('<title')&&s.includes('<desc'),`Missing accessible metadata ${f}`);
 assert(!/<script|foreignObject|https?:\/\/(?!www\.w3\.org\/2000\/svg)|@import|onload=/i.test(s),`External or executable SVG content ${f}`);
 if(f.endsWith('-static.svg')) assert(!s.includes('@keyframes'),`Animated static fallback ${f}`);
}
const bytes=assets.reduce((n,f)=>n+statSync(f).size,0);
assert(bytes<500_000,`Asset budget exceeded: ${bytes}`);
assert(!/gh[pousr]_[a-zA-Z0-9]{20,}|sk-[a-zA-Z0-9]{20,}|BEGIN .*PRIVATE KEY/.test(readme+assets.filter(f=>f.endsWith('.svg')).map(f=>readFileSync(f,'utf8')).join('')),'Potential credential');
console.log(JSON.stringify({localTargets:targets.filter(t=>!/^https:|^mailto:/.test(t)).length,svgFiles:assets.filter(f=>f.endsWith('.svg')).length,assetBytes:bytes,checks:'passed'},null,2));
