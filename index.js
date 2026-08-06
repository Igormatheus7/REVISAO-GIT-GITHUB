let produtos = [
    {
        nome: "Iphone 12",
        preco: 5000
    },
    {
        nome: "Iphone 13",
        preco: 7000
    },
    {
        nome: "Iphone 14",
        preco: 9000
    },
]

produtos.shift()
console.table(produtos)

const produtoEncontrado = produtos.find((produto) => produto.nome === "Iphone 13");
console.log(produtoEncontrado);

produtos.sort((a, b) => a.preco - b.preco);
console.table(produtos);
