
# Carrinho de compras - React


🚧  Página em ReactJS de carrinho de compras  🚧
<br>
<br>

  🚀 Em construção... 

---
## CheckList de desenvolvimento

### Header
- [x] Receber o array cart do hook useCart e mostrar em tela a quantidade de produtos distintos adicionados ao carrinho
### Home

- [ ] **cartItemsAmount:** Deve possuir as informações da quantidade de cada produto no carrinho. Sugerimos criar um objeto utilizando `reduce` onde a chave representa o id do produto e o valor a quantidade do produto no carrinho. Exemplo: se você possuir no carrinho um produto de id 1 e quantidade 4 e outro produto de id 2 e quantidade 3, o objeto ficaria assim:

  ```jsx
  {
    1: 4,
    2: 3
  }
  ```

- [ ] **loadProducts:** Deve buscar os produtos da Fake API e formatar o preço utilizando o helper `utils/format`
- [ ] **handleAddProduct:** Deve adicionar o produto escolhido ao carrinho.

### Cart 

- [ ] **cartFormatted:** Deve formatar o carrinho adicionando os campos `priceFormatted` (preço do produto) e `subTotal` (preço do produto multiplicado pela quantidade) ambos devidamente formatados com o `utils/format`.
- [ ] **total:** Deve possuir a informação do valor total do carrinho devidamente formatado com o `utils/format`.
- [ ] **handleProductIncrement:** Deve aumentar em 1 unidade a quantidade do produto escolhido ao carrinho.
- [ ] **handleProductDecrement:** Deve diminuir em 1 unidade a quantidade do produto escolhido ao carrinho, onde o valor mínimo é 1 (nesse caso o botão deve estar desativado).
- [ ] **handleRemoveProduct:** Deve remover o produto escolhido do carrinho.

### Hook UseCart

Ele é responsável por:
- hook `useCart`;
- context `CartProvider`;
- manipular `localStorage`;
- exibir `toasts`.

Os principais pontos a implementar:

- [ ] **cart:** Deve verificar se existe algum registro com o valor `@RocketShoes:cart` e retornar esse valor caso existir. Caso contrário, retornar um array vazio.
- [ ] **addProduct:** Deve adicionar um produto ao carrinho.
- [ ] **removeProduct:** Deve remover um produto do carrinho.     
- [ ] **updateProductAmount:** Deve atualizar a quantidade de um produto no carrinho. 