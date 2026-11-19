# Verificação — Sakura OS v2

Revisão local preparada em 18/11/2026 na branch `codex/sakura-bilingual-v2`. A autora aprovou explicitamente a publicação desta revisão, incluindo n8n e Make. Os checks abaixo documentam a preparação local anterior ao envio.

## Checks concluídos

- Base remota atual confirmada por fetch: `0cb6f36008f585019d1d8c53cd910e0d3626a914`. Os repositórios públicos dos projetos continuam atualizados nas cópias de auditoria.
- Ambos os READMEs passaram pelo renderizador Markdown oficial do GitHub, em modo GFM. O HTML retornado preserva `picture`/`source`, seletor de idioma, ícones, links e seções `details`.
- Validador local passou para **40 destinos locais por idioma**, incluindo seletores, fontes de imagem móvel, arquivos e âncoras. Também confere paridade de imagens e links externos entre PT/EN, alt text, blocos de código e ausência de conteúdo executável no Markdown.
- Apresentações: **80 palavras em português, 78 em inglês**. Descrições: NekoStrike 54/51, Cyber Kitty 57/56 e Nocturne AI 52/52. Todas dentro das faixas editoriais solicitadas.
- **68 SVGs** analisados como XML. Os arquivos autorais têm metadados acessíveis; os SVGs de terceiros ficam com fontes e licenças locais. Não há scripts, recursos externos executáveis ou segredos detectados.
- Todos os assets publicados da primeira versão permanecem sem alterações. As capturas reais do jogo e a imagem histórica da Mochi AI estão preservadas.
- Imagens referenciadas: aproximadamente **437 KB por idioma**, incluindo as duas opções de hero; o navegador seleciona apenas a variante adequada. Os arquivos-fonte de assets somam aproximadamente **550 KB**, incluindo originais e licenças.
- Dez links HTTP distintos responderam 200, incluindo projetos, documentação e demo pública. O LinkedIn respondeu 999 à verificação automatizada; foi preservado o endereço profissional existente. E-mails não foram enviados.
- `git diff --check` passou. O gerador e o validador usam Node nativo e não instalam dependências.

## Revisão no navegador

Foi usado o navegador integrado, sem iniciar processos Chrome, Edge ou Chromium locais. O servidor é somente leitura, limitado às prévias e aos assets/documentos do perfil, vinculado a `127.0.0.1:4186`.

- Prévia desktop em 1280 px e móvel em **390 × 844 px**.
- Português → inglês → português com links reais.
- Cabeçalho móvel selecionado por `picture`; a propriedade `currentSrc` confirmou o SVG móvel.
- Grade com duas colunas no celular; nomes, logos e textos legíveis nas capturas inspecionadas.
- **29 imagens carregadas, nenhuma quebrada**, em ambas as versões verificadas.
- Ausência de estouro horizontal: `scrollWidth` 375 para viewport 390; 1265 para viewport 1280, descontando a barra de rolagem.
- Tema escuro e prévia com tema claro forçado, sem alterar preferências da conta. Contraste dos assets inspecionado visualmente.
- Âncora de tecnologias e âncora portuguesa com acento (`Atividade pública`) navegadas; seção de níveis de experiência expandida.
- Alternativa estática conferida: hero e rodapé carregam os respectivos arquivos `-static.svg`.
- Animações do terminal, estrelas e cauda renderizaram na prévia. O viewport temporário foi restaurado ao tamanho padrão.

## Limites

O HTML é renderizado pela API do GitHub, mas a página de prévia usa estilos locais aproximados. Após a aprovação explícita, a revisão foi publicada na main preservando o histórico. O perfil real em português e o link English foram conferidos no navegador: o cabeçalho em inglês carregou, e n8n e Make apareceram corretamente na seção de ferramentas. A captura do perfil publicado foi salva entre os artefatos locais de revisão.

Não foram feitos testes em aparelhos físicos, leitor de tela ou medição de desempenho das animações. A preferência de movimento reduzido foi preservada nos SVGs, mas sua propagação pelo proxy do GitHub não foi certificada. Há links estáticos explícitos como alternativa.

Nocturne AI e os conhecimentos adicionais seguem as confirmações da autora. Não houve inspeção de código do Nocturne nem validação independente dos níveis autoavaliados.

## Arquivos para revisão

As prévias ficam fora do repositório, na pasta irmã `profile-preview-v2/`: `index.html`, `en.html`, alternativas estáticas, tema claro, HTML da API, checks JSON e capturas desktop/mobile. Os dois seletores de idioma são funcionais nessa prévia.

Para repetir os checks a partir da raiz do repositório:

```text
node scripts/refine-assets.mjs
node scripts/validate.mjs
git diff --check
```

## Inclusão de ferramentas

A pedido da autora, n8n e Make foram adicionados às versões PT/EN, com dois novos cartões locais e ícones da revisão fixada de Simple Icons. Make foi interpretado como a plataforma de automação referida como 'maker'. A grade agora tem 23 cartões. Os quatro SVGs novos passaram pela análise XML e os checks locais foram reexecutados; as prévias e o ZIP foram atualizados. As contagens do teste de navegador acima registram a revisão anterior a essa pequena inclusão.
