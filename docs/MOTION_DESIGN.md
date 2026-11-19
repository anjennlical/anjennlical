# Sakura OS — movimento, hierarquia e leitura

## Comportamento

As ações do perfil usam um movimento de seta de 3 px e um brilho discreto na borda. O ciclo de oito segundos contém pausas longas. Assim, o efeito continua disponível quando a pessoa chega a uma seção mais abaixo na página; a implementação anterior fazia uma única execução após carregar.

Os cabeçalhos dos projetos variam lentamente a luz da linha lateral e de um ponto decorativo, em ciclos de oito a dez segundos. Texto, logotipos, capturas e dimensões permanecem estáveis. Os controles de idioma e de movimento são estáticos. Não há animação de todos os ícones nem deslocamento da página.

Os SVGs de ações e cabeçalhos possuem nomes com hash do conteúdo. Uma alteração de estilo produz uma URL nova, evitando a reutilização de uma imagem antiga em cache. Os arquivos anteriores continuam disponíveis; não é necessário limpar dados pessoais do navegador.

## Controles e acessibilidade

- `prefers-reduced-motion: reduce` desativa as regras animadas.
- **Sem movimento / Reduce motion** abre o perfil completo com hero, rodapé, botões e cabeçalhos estáticos.
- A troca de idioma mantém essa escolha; é possível retornar à versão animada.
- A superfície visível dos botões foi reduzida de 38 para 32 px; a imagem conserva 44 px de altura para a área de clique. Larguras acompanham rótulos mais curtos, sem reduzir a escala da fonte por CSS.
- As cores e o contraste da identidade rosa foram preservados. Conteúdo e contatos essenciais também estão em texto copiável.

## Vitrine mais direta

A apresentação tem 58 palavras em português e 59 em inglês. As descrições dos projetos ficam entre 24 e 31 palavras. Recursos, stack e estado continuam visíveis; capturas e demonstrações reais são preservadas. Informações de evolução ficam em um bloco expansível, sem repetir toda a vitrine.

## Manutenção e verificação

Execute `node scripts/build-static-readmes.mjs` e `node scripts/validate.mjs`.

Os checks cobrem os quatro documentos, âncoras, arquivos, paridade dos idiomas e ausência de animação nas alternativas estáticas. O navegador confirmou `sakura-nudge`, duração de oito segundos, iteração `infinite` e deslocamento calculado próximo de 3 px durante a execução.

As prévias usam HTML renderizado pela API do GitHub e estilos locais aproximados. O suporte à preferência do sistema dentro do proxy de imagens não foi certificado em todos os navegadores; a opção explícita sem movimento fornece uma alternativa independente. Testes em aparelhos físicos e medidas de FPS não foram realizados.
