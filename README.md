<h1 align="center">:file_cabinet: FinSys</h1>

## :memo: Descrição

O FinSys é uma API Rest para controle de transações, criada como desafio Fullture utilizando NodeJs, Express e Mongoose. É possível armazenar as transações no banco de dados ou na memória, com rotas organizadas através de controllers, use cases e routes. 

As operações disponíveis são:
- `GET /transactions?page=:number`: Retorna todas as transações com paginação.
- `GET /transactions/:id`: Retorna uma única transação pelo ID.
- `POST /transactions`: Cria uma nova transação com verificação de tipo dos dados passados.
- `PUT /transactions/:id`: Atualiza uma transação existente com parametrização do ID.
- `DELETE /transactions/id/:value`: Deleta uma transação existente pelo ID.
- `DELETE /transactions/type/:value`: Deleta uma ou mais transações pelo tipo.

## :wrench: Tecnologias utilizadas
- NodeJs
- Express
- Mongoose
- JavaScript

## :rocket: Rodando o projeto
Para rodar o repositório é recomendado o clonar:

```
https://github.com/Richard-Passos/finsys-backend.git
```

## :handshake: Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Richard-Passos">
        <img src="https://img.freepik.com/vetores-premium/desenho-de-desenho-animado-de-um-programador_29937-8176.jpg" width="100px;" alt="Developer"/><br>
        <sub>
          <b>Richard P</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto

Finalizado
