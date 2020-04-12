let num = [1,2,3,4]
console.log(`nosso vetor é o ${num}`)
num[1] = 9 // coloca o numero 9 na posição 1, que no caso é a segunda casa, array começa em 0
num.push(5) // coloca um elemento na última posição
console.log(`nosso vetor é o ${num}`)
console.log(num.length)// tamanho do vetor
console.log(num.sort())//ordernar elementos

let pos = num.indexOf(4)// busca o valor entre() e retorna a posição no vetor, caso não seja encontrado ele retorna -1
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor 4 està na posição ${pos}`)

}



