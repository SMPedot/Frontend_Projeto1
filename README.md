# 🎵 Music Player - Twenty One Pilots

Mini-player de música inspirado em interfaces como Spotify/Apple Music, desenvolvido com HTML, CSS e JavaScript puro, como projeto acadêmico de frontend.

## Funcionalidades

- ▶️ Play / Pause
- ⏭️ Próxima / ⏮️ Anterior faixa
- 🔀 Modo aleatório (shuffle)
- 🔁 Repetir música
- ❤️ Curtir música (persistido no `localStorage`)
- 📊 Barra de progresso clicável (permite pular pra qualquer trecho da música)
- ⏱️ Exibição de tempo atual e duração total

## Tecnologias

- HTML5 semântico
- CSS3 (custom properties / variáveis CSS)
- JavaScript (vanilla, sem frameworks)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- Docker + Docker Compose (containerização com Nginx)

## Estrutura do projeto

```
.
├── index.html
├── style.css
├── script.js
├── images/          # capas dos álbuns
├── songs/           # arquivos de áudio (.mp3)
├── Dockerfile
├── docker-compose.yml
└── .dockerignore
```

## Como rodar

### Opção 1: Direto no navegador

Basta abrir o `index.html` no navegador (ou usar uma extensão como o Live Server do VS Code).

### Opção 2: Com Docker (recomendado)

Com o Docker Desktop instalado e rodando, na raiz do projeto:

```bash
docker compose up --build
```

Depois acesse:

```
http://localhost:8080
```

Para parar o container:

```bash
docker compose down
```

> O `docker-compose.yml` monta a pasta do projeto como volume, então qualquer alteração nos arquivos é refletida automaticamente no navegador, sem precisar rebuildar a imagem.

## Padrões adotados

- **HTML semântico**: uso de `<main>`, `<header>`, `<figure>`, `<section>` e `<footer>` para estruturar o conteúdo de forma significativa.
- **Separação de responsabilidades**: atributos `id` são usados exclusivamente para seleção via JavaScript; `class` é usada exclusivamente para estilização via CSS.

## Autor

Samuel
