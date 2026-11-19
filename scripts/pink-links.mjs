// GitHub-safe image links. Internal SVG styling never escapes into the README.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { wrap } from './build-assets.mjs';
import './refine-assets.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const projectAssets=JSON.parse(readFileSync(`${root}assets/profile/projects/manifest.json`,'utf8'));
mkdirSync(`${root}assets/profile/links`,{recursive:true});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
function button(name,label,width,primary=false){
 width=Math.min(width,Math.max(92,Math.ceil(label.length*7.2+48)));
 const bg=primary?'#FFB5DA':'#2B1728',fg=primary?'#291229':'#FFD1E7',stroke=primary?'#FFB5DA':'#BE7199';
 const delay=-(Array.from(name).reduce((n,c)=>n+c.charCodeAt(0),0)%8)/2;
 const animate=!name.startsWith('language-')&&!name.startsWith('motion-');
 const motion=animate?`<style>.button-arrow{animation:sakura-nudge 8s ease-in-out ${delay}s infinite}.button-trace{animation:sakura-trace 8s ease-in-out ${delay}s infinite}@keyframes sakura-nudge{0%,8%,44%,100%{transform:translateX(0)}20%,30%{transform:translateX(3px)}}@keyframes sakura-trace{0%,10%,62%,100%{opacity:0}30%,40%{opacity:.7}}@media(prefers-reduced-motion:reduce){.button-arrow,.button-trace{animation:none}}</style>`:'';
 const body=`<rect x="1" y="6" width="${width-2}" height="32" rx="9" fill="${bg}" stroke="${stroke}"/><path class="button-trace" opacity="0" d="M16 7H${width-16}" fill="none" stroke="${primary?'#9D3269':'#FFB5DA'}" stroke-width="2" stroke-linecap="round"/><text x="${width/2-12}" y="26.5" text-anchor="middle" font-size="13" font-weight="600" fill="${fg}">${escape(label)}</text><path class="button-arrow" d="m${width-21} 17 5 5-5 5m-6-5h11" fill="none" stroke="${fg}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;
 const animated=wrap(width,44,label,`${label} — navigation link`,motion+body,false);
 const assetName=`${name}-${createHash('sha256').update(animated).digest('hex').slice(0,8)}`;
 writeFileSync(`${root}assets/profile/links/${name}.svg`,animated);
 writeFileSync(`${root}assets/profile/links/${assetName}.svg`,animated);
 writeFileSync(`${root}assets/profile/links/${name}-static.svg`,wrap(width,44,label,`${label} — static navigation link`,body,false));
 writeFileSync(`${root}assets/profile/links/${assetName}-static.svg`,wrap(width,44,label,`${label} — static navigation link`,body,false));
 return (href,alt=label)=>`<a href="${escape(href)}"><img src="assets/profile/links/${assetName}.svg" width="${width}" height="44" alt="${escape(alt)}" /></a>`;
}
function replaceBlock(text,key,initial,html){
 const block=`<!-- sakura:${key} -->\n${html}\n<!-- /sakura:${key} -->`;
 const re=new RegExp(`<!-- sakura:${key} -->[\\s\\S]*?<!-- /sakura:${key} -->`);
 if(re.test(text))return text.replace(re,block);
 if(!text.includes(initial))throw new Error(`Missing ${key} source`);
 return text.replace(initial,block);
}
for(const lang of ['pt','en']){
 const pt=lang==='pt',file=pt?'README.md':'README.en.md';
 let text=readFileSync(`${root}${file}`,'utf8');
 text=text.replace(/assets\/profile\/projects\/(nekostrike|cyber-kitty|nocturne)-(pt|en)(?:-[a-f0-9]{8})?\.svg/g,(_,name,locale)=>projectAssets[`${name}-${locale}`]);
 text=text.replace(/\s*<!-- sakura:motion -->[\s\S]*?<!-- \/sakura:motion -->/g,'');
 const motionLink=button(`motion-${lang}`,pt?'Sem movimento':'Reduce motion',184)(pt?'README.static.md':'README.en.static.md');
 const languages=`<p align="right">${button(`language-pt-${lang}`,'PT · Português',164,pt)('README.md','Ler em português brasileiro')} ${button(`language-en-${lang}`,'EN · English',144,!pt)('README.en.md','Read in English')}\n<!-- sakura:motion -->\n${motionLink}\n<!-- /sakura:motion -->\n</p>`;
 text=replaceBlock(text,'languages','<p align="right"><a href="README.md">🇧🇷 Português</a> | <a href="README.en.md">🌐 English</a></p>',languages);
 const nav=pt?[['Projetos','projetos-em-destaque',114],['Tecnologias','tecnologias-e-ferramentas',140],['Em andamento','em-desenvolvimento',160],['Atividade','atividade-pública',124],['Contato','vamos-conversar',114]]:[['Projects','featured-projects',118],['Technologies','technologies-and-tools',150],['In progress','in-development',140],['Activity','public-activity',112],['Contact','lets-connect',116]];
 const oldNav=pt?'[Projetos](#projetos-em-destaque) · [Tecnologias](#tecnologias-e-ferramentas) · [Em desenvolvimento](#em-desenvolvimento) · [Atividade](#atividade-pública) · [Contato](#vamos-conversar)':'[Projects](#featured-projects) · [Technologies](#technologies-and-tools) · [In development](#in-development) · [Activity](#public-activity) · [Contact](#lets-connect)';
 text=replaceBlock(text,'navigation',oldNav,`<p>\n${nav.map(([label,anchor,w],i)=>button(`nav-${i}-${lang}`,label,w,i===0)(`#${anchor}`)).join('\n')}\n</p>`);
 const repository=button(`code-${lang}`,pt?'Ver código':'Source code',140);
 const architecture=button(`architecture-${lang}`,pt?'Arquitetura':'Architecture',150);
 const oldNeko=pt?'[Repositório](https://github.com/anjennlical/nekostrike) · [Arquitetura](https://github.com/anjennlical/nekostrike#architecture) · [Validação e limites](https://github.com/anjennlical/nekostrike/blob/main/docs/portfolio/STATUS.md)':'[Repository](https://github.com/anjennlical/nekostrike) · [Architecture](https://github.com/anjennlical/nekostrike#architecture) · [Validation & limitations](https://github.com/anjennlical/nekostrike/blob/main/docs/portfolio/STATUS.md)';
 text=replaceBlock(text,'neko-actions',oldNeko,`<p>${repository('https://github.com/anjennlical/nekostrike')} ${architecture('https://github.com/anjennlical/nekostrike#architecture')}</p>\n\n[${pt?'Validação e limites':'Validation & limitations'}](https://github.com/anjennlical/nekostrike/blob/main/docs/portfolio/STATUS.md)`);
 const demo=button(`demo-${lang}`,pt?'Demo técnica':'Technical demo',176,true);
 const play=button(`playtest-${lang}`,pt?'Testar jogo':'Playtest game',156);
 const oldCyber=pt?'[Repositório da vitrine](https://github.com/anjennlical/cyber-kitty-technical-showcase) · [Experimentar a demo técnica](https://cyber-kitty-technical-showcase.vercel.app/) · [Conhecer o processo](https://github.com/anjennlical/cyber-kitty-technical-showcase/blob/main/docs/PROCEDENCIA.md) · [Solicitar teste do jogo](mailto:kerlalarissa@gmail.com)':'[Showcase repository](https://github.com/anjennlical/cyber-kitty-technical-showcase) · [Try the technical demo](https://cyber-kitty-technical-showcase.vercel.app/) · [Project provenance](https://github.com/anjennlical/cyber-kitty-technical-showcase/blob/main/docs/PROCEDENCIA.md) · [Request game playtesting](mailto:kerlalarissa@gmail.com)';
 text=replaceBlock(text,'cyber-actions',oldCyber,`<p>${demo('https://cyber-kitty-technical-showcase.vercel.app/')} ${repository('https://github.com/anjennlical/cyber-kitty-technical-showcase',pt?'Ver código da vitrine técnica':'View technical showcase code')} ${play('mailto:kerlalarissa@gmail.com')}</p>\n\n[${pt?'Conhecer o processo':'Project provenance'}](https://github.com/anjennlical/cyber-kitty-technical-showcase/blob/main/docs/PROCEDENCIA.md)`);
 const linkedin=button(`linkedin-${lang}`,'LinkedIn',132);
 const email=button(`email-${lang}`,pt?'Enviar e-mail':'Send email',152,true);
 const github=button(`github-${lang}`,'GitHub',124);
 const oldContact=pt?'[LinkedIn](https://www.linkedin.com/in/larissa-albuquerque-65b437241/) · [E-mail · kerlalarissa@gmail.com](mailto:kerlalarissa@gmail.com) · [GitHub · @anjennlical](https://github.com/anjennlical)':'[LinkedIn](https://www.linkedin.com/in/larissa-albuquerque-65b437241/) · [Email · kerlalarissa@gmail.com](mailto:kerlalarissa@gmail.com) · [GitHub · @anjennlical](https://github.com/anjennlical)';
 text=replaceBlock(text,'contact-actions',oldContact,`<p>${linkedin('https://www.linkedin.com/in/larissa-albuquerque-65b437241/')} ${email('mailto:kerlalarissa@gmail.com')} ${github('https://github.com/anjennlical')}</p>\n\n\`kerlalarissa@gmail.com\` · \`@anjennlical\``);
 writeFileSync(`${root}${file}`,text);
}
console.log('Generated animated pink actions and static counterparts for both languages.');
