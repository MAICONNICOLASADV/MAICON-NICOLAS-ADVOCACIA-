# MN Advocacia — versão estática

Esta versão foi preparada para funcionar sem Render, sem backend, sem banco de dados e sem painel administrativo.

## Estrutura
- `index.html` — página principal
- `css/style.css` — estilos
- `js/main.js` — interações e envio direto para WhatsApp
- `assets/images/` — imagens do site
- `.nojekyll` — permite publicação como arquivos estáticos

## O que foi removido
- Go/backend
- Node/Express
- SQLite/Turso
- login
- painel administrativo
- rastreamento de visitas
- gravação de leads no banco

## Formulário
O formulário continua no site, mas agora monta a mensagem e abre diretamente o WhatsApp do escritório.

## Publicação
O conteúdo desta pasta pode ser publicado diretamente no GitHub Pages.
