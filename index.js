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

produtos.unshift()
console.table(produtos)
