# Salario Mínimo API

[Esta API](https://salario-minimo.onrender.com/) retorna os valores dos salários mínimos vigentes no Brasil, disponíveis [nesta página](http://www.ipeadata.gov.br/exibeserie.aspx?stub=1&serid1739471028=1739471028) do Governo Federal.

## Rotas

- `/`: Retorna todos os dados desde setembro 1994 (finais terminados em `,00`).
- `/show/2020-05`: Retorna somente o salário vigente neste período.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [Scrape-it](https://github.com/IonicaBizau/scrape-it#readme)

## Como rodar o projeto

```sh
git clone https://github.com/diasjoaovitor/salario-minimo-api
cd salario-minimo-api
npm i
npm run start
```
