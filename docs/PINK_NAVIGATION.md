# Refinamento rosa — implementação e verificação

A pedido da autora, a navegação principal, o seletor de idiomas, as ações dos projetos e o contato usam botões SVG rosa clicáveis. São imagens dentro de links normais, com destinos reais e alt text, sem JavaScript ou CSS externo no README. Links de referência continuam com a cor definida pelo GitHub. A limitação foi conferida no pipeline oficial de `github/markup` e no renderizador Markdown da API.

O rosa foi reforçado nos títulos do hero, em superfícies e contornos dos cards e na assinatura. As marcas das ferramentas e as capturas reais permaneceram preservadas. Não foram acrescentadas animações.

## Checks locais

- Os dois idiomas têm os mesmos destinos e recursos equivalentes; 57 referências locais por documento passaram no validador.
- Todos os 100 SVGs passaram pela análise XML. As imagens referenciadas somam aproximadamente 453 KB por idioma.
- Contraste calculado: ação preenchida 10,61:1; ação secundária 12,36:1; título rosa no fundo noturno 11,70:1.
- API Markdown do GitHub preservou imagens, links, `picture` e os rótulos das ações.
- Prévia em desktop e 390 × 844: navegação para Projetos e troca para inglês funcionaram; nenhuma imagem quebrada ou estouro horizontal detectado. Viewport temporário restaurado.
- Sem chamadas a LLMs, serviços pagos, novas dependências ou mudanças de configurações do GitHub.

Gerador: `node scripts/pink-links.mjs`. Integridade: `node scripts/validate.mjs`.
