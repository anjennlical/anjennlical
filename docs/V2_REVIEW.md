# Sakura OS v2 — revisão local

## Auditoria e decisões

Base pública: commit `0cb6f36008f585019d1d8c53cd910e0d3626a914`, confirmado por fetch. O README completo, o gerador de SVGs e os assets publicados foram revisados. Os READMEs públicos de NekoStrike e Cyber Kitty foram relidos e continuam nas revisões documentadas na primeira versão. Nenhum projeto público novo apareceu na consulta atual.

A versão anterior tinha uma identidade consistente, mas usava apenas inglês, uma apresentação muito curta e uma tabela predominantemente textual para tecnologias. A descrição de Cyber Kitty começava pela vitrine técnica, reduzindo o destaque do jogo que a autora deseja apresentar. O hero ocupava 500 unidades de altura; os cabeçalhos dos projetos, 154, com espaço decorativo que podia ser reduzido.

Preservados: Midnight Sakura, paleta, Sakura OS, Sakura Byte, formas e movimento do mascote, estrelas, terminal, imagens reais autorizadas do jogo, captura simulada devidamente identificada da Mochi AI, links públicos e contatos. Os assets originais continuam no repositório.

Refinados: hero de 500 para 420 unidades; cabeçalhos de projetos de 154 para 124; rodapé de 150 para 124. A apresentação passa a ter cerca de 80 palavras, e as três descrições principais ficam entre 40 e 65 palavras. Recursos, stack, estado e links ficam separados em blocos curtos. Cyber Kitty começa pelo problema educativo e pelo jogo; a demo permanece explicitamente separada.

## Idiomas e ícones

`README.md` é o perfil em português; `README.en.md` fornece a leitura completa em inglês. Os seletores são links relativos reais. Cada idioma possui âncoras, textos alternativos, hero, cards e rodapé traduzidos. Logos e capturas reais são compartilhados; o texto existente dentro das capturas não é alterado.

As quatro categorias usam 23 cartões de ícones locais, com dimensões, molduras e alinhamento consistentes. A quebra natural de linha substitui tabelas largas. A marca é acompanhada por nome e alt text, e as ferramentas essenciais também aparecem no texto. Tecnologias sem ícone escolhido e conceitos sem logotipo ficam em texto. Não há serviços de badges, CSS externo ou JavaScript no README.

O teste móvel mostrou que reduzir apenas o SVG desktop diminuía demais os textos. Foram acrescentadas composições móveis nos dois idiomas, selecionadas por `picture`/`source`, com a mesma gatinha e hierarquia adaptada. Nenhuma animação nova foi adicionada; o SVG desktop permanece como fallback.

## Informações confirmadas pela autora

A autora confirmou nesta revisão que Nocturne AI está em desenvolvimento e pediu a descrição da proposta de investigação digital com IA e arquitetura multiagente. Não forneceu código ou documentação para verificação de funcionalidades; por isso o texto apresenta a arquitetura como planejada e não cria um repositório, stack implementada ou demonstração.

Java, Gemini, AWS, Power BI, VS Code, MITRE ATT&CK e SIEM/SOC foram confirmados pela autora como parte da experiência intermediária a avançada, com Gemini e VS Code em nível avançado. O bloco expansível apresenta esses níveis como autoavaliação. A descrição distingue conhecimentos complementares da stack demonstrada nos repositórios. Nenhuma certificação foi inferida.

## Escopo de entrega

Trabalho preparado na branch `codex/sakura-bilingual-v2`. Após revisar a prévia e solicitar n8n e Make, a autora aprovou explicitamente a publicação desta versão bilíngue. Não houve alterações no código dos projetos, configurações do GitHub ou serviços pagos.

Consulte `V2_VERIFICATION.md` para os resultados reais dos checks e as limitações da prévia.
