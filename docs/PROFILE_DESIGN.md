# Midnight Sakura // Digital Playground

Sistema visual do portfólio de Larissa Albuquerque / @anjennlical: conteúdo em português e inglês, identidade Midnight Sakura, mascote original e navegação acessível. Veja [decisões de design](V2_REVIEW.md) e [verificação técnica](V2_VERIFICATION.md).

## Autoria e processo

Larissa define o conceito, a direção visual e as prioridades dos projetos, avalia propostas e acompanha sua evolução. Ferramentas de IA apoiam a prototipação, a implementação e a revisão. O perfil apresenta esse processo de forma explícita, sem atribuir todas as decisões à ferramenta nem afirmar que o código foi escrito integralmente à mão.

## Estrutura

- `README.md`: português brasileiro, idioma principal.
- `README.en.md`: versão completa em inglês, com o mesmo conteúdo essencial.
- `assets/profile/hero-{pt,en}.svg`: abertura de desktop, com animação suave.
- `assets/profile/hero-{pt,en}-mobile.svg`: composição própria para telas de até 600 px, escolhida por `picture`/`source` compatíveis com Markdown do GitHub.
- `assets/profile/footer-{pt,en}.svg`: assinatura localizada com o mesmo mascote.
- `*-static.svg`: alternativas sem animação. Hero e rodapé estáticos continuam vinculados no README.
- `assets/profile/projects/`: cabeçalhos locais e capturas reais aprovadas.
- `assets/profile/toolkit/`: cartões de ícones locais, compartilhados entre os idiomas.
- `assets/profile/icons/`: fontes dos ícones, revisões e licenças; [créditos](ICONS.md).

Os assets originais da primeira versão continuam preservados. Sakura Byte é um mascote pixelado original com laço tecnológico e pequeno terminal. Os personagens que aparecem nas capturas do jogo são separados desse mascote e mantêm a atribuição do projeto de fã.

## Atualizar

1. Edite ambos os READMEs ao mudar informações de um projeto. Preserve o mesmo escopo, stack, estado e links em cada idioma.
2. Edite `scripts/refine-assets.mjs` para alterar os elementos localizados. Ele reutiliza as formas e animações de `scripts/build-assets.mjs`, sem bibliotecas externas ou rede.
3. Execute `node scripts/build-static-readmes.mjs` e `node scripts/validate.mjs`. O primeiro comando executa todos os geradores e deriva as alternativas completas sem animação. Edite os dois READMEs principais; não edite os arquivos `.static.md` gerados manualmente.
4. Confira os SVGs como XML e as prévias em desktop e mobile. Se alterar ícones, preserve suas fontes e licenças.
5. Confira o diff antes de qualquer publicação. Uma revisão local não é aprovação para push.

Nomes e informações essenciais permanecem em Markdown copiável. Ícones têm alt text, e os SVGs autorais possuem título e descrição. Cada imagem contém seu próprio fundo e contraste; o conteúdo do README acompanha o tema do GitHub. A grade usa imagens inline de largura consistente que quebram de linha naturalmente, sem tabela larga ou CSS externo.

As animações usam CSS interno ao SVG: estrelas, cauda, cursor e revelação do texto. Nenhuma animação nova foi acrescentada na v2. `prefers-reduced-motion` desativa as regras onde o visualizador oferece suporte; links estáticos fornecem uma alternativa explícita. Todas as informações continuam visíveis quando a animação não é suportada.

## Navegação rosa

Os links de navegação, idioma, ações de projetos e contato usam imagens SVG locais dentro de links HTML normais, com rótulos alternativos. Os botões têm altura de 44 px, contraste alto e quebra natural de linha. O preenchimento rosa claro destaca ações principais; ações secundárias usam fundo escuro e borda rosa. Hero, cards e contornos receberam mais rosa sem alterar as capturas dos projetos ou os logotipos.

Botões e cabeçalhos dos projetos agora incluem animações finitas de até 3,9 segundos após carregar: seta com deslocamento de 2 px, brilho discreto na borda, revelação da linha lateral e ponto decorativo suave. Textos, logotipos e áreas clicáveis permanecem fixos. As regras respeitam `prefers-reduced-motion`. O botão “Sem movimento” abre uma versão completa do perfil com todos os assets estáticos, e a troca de idioma mantém essa opção. Veja [decisões e verificação de movimento](MOTION_DESIGN.md).

A cor dos links de texto nativos continua sob controle do tema do GitHub. Não há CSS tentando alterar o estilo da plataforma: [o pipeline oficial remove estilos inline](https://github.com/github/markup#github-markup). Referências técnicas permanecem links de texto para evitar excesso de botões. Endereço de e-mail e identificador continuam copiáveis fora das imagens.

## Conteúdo e evidências

NekoStrike possui MVP local e integração opcional com OpenAI Responses API; a captura da Mochi AI usa um provedor simulado e mantém sua identificação histórica. Cyber Kitty usa somente capturas reais do jogo completo; os links para código e demo técnica são identificados como uma experiência separada. Nocturne AI é descrito, conforme confirmação da autora, como projeto em desenvolvimento e arquitetura multiagente planejada.

Competências complementares e níveis confirmados pela autora são autoavaliações. A stack demonstrada por código permanece ligada aos repositórios correspondentes. Não há números inventados, serviços de estatísticas, tokens, GitHub Actions ou novas configurações de conta.
