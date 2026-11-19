# Sakura OS — movimento com leitura estável

## Direção

O pedido acrescenta movimento aos botões rosa e a outros detalhes do perfil preservando a hierarquia e a experiência já aprovadas. Foram animados apenas a seta e um detalhe de borda dos botões, além da linha lateral e de um ponto decorativo nos três cabeçalhos de projetos. Texto, logotipos, capturas, largura, altura e área clicável não se movem.

Os novos efeitos são finitos: botões usam 3,6 segundos com atraso entre 0 e 0,3 segundo; cabeçalhos usam 2,2 e 3,6 segundos. Depois ficam estáticos. Não há rolagem automática, flashes, variação de tamanho, novos GIFs ou JavaScript. Os efeitos antigos do hero e do mascote são preservados na versão animada.

## Controle de movimento

- `prefers-reduced-motion: reduce` desativa as novas regras de animação.
- O botão **Sem movimento / Reduce motion**, no início de cada perfil, abre `README.static.md` ou `README.en.static.md`.
- Essas versões substituem todos os SVGs animados por alternativas sem keyframes; hero, rodapé, botões e cabeçalhos são estáticos.
- A troca de idioma mantém a leitura sem movimento. Há um link para retornar à versão animada.
- Conteúdo, destinos, projetos, capturas e textos essenciais são os mesmos.

## Implementação e checks

Execute `node scripts/build-static-readmes.mjs` para gerar tudo, seguido de `node scripts/validate.mjs`.

- Quatro READMEs renderizados pela API Markdown oficial do GitHub.
- Checks locais de arquivos, âncoras, paridade entre idiomas, metadados e credenciais passaram nos quatro documentos.
- Os SVGs referenciados pelos perfis estáticos foram inspecionados automaticamente e não contêm keyframes nem elementos SMIL de animação.
- 138 SVGs passaram pela análise XML. Imagens referenciadas pela versão animada somam aproximadamente 464 KB por idioma; a estática, 454 KB.
- O navegador confirmou no SVG do botão `sakura-nudge`, duração de 3,6 s e uma iteração. Após o término, a seta voltou à posição original e o brilho ficou invisível.
- Fluxo Sem movimento → English e navegação para Projects conferidos na prévia. Nenhuma imagem quebrada e nenhum estouro horizontal em 390 × 844 px. O viewport temporário foi restaurado.
- As cores dos botões não mudaram: o contraste medido na revisão rosa permanece preservado.

A prévia local usa HTML do GitHub e estilos aproximados. O suporte do sistema a movimento reduzido dentro do proxy de imagens não foi certificado em todos os navegadores; por isso existe também uma escolha explícita, completa e funcional sem movimento. Não foram feitos testes em aparelhos físicos ou medidas de FPS.
