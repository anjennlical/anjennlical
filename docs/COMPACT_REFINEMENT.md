# Perfil compacto — 19/11/2026

## Leitura e hierarquia

A apresentação passou de 87 para 58 palavras em português e de 84 para 59 em inglês. As descrições dos projetos agora têm 24–31 palavras. Stack, estado, repositórios, demonstração técnica, capturas reais e atribuições continuam disponíveis. O andamento dos projetos foi colocado em uma seção expansível para reduzir repetição.

Os controles de idioma e de movimento compartilham a mesma faixa. Botões têm largura proporcional ao rótulo, fonte de 13 px, superfície de 32 px e área de clique de 44 px. A escala foi conferida visualmente; rótulos e setas possuem espaços próprios. Texto e áreas clicáveis permanecem estáveis.

## Movimento visível ao navegar

A versão anterior executava os novos efeitos uma única vez. As ações agora têm ciclos de oito segundos com pausas longas; detalhes dos projetos variam a luz em oito a dez segundos. Idioma e controle de movimento ficam estáticos. A alternativa completa sem movimento e `prefers-reduced-motion` permanecem preservados.

Os arquivos utilizados nos READMEs têm nomes com hash do conteúdo. Uma alteração gera novas URLs, evitando reutilização de um SVG antigo em cache. Os arquivos canônicos e as alternativas estáticas continuam organizados no mesmo sistema de assets.

## Verificação

- Quatro READMEs passaram pelo renderizador Markdown do GitHub e pelo validador local de arquivos, âncoras e paridade entre idiomas.
- Alternativas estáticas não referenciam SVGs com keyframes ou SMIL de animação.
- 208 SVGs analisados como XML; imagens referenciadas por versão animada somam aproximadamente 463 KB.
- No navegador, a seta apresentou `sakura-nudge`, oito segundos, `infinite` e transformações calculadas próximas de 3 px em momentos diferentes.
- Prévia desktop e em 390 × 844 px inspecionada; nenhuma imagem quebrada ou estouro horizontal detectado. Troca para inglês e alternativa estática conferidas; viewport restaurado.
- Sem novos serviços externos, bibliotecas, GIFs ou alterações nas configurações da conta.

Os checks de navegador não substituem avaliação em aparelhos físicos ou certificação de acessibilidade. Não foram realizadas medidas de FPS.
