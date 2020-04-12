// adicionar o valor com a mensagem "valor ## adicionado" ao clicar btnadicionar e limpar os resultados anteriores
// se inserir um valor já adiocionado, caixa vazia ou maior que 100 e menor que 1, mostrar o alert ("Valor invalido ou já encontrado na lista")
// ao clicar btn finalizar mostrar : total de numeros cadastrados, maior e menor valor, soma total e média e mostrar alert("Adicione valores antes de finalizar") caso a lista esteja vazia

let valor = document.getElementById('entrada') // entrada de valor
var res = document.getElementById("resultado")
let lista = document.getElementById('lista')
var Avalor = []






function adicionar() {
    var valor1 = Number(valor.value) // converter o valor para número para poder aplicar operação lógica ||



    if (valor.value.length == 0 || valor1 < 1 || valor1 > 100) {
        window.alert('Valor invalido ou já encontrado na lista')
    } else {
        Avalor.push(Number( valor.value))
        var item = document.createElement('option')
        item.text = `Valor${valor.value} add `
        lista.appendChild(item)

    }



}

// function finalizar() {
//     if (saida.value.length == 0) {
//         window.alert("Adicione valores antes de finalizar")

//     }
// }
