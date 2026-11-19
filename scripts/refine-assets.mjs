// Adds localized v2 assets; preserves the published v1 artwork.
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { cat, star, blossom, wrap, save } from './build-assets.mjs';
const root = fileURLToPath(new URL('../assets/profile/', import.meta.url));
const projectAssets={};
// Existing game icon; fan-project attribution is preserved in the README.
const helloKittyIcon=readFileSync(`${root}/projects/hello-kitty-game-icon.png`).toString('base64');
const mochiSource=readFileSync(`${root}/projects/mochi-icon.svg`,'utf8');
const mochiIcon=mochiSource.slice(mochiSource.indexOf('>')+1,mochiSource.lastIndexOf('</svg>'));
const nocturneSource=readFileSync(`${root}/projects/nocturne-icon.svg`,'utf8');
const nocturneIcon=nocturneSource.slice(nocturneSource.indexOf('>')+1,nocturneSource.lastIndexOf('</svg>'));
const languages = {
 pt: { bar:'PORTFÓLIO DE DESENVOLVIMENTO', hello:'oi, eu sou a lari!', role:'desenvolvedora em formação', tagline:'criando coisas fofas com código sério.', sub:'Software, IA e experiências interativas.', message:'curiosidade.exe em execução', companion:'COMPANHEIRA', areas:'DESENVOLVIMENTO DE SOFTWARE · IA · CIBERSEGURANÇA', footer:'um pouco de rosa no código-fonte.', signature:'Feito com curiosidade, código e um pouco de rosa. ♡', description:'Terminal Sakura OS com estrelas suaves e a gatinha pixelada original Sakura Byte.' },
 en: { bar:'DEVELOPER PORTFOLIO', hello:"hello, i'm lari!", role:'creative developer in progress', tagline:'building cute things with serious code.', sub:'Software, AI &amp; interactive experiences.', message:'curiosity.exe is always running', companion:'COMPANION', areas:'SOFTWARE DEVELOPMENT · AI · CYBERSECURITY', footer:'keep a little pink in the source code.', signature:'Made with curiosity, code &amp; a little bit of pink. ♡', description:'Sakura OS terminal with gentle stars and original pixel cat Sakura Byte.' }
};
for (const [lang,t] of Object.entries(languages)) {
 const body = `<rect x="1" y="1" width="958" height="418" rx="22" fill="url(#night)" stroke="#A25D82"/><rect x="1" y="1" width="958" height="418" rx="22" fill="url(#grid)"/>
 <path d="M0 90Q90 80 176 0M35 65 25 0M95 37 145 48" fill="none" stroke="#744263" stroke-width="4"/>${blossom(36,58,.65)}${blossom(101,32,.8)}${blossom(155,8,.65)}
 <path d="M28 58H932" stroke="#A25D82"/><circle cx="40" cy="30" r="5" fill="#FF5CA8"/><circle cx="60" cy="30" r="5" fill="#B89CFF"/><circle cx="80" cy="30" r="5" fill="#7DE0E8"/>
 <text x="480" y="35" text-anchor="middle" fill="#C2B6CF" font-family="monospace" font-size="12" letter-spacing="1.6">SAKURA OS / ${t.bar}</text>
 <text x="44" y="106" fill="#FF5CA8" font-family="monospace" font-size="12" letter-spacing="2.5">MIDNIGHT SAKURA // DIGITAL PLAYGROUND</text>
 <text x="40" y="161" font-size="52" fill="#FFB5DA" font-weight="700" letter-spacing="-1.5">${t.hello} <tspan fill="#FFB5DA">♡</tspan></text>
 <text x="44" y="197" font-size="17" fill="#C2B6CF">Larissa Albuquerque · ${t.role}</text>
 <text x="44" y="242" font-size="22" fill="#FFB5DA">${t.tagline}</text>
 <text x="44" y="275" font-size="18">${t.sub}</text>
 <rect x="44" y="300" width="540" height="78" rx="12" fill="#251824" stroke="#875169"/>
 <text x="64" y="325" font-family="monospace" fill="#B89CFF" font-size="13">lari@sakura-os:~</text>
 <text x="64" y="355" font-family="monospace" fill="#7DE0E8" font-size="16">❯ <tspan class="typed">${t.message}</tspan></text><path class="cursor" d="M420 341v19" stroke="#FF5CA8" stroke-width="7"/>
 <circle cx="769" cy="240" r="112" fill="#B89CFF" opacity=".04"/><circle cx="769" cy="240" r="96" fill="none" stroke="#80557F" stroke-dasharray="3 12"/>
 <g transform="translate(670 137) scale(1.45)">${cat}</g>${star(656,130,.7)}${star(885,204,.7)}${star(854,112,1)}${star(650,301,.5)}${star(900,319,.6)}
 <text x="769" y="361" text-anchor="middle" font-family="monospace" font-size="11" fill="#B89CFF" letter-spacing="1.6">${t.companion} / SAKURA BYTE</text>
 <text x="44" y="402" font-family="monospace" font-size="11" fill="#C2B6CF">${t.areas}</text><text x="915" y="402" fill="#FFB5DA" text-anchor="end">✦</text>`;
 save(`hero-${lang}`,960,420,`Sakura OS — ${t.hello}`,t.description,body);
 const mobile=lang==='pt'?{areas:'software · IA · cibersegurança',line1:'criando coisas fofas',line2:'com código sério.',message:'curiosidade.exe'}:{areas:'software · AI · cybersecurity',line1:'building cute things',line2:'with serious code.',message:'curiosity.exe'};
 save(`hero-${lang}-mobile`,480,310,`Sakura OS — ${t.hello}`,t.description,`<rect x="1" y="1" width="478" height="308" rx="18" fill="url(#night)" stroke="#A25D82"/><rect x="1" y="1" width="478" height="308" rx="18" fill="url(#grid)"/><circle cx="25" cy="23" r="4" fill="#FF5CA8"/><circle cx="41" cy="23" r="4" fill="#B89CFF"/><circle cx="57" cy="23" r="4" fill="#7DE0E8"/><text x="450" y="27" text-anchor="end" fill="#C2B6CF" font-family="monospace" font-size="12" letter-spacing="2">SAKURA OS</text><path d="M20 43H460" stroke="#875169"/><text x="23" y="93" font-size="34" fill="#FFB5DA" font-weight="700" letter-spacing="-1">${t.hello} <tspan fill="#FFB5DA">♡</tspan></text><text x="25" y="126" fill="#C2B6CF" font-size="16">${mobile.areas}</text><text x="25" y="166" fill="#FFB5DA" font-size="20">${mobile.line1}</text><text x="25" y="193" fill="#FFB5DA" font-size="20">${mobile.line2}</text><rect x="24" y="217" width="268" height="60" rx="10" fill="#251824" stroke="#875169"/><text x="39" y="240" fill="#B89CFF" font-family="monospace" font-size="12">lari@sakura-os:~</text><text x="39" y="263" fill="#7DE0E8" font-family="monospace" font-size="14">❯ <tspan class="typed">${mobile.message}</tspan></text><path class="cursor" d="M238 250v15" stroke="#FF5CA8" stroke-width="6"/><g transform="translate(315 133)">${cat}</g>${star(437,123,.6)}${star(311,192,.5)}${star(458,275,.5)}<text x="390" y="293" text-anchor="middle" font-family="monospace" font-size="10" fill="#B89CFF" letter-spacing="1.5">SAKURA BYTE</text>`);
 save(`footer-${lang}`,960,124,t.footer,t.description,`<rect x="1" y="1" width="958" height="122" rx="18" fill="url(#night)" stroke="#875169"/><path d="M28 105Q300 75 540 107T930 98" fill="none" stroke="#66436C"/>${star(674,46,.6)}${star(600,25,.5)}${star(874,28,.5)}${blossom(923,83,.4)}<text x="40" y="52" font-size="25" fill="#FFB5DA" font-weight="600">${t.footer}</text><text x="40" y="82" font-size="14" fill="#C2B6CF">${t.signature}</text><g transform="translate(746 5) scale(.75)">${cat}</g>`);
 const projects = lang === 'pt' ? [
 ['nekostrike','01','NekoStrike','evidências primeiro. IA com contexto.','SEGURANÇA / MVP LOCAL','#FF5CA8',''],
 ['cyber-kitty','02','Cyber Kitty Adventures','explorar, aprender e cuidar do mundo digital.','JOGO EDUCATIVO / CAPÍTULO 1','#FFB5DA',''],
 ['nocturne','03','Nocturne AI','investigação digital e inteligência artificial.','IA / EM DESENVOLVIMENTO','#7DE0E8','◇']
 ] : [
 ['nekostrike','01','NekoStrike','evidence first. AI with context.','SECURITY / LOCAL MVP','#FF5CA8',''],
 ['cyber-kitty','02','Cyber Kitty Adventures','explore, learn &amp; care for the digital world.','EDUCATIONAL GAME / CHAPTER 1','#FFB5DA',''],
 ['nocturne','03','Nocturne AI','digital investigation meets artificial intelligence.','AI / IN DEVELOPMENT','#7DE0E8','◇']
 ];
 for (const [name,index,title,subtitle,tags,color,icon] of projects) {
 const projectIcon=name==='cyber-kitty'?`<image x="847" y="37" width="48" height="48" href="data:image/png;base64,${helloKittyIcon}"/>`:name==='nekostrike'?`<svg x="843" y="33" width="56" height="56" viewBox="70 30 210 180">${mochiIcon}</svg>`:name==='nocturne'?`<svg x="843" y="33" width="56" height="56" viewBox="0 0 64 64">${nocturneIcon}</svg>`:`<text x="871" y="72" text-anchor="middle" fill="${color}" font-family="monospace" font-size="32">${icon}</text>`;
 const card=`<rect x="1" y="1" width="958" height="122" rx="16" fill="#251824" stroke="#875169"/><path class="project-accent" d="M22 22v80" stroke="${color}" stroke-width="3"/><text x="44" y="29" fill="${color}" font-family="monospace" font-size="12" letter-spacing="1.8">${index} / ${tags}</text><text x="43" y="72" font-size="32" fill="#FFD1E7" font-weight="700">${title}</text><text x="45" y="101" font-size="17" fill="#C2B6CF">${subtitle}</text><rect x="824" y="22" width="94" height="78" rx="14" fill="#110E19" stroke="#66436C"/>${projectIcon}<circle class="project-signal" cx="906" cy="33" r="3" fill="${color}" opacity=".7"/>`;
 const motion=`<style>.project-accent{animation:sakura-line 10s ease-in-out infinite}.project-signal{animation:sakura-bloom 8s ease-in-out -${Number(index)}s infinite}@keyframes sakura-line{0%,70%,100%{stroke-opacity:.65}30%,45%{stroke-opacity:1}}@keyframes sakura-bloom{0%,100%{opacity:.35}40%{opacity:1}}@media(prefers-reduced-motion:reduce){.project-accent,.project-signal{animation:none}}</style>`;
 const animated=wrap(960,124,title,subtitle,motion+card,false);
 const version=`${name}-${lang}-${createHash('sha256').update(animated).digest('hex').slice(0,8)}`;
 projectAssets[`${name}-${lang}`]=`assets/profile/projects/${version}.svg`;
 writeFileSync(`${root}/projects/${name}-${lang}.svg`,animated);
 writeFileSync(`${root}/projects/${version}.svg`,animated);
 writeFileSync(`${root}/projects/${version}-static.svg`,wrap(960,124,title,subtitle,card,false));
 writeFileSync(`${root}/projects/${name}-${lang}-static.svg`,wrap(960,124,title,subtitle,card,false));
}
}
mkdirSync(`${root}/toolkit`,{recursive:true});
writeFileSync(`${root}/projects/manifest.json`,JSON.stringify(projectAssets,null,2)+'\n');
const labels={python:'Python',typescript:'TypeScript',javascript:'JavaScript',java:'Java',react:'React',html5:'HTML5',css3:'CSS3',fastapi:'FastAPI',vitejs:'Vite',sqlite:'SQLite',git:'Git',github:'GitHub',powershell:'PowerShell',linux:'Linux',claude:'Claude',vscode:'VS Code',amazonwebservices:'AWS',openai:'OpenAI',codex:'Codex','gemini-color':'Gemini',wireshark:'Wireshark',n8n:'n8n',make:'Make'};
for (const [name,label] of Object.entries(labels)) {
 const source=readFileSync(`${root}/icons/${name}.svg`,'utf8');
 const viewBox=source.match(/viewBox="([^"]+)"/)[1];
 const inner=source.slice(source.indexOf('>',source.indexOf('<svg'))+1,source.lastIndexOf('</svg>'));
 const tile=`<rect x="1" y="2" width="148" height="66" rx="10" fill="#251824" stroke="#875169"/><rect x="8" y="13" width="44" height="44" rx="9" fill="#FFF0F7"/><svg x="14" y="19" width="32" height="32" viewBox="${viewBox}" fill="#191321" color="#191321">${inner}</svg><text x="61" y="40" font-size="13" font-weight="600">${label}</text>`;
 writeFileSync(`${root}/toolkit/${name}.svg`,wrap(150,70,label,`${label} — local technology icon`,tile,false));
}
console.log('Generated localized heroes, footers, 6 project headers and 23 consistent icon tiles.');
