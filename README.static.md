<!-- sakura:languages -->
<p align="right"><a href="README.static.md"><img src="assets/profile/links/language-pt-pt-static.svg" width="164" height="44" alt="Ler em português brasileiro" /></a> <a href="README.en.static.md"><img src="assets/profile/links/language-en-pt-static.svg" width="144" height="44" alt="Read in English" /></a></p>
<!-- /sakura:languages -->

<!-- sakura:motion -->
<p align="right"><a href="README.md">Ver versão com animações</a></p>
<!-- /sakura:motion -->

<p align="center"><picture><source media="(max-width: 600px)" srcset="assets/profile/hero-pt-mobile-static.svg" /><img src="assets/profile/hero-pt-static.svg" width="960" alt="Sakura OS — oi, eu sou a lari! Terminal noturno em rosa e lavanda com a gatinha original Sakura Byte." /></picture></p>

# Larissa Albuquerque

**Estudante de Tecnologia em Cibersegurança na FIAP · Desenvolvedora em formação**

Crio projetos que conectam software, inteligência artificial e criatividade. Meu ponto de partida é o problema que quero resolver e a experiência que quero oferecer: uma ferramenta para investigar evidências ou um jogo para aprender segurança digital.

Trabalho com React, TypeScript e Python, integração de modelos de linguagem e interfaces interativas. Defino o conceito, a direção visual e as prioridades dos projetos; uso IA como apoio à implementação e à revisão, avaliando as propostas ao longo do desenvolvimento. Aqui compartilho o que construo e aprendo nesse processo.

<!-- sakura:navigation -->
<p>
<a href="#projetos-em-destaque"><img src="assets/profile/links/nav-0-pt-static.svg" width="114" height="44" alt="Projetos" /></a>
<a href="#tecnologias-e-ferramentas"><img src="assets/profile/links/nav-1-pt-static.svg" width="140" height="44" alt="Tecnologias" /></a>
<a href="#em-desenvolvimento"><img src="assets/profile/links/nav-2-pt-static.svg" width="160" height="44" alt="Em andamento" /></a>
<a href="#atividade-pública"><img src="assets/profile/links/nav-3-pt-static.svg" width="124" height="44" alt="Atividade" /></a>
<a href="#vamos-conversar"><img src="assets/profile/links/nav-4-pt-static.svg" width="114" height="44" alt="Contato" /></a>
</p>
<!-- /sakura:navigation -->

## Projetos em destaque

### 01 / NekoStrike

[![NekoStrike — evidências primeiro, IA com contexto. Aplicação de segurança com MVP local.](assets/profile/projects/nekostrike-pt-static.svg)](https://github.com/anjennlical/nekostrike)

Uma aplicação full-stack para estudar segurança de APIs sem perder o contexto das evidências. O NekoStrike conecta testes controlados, revisão de achados e relatórios rastreáveis em um fluxo único. A Mochi AI oferece explicações opcionais a partir dos dados coletados, mantendo os resultados determinísticos separados da interpretação do modelo e sujeitos à revisão humana.

- **Implementado:** três cenários isolados com versões vulneráveis e corrigidas, histórico em SQLite e exportação Markdown.
- **IA:** integração com a OpenAI Responses API, saída estruturada e validação de referências; geração desligada por padrão.
- **Stack:** Python, FastAPI, React, TypeScript, Vite e SQLite.

**Estado:** MVP local funcional, em refinamento. Sem demonstração pública hospedada.

<!-- sakura:neko-actions -->
<p><a href="https://github.com/anjennlical/nekostrike"><img src="assets/profile/links/code-pt-static.svg" width="140" height="44" alt="Ver código" /></a> <a href="https://github.com/anjennlical/nekostrike#architecture"><img src="assets/profile/links/architecture-pt-static.svg" width="150" height="44" alt="Arquitetura" /></a></p>

[Validação e limites](https://github.com/anjennlical/nekostrike/blob/main/docs/portfolio/STATUS.md)
<!-- /sakura:neko-actions -->

<details>
<summary>Ver a Mochi AI e os detalhes técnicos</summary>

![Captura real do NekoStrike: Mochi AI Studio com uma análise identificada como simulada.](assets/profile/projects/neko-mochi-simulated.jpg)

*Captura real de 13/11/2026, anterior aos ajustes de espaçamento RC26.1, com provedor de IA simulado.*

O laboratório e os relatórios funcionam sem chave de API. Testes automatizados cobrem backend e frontend; as análises salvas podem ser reabertas sem gerar uma nova resposta do modelo.

[Origem da captura](https://github.com/anjennlical/nekostrike/blob/main/docs/portfolio/SCREENSHOTS.md) · [Integração e limites da IA](https://github.com/anjennlical/nekostrike/blob/main/docs/portfolio/AI.md)

</details>

### 02 / Cyber Kitty Adventures

[![Cyber Kitty Adventures — explorar, aprender e cuidar do mundo digital. Jogo educativo, Capítulo 1.](assets/profile/projects/cyber-kitty-pt-static.svg)](https://github.com/anjennlical/cyber-kitty-technical-showcase)

Um jogo educativo que apresenta segurança digital por meio da exploração, da narrativa e de decisões práticas em Byteberry Town. Desenvolvido com Phaser e TypeScript, transforma conceitos como organização de arquivos, verificação de origem e compartilhamento seguro em desafios interativos. A proposta é criar um espaço acolhedor para experimentar, errar e aprender antes de enfrentar situações reais.

- **No jogo:** exploração, diálogos, atividades educativas e progresso salvo no navegador, em português e inglês.
- **Na vitrine técnica pública:** classificação de informações, cinco espaços de salvamento e retomada por checkpoints.
- **Stack do jogo:** Phaser, TypeScript e Vite. **Vitrine técnica:** TypeScript, HTML, CSS e APIs do navegador.

![Captura real do jogo Cyber Kitty Adventures: personagem explorando Byteberry Town.](assets/profile/projects/cyber-game-town.jpg)

*Imagem do jogo completo em Phaser. A demonstração pública abaixo é uma experiência técnica separada.*

<details>
<summary>Mais do jogo — estação de trabalho interativa</summary>

![Atividade real do jogo no Cyber HQ: a estação de trabalho apresenta equipamentos e suas funções.](assets/profile/projects/cyber-game-workstation.jpg)

*Atividade educativa do jogo completo; não é uma captura da demonstração técnica.*

</details>

**Estado:** Capítulo 1 disponível para testes mediante contato; vitrine técnica pública disponível. Projeto de fã independente, com personagens e artes de terceiros, sem afiliação oficial com a Sanrio.

<!-- sakura:cyber-actions -->
<p><a href="https://cyber-kitty-technical-showcase.vercel.app/"><img src="assets/profile/links/demo-pt-static.svg" width="204" height="44" alt="Abrir demo técnica" /></a> <a href="https://github.com/anjennlical/cyber-kitty-technical-showcase"><img src="assets/profile/links/code-pt-static.svg" width="140" height="44" alt="Ver código da vitrine técnica" /></a> <a href="mailto:kerlalarissa@gmail.com"><img src="assets/profile/links/playtest-pt-static.svg" width="184" height="44" alt="Testar o jogo" /></a></p>

[Conhecer o processo](https://github.com/anjennlical/cyber-kitty-technical-showcase/blob/main/docs/PROCEDENCIA.md)
<!-- /sakura:cyber-actions -->

### 03 / Nocturne AI

![Nocturne AI — investigação digital e inteligência artificial. Projeto em desenvolvimento.](assets/profile/projects/nocturne-pt-static.svg)

Projeto em desenvolvimento voltado à investigação digital com inteligência artificial. A proposta é explorar como arquiteturas multiagentes podem organizar etapas de análise, apoiar a compreensão de evidências e estruturar hipóteses investigativas. Combina experimentação com modelos de linguagem e desenho de fluxos de investigação, com a arquitetura multiagente como parte da direção planejada.

**Estado:** em desenvolvimento. **Direção técnica planejada:** LLMs e arquiteturas multiagentes aplicados à investigação digital. Repositório e demonstração públicos ainda não vinculados.

## Tecnologias e ferramentas

### Desenvolvimento

<p>
<img src="assets/profile/toolkit/python.svg" width="142" alt="Python" />
<img src="assets/profile/toolkit/typescript.svg" width="142" alt="TypeScript" />
<img src="assets/profile/toolkit/javascript.svg" width="142" alt="JavaScript" />
<img src="assets/profile/toolkit/java.svg" width="142" alt="Java" />
<img src="assets/profile/toolkit/react.svg" width="142" alt="React" />
<img src="assets/profile/toolkit/html5.svg" width="142" alt="HTML5" />
<img src="assets/profile/toolkit/css3.svg" width="142" alt="CSS3" />
<img src="assets/profile/toolkit/fastapi.svg" width="142" alt="FastAPI" />
<img src="assets/profile/toolkit/vitejs.svg" width="142" alt="Vite" />
<img src="assets/profile/toolkit/sqlite.svg" width="142" alt="SQLite" />
</p>

Construo interfaces com React, TypeScript, HTML e CSS, serviços com Python e FastAPI e jogos com Phaser. Uso JavaScript, Vite e SQL/SQLite nesses projetos; Java integra meus conhecimentos complementares.

### Inteligência artificial

<p>
<img src="assets/profile/toolkit/openai.svg" width="142" alt="OpenAI" />
<img src="assets/profile/toolkit/claude.svg" width="142" alt="Claude" />
<img src="assets/profile/toolkit/codex.svg" width="142" alt="Codex" />
<img src="assets/profile/toolkit/gemini-color.svg" width="142" alt="Gemini" />
</p>

ChatGPT, Claude, Codex e Gemini fazem parte do meu fluxo de trabalho para prototipar, elaborar prompts, investigar problemas e revisar soluções. No NekoStrike, a IA também é uma funcionalidade do produto: integração com modelos de linguagem, respostas estruturadas e validação de referências às evidências.

### Cibersegurança

<p>
<img src="assets/profile/toolkit/linux.svg" width="142" alt="Linux" />
<img src="assets/profile/toolkit/wireshark.svg" width="142" alt="Wireshark" />
</p>

**Linux · Wireshark · Nmap · Redes · MITRE ATT&CK · SIEM/SOC · Análise de evidências**

O laboratório NekoStrike demonstra meu trabalho com evidências e segurança de APIs. Redes, análise de tráfego e práticas de monitoramento complementam minha formação em cibersegurança.

### Ferramentas e infraestrutura

<p>
<img src="assets/profile/toolkit/git.svg" width="142" alt="Git" />
<img src="assets/profile/toolkit/github.svg" width="142" alt="GitHub" />
<img src="assets/profile/toolkit/vscode.svg" width="142" alt="VS Code" />
<img src="assets/profile/toolkit/powershell.svg" width="142" alt="PowerShell" />
<img src="assets/profile/toolkit/amazonwebservices.svg" width="142" alt="AWS" />
<img src="assets/profile/toolkit/n8n.svg" width="142" alt="n8n" />
<img src="assets/profile/toolkit/make.svg" width="142" alt="Make" />
</p>

**Git · GitHub · VS Code · PowerShell · AWS · Power BI · n8n · Make**

Git e GitHub organizam o código e seu histórico; PowerShell apoia os fluxos locais no Windows. Uso n8n e Make para automação de fluxos. VS Code, AWS e Power BI fazem parte dos meus conhecimentos adicionais.

<details>
<summary>Contexto de uso e níveis de experiência</summary>

As tecnologias dos projetos estão descritas nos repositórios. Java, AWS, Power BI, MITRE ATT&CK e SIEM/SOC integram minha experiência complementar, autoavaliada entre intermediária e avançada. Minha autoavaliação de Gemini e VS Code é avançada.

[Créditos dos ícones e fontes](docs/ICONS.md)

</details>

## Em desenvolvimento

```text
lari@sakura-os:~ / projetos
├── NekoStrike      → refinamento do MVP local
├── Cyber Kitty     → testes do Capítulo 1
└── Nocturne AI     → investigação digital com IA
```

Investigo como tornar evidências compreensíveis, experiências educativas mais interativas e fluxos de análise mais úteis.

## Atividade pública

Veja o [histórico de contribuições](https://github.com/anjennlical) e os [repositórios públicos](https://github.com/anjennlical?tab=repositories) para acompanhar código, documentação e evolução dos projetos.

## Vamos conversar?

Para conversar sobre software, IA, cibersegurança ou testes do Cyber Kitty:

<!-- sakura:contact-actions -->
<p><a href="https://www.linkedin.com/in/larissa-albuquerque-65b437241/"><img src="assets/profile/links/linkedin-pt-static.svg" width="132" height="44" alt="LinkedIn" /></a> <a href="mailto:kerlalarissa@gmail.com"><img src="assets/profile/links/email-pt-static.svg" width="152" height="44" alt="Enviar e-mail" /></a> <a href="https://github.com/anjennlical"><img src="assets/profile/links/github-pt-static.svg" width="124" height="44" alt="GitHub" /></a></p>

`kerlalarissa@gmail.com` · `@anjennlical`
<!-- /sakura:contact-actions -->

<p align="center"><img src="assets/profile/footer-pt-static.svg" width="960" alt="Um pouco de rosa no código-fonte. Feito com curiosidade, código e um pouco de rosa, com Sakura Byte sob as estrelas." /></p>

<p align="center"><a href="assets/profile/hero-pt-static.svg">Cabeçalho sem animação</a> · <a href="assets/profile/footer-pt-static.svg">Rodapé sem animação</a></p>
