# 👟 Shoes Shop — Dashboard

Dashboard de catálogo de produtos para uma loja de tênis, desenvolvido com HTML e CSS puros. O projeto simula um painel administrativo de estoque, com cards de produtos em destaque, grade de catálogo, alternância de tema claro/escuro e containerização via Docker.

## 🎯 Sobre o projeto

Interface inspirada em dashboards de e-commerce modernos, com foco em:

- Layout organizado em sidebar + área de conteúdo principal
- Seção de produtos em destaque (best sellers) com card grande + cards laterais
- Grade de produtos do catálogo geral
- Alternância entre tema escuro e claro, com preferência salva no navegador
- Design responsivo (desktop, tablet e mobile)

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura semântica
- **CSS3** — Flexbox, Grid, CSS Custom Properties (variáveis) para theming
- **JavaScript** — alternância de tema com persistência via `localStorage`
- **Bootstrap Icons** — ícones da interface
- **Google Fonts (Inter)** — tipografia
- **Docker + Nginx** — containerização e servidor web para produção

## 📁 Estrutura do projeto

```
Frontend_Projeto1/
├── index.html          # Estrutura da página
├── style.css            # Estilos e temas (claro/escuro)
├── script.js             # Lógica de alternância de tema
├── imagens/              # Imagens dos produtos
│   ├── newbalance.png
│   ├── adidas1609ES.png
│   ├── AdidasHandball.png
│   ├── NikeAirForce1.png
│   ├── NikeBaltoroHigh.png
│   ├── AirJordan3.png
│   └── PumaV-S1.png
├── Dockerfile            # Imagem Docker baseada em nginx:alpine
├── compose.yaml          # Orquestração do container
└── README.md
```

## ✨ Funcionalidades

- **Catálogo em destaque**: produto principal (best seller) em card grande, com dois produtos secundários ao lado
- **Grade de produtos**: catálogo geral em cards com imagem, nome, quantidade em estoque e preço
- **Tema claro/escuro**: botão no header alterna entre os temas, com a escolha salva no navegador (persiste entre sessões)
- **Layout responsivo**: sidebar se adapta para navegação horizontal em telas menores; grade de produtos reorganiza de 4 → 2 → 1 colunas conforme o tamanho da tela

## 🚀 Como rodar o projeto

### Opção 1: Docker (recomendado)

Com o [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e em execução:

```bash
docker compose up --build
```

Acesse no navegador:

```
http://localhost:8080
```

Para parar o container:

```bash
docker compose down
```

### Opção 2: Abrir diretamente no navegador

Basta abrir o arquivo `index.html` em qualquer navegador — não há dependências de build ou instalação, já que o projeto é HTML/CSS/JS puro.

## 🐳 Containerização

O projeto utiliza a imagem oficial `nginx:alpine` como servidor web. O `Dockerfile` copia os arquivos estáticos (`index.html`, `style.css`, `script.js`, `imagens/`) para o diretório padrão do nginx (`/usr/share/nginx/html`), e o `compose.yaml` mapeia a porta `8080` do host para a porta `80` do container.

## 📌 Observações

- Projeto acadêmico desenvolvido como exercício de fundamentos de frontend (HTML/CSS) e containerização com Docker.
- Não possui backend ou persistência de dados de produtos — as informações são estáticas, definidas diretamente no HTML.
