## Pokedex

Este projeto é uma Pokedex desenvolvida utilizando HTML, CSS e JavaScript com o objetivo de praticar o protocolo HTTP e integração com a API REST da PokeAPI (https://pokeapi.co/). Através desta Pokedex, é possível consultar informações sobre Pokemons, visualizando sua lista, detalhes e imagens.

[![Link do Projeto](https://img.shields.io/badge/▶-000?style=for-the-badge&logo=movie&logoColor=E94D5F)](https://pokemon-tracker.netlify.app/)
[![Link do Projeto](https://img.shields.io/badge/Acesse%20o%20Projeto-E94D5F?style=for-the-badge)](https://pokemon-tracker.netlify.app/)

## 🎯 Objetivo
O principal objetivo deste projeto é o domínio do protocolo HTTP e demonstração a integração com uma API externa. A Pokedex serve como um exeplo prático para treinar conceitos de requisições e consumo de dados de uma API.

## 🛠️ Recursos
![HTML 5](https://img.shields.io/badge/HTML5-333333?style=for-the-badge&logo=html5)
![CSS 3](https://img.shields.io/badge/CSS3-333333?style=for-the-badge&logo=css3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-333333?style=for-the-badge&logo=javascript)
![PokéAPI](https://img.shields.io/badge/PokéAPI-333333?style=for-the-badge&logo=pokémon&logoColor=white)

## ⚙️ Funcionalidades 
- Listagem paginada de Pokémons.
- Exibição de detalhes dos Pokémons em um modal.
- Carregamento dinâmico de novos Pokémons.
- Consumo de dados diretamente da PokeAPI.

## 📝 Como funciona
O projeto inicia exibindo uma lista de Pokémons, com dados como nome e número, provenientes da [PokéAPI](https://pokeapi.co/). A lista é carregada de forma paginada, com 8 Pokémons exibidos por vez. Ao clicar no botão "Carregar pokémons", a aplicação faz uma nova requisição para trazer mais Pokémons e adicionar à lista.

Cada Pokémon pode ser clicado para abrir um modal com mais informações sobre ele, como tipo, habilidades, peso e altura. Os detalhes são carregados de maneira dinâmica através da requisição à API.

## 📦 Como usar
Para baixar o projeto para sua máquina local usando o comando
1. Clone este repositório:
    ```
    git clone https://github.com/fernandatollotti/pokedex.git
2. Navegue no terminal até o diretório do projeto:
    ```
    cd pokedex
3. Abra o arquivo `index.html` no seu navegador.

## 🌟 Créditos
O projeto foi desenvolvido como parte de um projeto educacional da Digital Innovation One.

## 📜 Licença  
Projeto está licenciado sob a licença [MIT License](https://github.com/fernandatollotti/pokedex?tab=MIT-1-ov-file).
