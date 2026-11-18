// Dependency-free, original vector artwork. Run: node scripts/build-assets.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../assets/profile/', import.meta.url));
mkdirSync(root, { recursive: true });
const colors = { bg:'#110E19', surface:'#1C1628', pink:'#FF5CA8', soft:'#FFB5DA', lavender:'#B89CFF', cyan:'#7DE0E8', white:'#F9F4FF', muted:'#C2B6CF' };
const cat = `<g shape-rendering="crispEdges">
 <g class="tail"><path d="M95 112h25V85h-10V73h12v8h10v39h-37z" fill="#B89CFF"/><path d="M120 85h12v16h-12z" fill="#FF5CA8"/></g>
 <path d="M28 50V18h13v10h13v12h28V28h13V18h13v59H96v12h10v39H28V89H16V50z" fill="#352746"/>
 <path d="M28 50h80v27H96v12H40V77H28zM40 89h54v27H40z" fill="#F9F4FF"/>
 <path d="M28 50V30h13v20M95 50V30h13v20" fill="#FFB5DA"/>
 <path d="M42 58h9v13h-9M80 58h9v13h-9" fill="#110E19"/>
 <path d="M42 58h4v4h-4M80 58h4v4h-4" fill="#7DE0E8"/>
 <path d="M59 72h13v5H59M64 77h5v5h-5" fill="#CB3D81"/>
 <path d="M31 72h12v5H31M88 72h12v5H88M40 116h17v12H40M77 116h17v12H77" fill="#FFB5DA"/>
 <path d="M83 33V20l13 6 13-6v13l-13-5z" fill="#FF5CA8"/><path d="M93 23h6v8h-6" fill="#7DE0E8"/>
 <path d="M48 97h38v21H48z" fill="#352746"/><path d="M54 101l5 5-5 5m12 0h10" fill="none" stroke="#7DE0E8" stroke-width="3"/>
</g>`;
const star = (x,y,s=1) => `<path class="star" transform="translate(${x} ${y}) scale(${s})" d="M0-8 2-2 8 0 2 2 0 8-2 2-8 0-2-2Z" fill="#FFB5DA"/>`;
const blossom = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#FFB5DA">${[0,72,144,216,288].map(a=>`<ellipse rx="7" ry="12" cy="-10" transform="rotate(${a})"/>`).join('')}<circle r="4" fill="#FF5CA8"/></g>`;
const defs = `<defs><linearGradient id="night" x2="1" y2="1"><stop stop-color="#25152E"/><stop offset=".55" stop-color="#110E19"/><stop offset="1" stop-color="#211B36"/></linearGradient><pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#B89CFF" stroke-opacity=".055"/></pattern></defs>`;
const motion = `<style>
 .star { animation: twinkle 5s ease-in-out infinite; } .star:nth-child(2n) { animation-delay: -2.5s; }
 .tail { transform-origin: 98px 116px; animation: sway 5s ease-in-out infinite; }
 .cursor { animation: cursor 2.8s ease-in-out infinite; }
 .typed { animation: type 12s steps(31, end) infinite; }
 @keyframes twinkle { 0%,100% {opacity:.45} 50% {opacity:1} }
 @keyframes sway { 0%,100% {transform:rotate(-4deg)} 50% {transform:rotate(7deg)} }
 @keyframes cursor {0%,100% {opacity:.3} 50% {opacity:1}}
 @keyframes type {0%,100% {clip-path:inset(0 100% 0 0)} 25%,88% {clip-path:inset(0 0 0 0)}}
 @media (prefers-reduced-motion: reduce) { .star,.tail,.cursor,.typed {animation:none} }
 </style>`;
const wrap = (w,h,title,desc,body,animated=true) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-labelledby="title desc"><title id="title">${title}</title><desc id="desc">${desc}</desc>${defs}${animated?motion:''}<g font-family="Segoe UI, Arial, sans-serif" fill="${colors.white}">${body}</g></svg>\n`;
const save = (name,w,h,title,desc,body) => {writeFileSync(`${root}/${name}.svg`,wrap(w,h,title,desc,body));writeFileSync(`${root}/${name}-static.svg`,wrap(w,h,title,desc,body,false));};
const hero = `<rect x="1" y="1" width="958" height="498" rx="22" fill="url(#night)" stroke="#624365"/>
 <rect x="1" y="1" width="958" height="498" rx="22" fill="url(#grid)"/>
 <path d="M0 90Q90 80 176 0M35 65 25 0M95 37 145 48" fill="none" stroke="#744263" stroke-width="4"/>
 ${blossom(36,58,.65)}${blossom(101,32,.8)}${blossom(155,8,.65)}
 <path d="M28 58H932" stroke="#624365"/>
 <circle cx="40" cy="30" r="5" fill="#FF5CA8"/><circle cx="60" cy="30" r="5" fill="#B89CFF"/><circle cx="80" cy="30" r="5" fill="#7DE0E8"/>
 <text x="480" y="35" text-anchor="middle" fill="#C2B6CF" font-family="monospace" font-size="13" letter-spacing="2">SAKURA OS / DEVELOPER PROFILE</text>
 <text x="44" y="115" fill="#FF5CA8" font-family="monospace" font-size="13" letter-spacing="3">MIDNIGHT SAKURA // DIGITAL PLAYGROUND</text>
 <text x="40" y="183" font-size="59" font-weight="700" letter-spacing="-2">hello, i'm lari! <tspan fill="#FFB5DA">♡</tspan></text>
 <text x="44" y="222" font-size="19" fill="#C2B6CF">Larissa Albuquerque · creative developer in progress</text>
 <text x="44" y="272" font-size="23" fill="#FFB5DA">building cute things with serious code.</text>
 <text x="44" y="309" font-size="17" fill="#F9F4FF">Software, AI experiments &amp; interactive worlds.</text>
 <rect x="44" y="345" width="540" height="97" rx="12" fill="#1C1628" stroke="#493552"/>
 <text x="64" y="374" font-family="monospace" fill="#B89CFF" font-size="13">lari@sakura-os:~</text>
 <text x="64" y="406" font-family="monospace" fill="#7DE0E8" font-size="17">❯ <tspan class="typed">curiosity.exe is always running</tspan></text>
 <path class="cursor" d="M410 391v19" stroke="#FF5CA8" stroke-width="8"/>
 <circle cx="761" cy="275" r="123" fill="#B89CFF" opacity=".04"/><circle cx="761" cy="275" r="105" fill="none" stroke="#80557F" stroke-dasharray="3 12"/>
 <g transform="translate(653 162) scale(1.6)">${cat}</g>
 ${star(654,159,.8)}${star(880,221,.7)}${star(850,130,1.1)}${star(635,333,.5)}${star(897,348,.6)}
 <text x="761" y="419" text-anchor="middle" font-family="monospace" font-size="12" fill="#B89CFF" letter-spacing="2">COMPANION / SAKURA BYTE</text>
 <text x="44" y="477" font-family="monospace" font-size="12" fill="#C2B6CF">SOFTWARE DEVELOPMENT · ARTIFICIAL INTELLIGENCE · CYBERSECURITY</text>
 <text x="916" y="477" text-anchor="end" font-family="monospace" font-size="12" fill="#FFB5DA">✦</text>`;
save('hero',960,500,'Sakura OS — hello, I’m lari!','Midnight sakura terminal, original pixel cat Sakura Byte, and a slowly revealed curiosity.exe message.',hero);
save('mascot',160,150,'Sakura Byte','Original lavender pixel cat with a pink circuit bow and a tiny terminal.',`<g transform="translate(10 6)">${cat}</g>`);
save('footer',960,150,'Keep a little pink in the source code.','A small night sky with Sakura Byte and softly twinkling stars.',`<rect x="1" y="1" width="958" height="148" rx="18" fill="url(#night)" stroke="#493552"/><path d="M28 117Q300 78 540 119T930 109" fill="none" stroke="#66436C"/>${star(680,55,.6)}${star(600,38,.7)}${star(865,40,.6)}${blossom(923,87,.45)}<text x="40" y="63" font-size="25" font-weight="600">keep a little pink in the source code.</text><text x="40" y="93" font-size="14" fill="#C2B6CF">Made with curiosity, code &amp; a little bit of pink. ♡</text><g transform="translate(723 8) scale(.85)">${cat}</g>`);
mkdirSync(`${root}/projects`,{recursive:true});
for (const [name,index,title,subtitle,tags,color,icon] of [
 ['nekostrike','01','NekoStrike','evidence first. AI with context.','SECURITY LAB / LOCAL MVP','#FF5CA8','&gt;_'],
 ['cyber-kitty','02','Cyber Kitty Adventures','small decisions. safer digital worlds.','INTERACTIVE SYSTEMS / PUBLIC TECHNICAL DEMO','#B89CFF','{ }']
]) writeFileSync(`${root}/projects/${name}.svg`,wrap(960,154,title,subtitle,`<rect x="1" y="1" width="958" height="152" rx="16" fill="#1C1628" stroke="#493552"/><path d="M22 29v96" stroke="${color}" stroke-width="3"/><text x="45" y="34" fill="${color}" font-family="monospace" font-size="12" letter-spacing="2">${index} / ${tags}</text><text x="44" y="82" font-size="34" font-weight="700">${title}</text><text x="46" y="117" font-size="18" fill="#C2B6CF">${subtitle}</text><rect x="812" y="35" width="106" height="84" rx="14" fill="#110E19" stroke="#66436C"/><text x="865" y="89" text-anchor="middle" fill="${color}" font-family="monospace" font-size="35">${icon}</text>`,false));
console.log('Generated 8 SVG assets; no network, dependencies or external fonts.');
