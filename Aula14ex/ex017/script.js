function tabuada() {
    // variaveis para "pegar" os valores digitados
    let num = document.getElementById('txtn')
    let tab = document.getElementById("seltab")
//se o campo estiver vazio aparece a seguinte mensagem
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!")
    } else {
        //caso contrario executa o laço
        let n = Number(num.value) // conversão do valor digitado que é testo para numero
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            // criando um elemento do tipo option para o select do html 
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}` // para php, usa este valor para alguma operação onde queira usar este valor
            tab.appendChild(item)
            c++//incrementa c para rodar o laço 
        }
    }
}