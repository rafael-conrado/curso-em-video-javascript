// adicionar o valor com a mensagem "valor ## adicionado" ao clicar btnadicionar e limpar os resultados anteriores
// se inserir um valor já adiocionado, caixa vazia ou maior que 100 e menor que 1, mostrar o alert ("Valor invalido ou já encontrado na lista")
// ao clicar btn finalizar mostrar : total de numeros cadastrados, maior e menor valor, soma total e média e mostrar alert("Adicione valores antes de finalizar") caso a lista esteja vazia

let valor = document.getElementById('entrada') // entrada de valor
var res = document.getElementById("resultado")
let lista = document.getElementById('lista')
var arrayValores = []


function isNumero(n) {
    if (Number(n >= 1 && Number(n) <= 100)) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}


function adicionar() {



    if (isNumero(valor.value) && !inLista(valor.value, arrayValores)) {
        arrayValores.push(Number(valor.value))
        let item = document.createElement('option')
        item.text = `Valor ${valor.value} adicionado `
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista. ")

    }
    valor.value = ""
    valor.focus()


}

function finalizar() {
    if (arrayValores == 0) {
        window.alert("Adicione valores antes de finalizar")
    } else {
        let total = arrayValores.length
        let maior = arrayValores[0]
        let menor = arrayValores[0]
        let soma = 0
        let media = 0

        for (let pos in arrayValores) {
            soma += arrayValores[pos]
            if (arrayValores[pos] > maior) {
                maior = arrayValores[pos]

            }

            if (arrayValores[pos] < menor) {
                menor = arrayValores[pos]
            }

        }
        media = soma / total


        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos${soma} </p>`
        res.innerHTML +=`<p>A média dos valores digitados é ${media}</p>`



    }




}
