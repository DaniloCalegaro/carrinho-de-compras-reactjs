# Carrinho de compras - React
![GitHub repo size](https://img.shields.io/github/repo-size/DaniloCalegaro/carrinho-de-compras-reactjs)

### Tabela de conteúdos

- [Carrinho de compras - React](#carrinho-de-compras---react)
    - [Tabela de conteúdos](#tabela-de-conteúdos)
  - [Visão Geral](#visão-geral)
    - [A Página](#a-página)
    - [Captura de Tela](#captura-de-tela)
    - [Desenvolvimento do conhecimento](#desenvolvimento-do-conhecimento)
  - [CheckList de desenvolvimento](#checklist-de-desenvolvimento)
    - [Header](#header)
    - [Home](#home)
    - [Cart](#cart)
    - [Hook UseCart](#hook-usecart)
  - [Pré-requisitos](#pré-requisitos)
  - [Autor](#autor)

## Visão Geral
### A Página

Projeto de uma aplição para e-commerce, com uma pagina `Home` com os produtos disponíveis e uma pagina `Cart` com os produtos colocado no carrinho. 

Esta aplicção realiza consulta em uma API fake implementada através do **JSON Server** para buscar os produtos e o estoque disponível.

### Captura de Tela

![carrinho-de-compras-reactjs](https://user-images.githubusercontent.com/33231886/175975956-df1321ad-0e40-420f-a708-32aaa93a2372.jpg)

### Desenvolvimento do conhecimento

Para desenvolvimento foi fornecido o layout já codificado e a tarefa era desenvolver todo o funcionamento.

Para isto na `brand: main` esta minha solução onde consegui o resolver a solução passando por todos os testes. 
````
Test Suites: 4 passed, 4 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        7.862 s, estimated 8 s
Ran all test suites.
````

Na `brand: feature-correction` possui a correção do código para ficar semântico e seguir os princípios da imutabilidade.

Foi um desafio muito grande, principalmente pela quantidade de testes no qual deveria se passar, mais com muita dedicação e persistência sempre evoluímos.


## CheckList de desenvolvimento

### Header
- [x] Receber o array cart do hook useCart e mostrar em tela a quantidade de produtos distintos adicionados ao carrinho
### Home

- [x] **cartItemsAmount:** Deve possuir as informações da quantidade de cada produto no carrinho.
- [x] **loadProducts:** Deve buscar os produtos da Fake API e formatar o preço utilizando o helper `utils/format`
- [x] **handleAddProduct:** Deve adicionar o produto escolhido ao carrinho.

### Cart 

- [x] **cartFormatted:** Deve formatar o carrinho adicionando os campos `priceFormatted` (preço do produto) e `subTotal` (preço do produto multiplicado pela quantidade) ambos devidamente formatados com o `utils/format`.
- [x] **total:** Deve possuir a informação do valor total do carrinho devidamente formatado com o `utils/format`.
- [x] **handleProductIncrement:** Deve aumentar em 1 unidade a quantidade do produto escolhido ao carrinho.
- [x] **handleProductDecrement:** Deve diminuir em 1 unidade a quantidade do produto escolhido ao carrinho, onde o valor mínimo é 1 (nesse caso o botão deve estar desativado).
- [x] **handleRemoveProduct:** Deve remover o produto escolhido do carrinho.

### Hook UseCart

Ele é responsável por:
- hook `useCart`;
- context `CartProvider`;
- manipular `localStorage`;
- exibir `toasts`.

Os principais pontos a implementar:

- [x] **cart:** Deve verificar se existe algum registro com o valor `@RocketShoes:cart` e retornar esse valor caso existir. Caso contrário, retornar um array vazio.
- [x] **addProduct:** Deve adicionar um produto ao carrinho.
- [x] **removeProduct:** Deve remover um produto do carrinho.     
- [x] **updateProductAmount:** Deve atualizar a quantidade de um produto no carrinho. 

## Pré-requisitos

Para executar o projeto *local*, primeiramente baixamos o projeto em nosso equipamento e utilizamos os comandos:
> yarn install

Logo em seguida iniciamos o servidor fake:
> yarn server

E para iniciar a aplicação:
> yarn start

Após estes passos a aplicação poderá ser visualizada no endereço [http://localhost:3000](http://localhost:3000), e o servidor de produtos e estoques nos respectivos endereços:
- [http://localhost:3333/products/](http://localhost:3333/products/)
- [http://localhost:3333/stock/](http://localhost:3333/stock/)

## Autor
Linkedin - [Danilo Calegaro](https://www.linkedin.com/in/danilo-calegaro/)