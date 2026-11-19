// Derive complete motion-free alternatives from the two source READMEs.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import './pink-links.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
for(const [source,destination,lang] of [['README.md','README.static.md','pt'],['README.en.md','README.en.static.md','en']]){
 let text=readFileSync(`${root}${source}`,'utf8');
 text=text.replace(/assets\/profile\/(?:hero-[^"\s)]+|footer-[^"\s)]+|links\/[^"\s)]+|projects\/[^"\s)]+)\.svg/g,path=>path.endsWith('-static.svg')?path:path.replace(/\.svg$/,'-static.svg'));
 text=text.replaceAll('href="README.md"','href="README.static.md"').replaceAll('href="README.en.md"','href="README.en.static.md"');
 const target=lang==='pt'?'README.md':'README.en.md';
 const label=lang==='pt'?'Ver versão com animações':'Read the animated version';
 text=text.replace(/<!-- sakura:motion -->[\s\S]*?<!-- \/sakura:motion -->/,`<!-- sakura:motion -->\n<p align="right"><a href="${target}">${label}</a></p>\n<!-- /sakura:motion -->`);
 writeFileSync(`${root}${destination}`,text);
}
console.log('Generated complete PT/EN profiles without animated artwork.');
