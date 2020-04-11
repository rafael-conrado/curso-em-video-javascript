function contarpasso() {
   var inicio = Number(document.querySelector('.inicio').value)
   var fim = Number(document.querySelector('.fim').value)
   var passo = Number(document.querySelector('.passo').value)
   var saida = document.querySelector('div#saida')
   var loop = 0;



   if (inicio == "") {
      saida.innerHTML = "Impossível calcular, por favor inserir um valor"
    return false
   } else if (passo == 0) {
      window.alert("passo deve ser diferente de '0', considerando passo como 1")
      passo = 1
      for (inicio; inicio <= fim; inicio += passo) {
         if (loop == 0) {
            saida.innerHTML += `começando 👨‍💻 👉${inicio}  `
            loop = 1
         } else if (loop == 1) {
            saida.innerHTML += `👉${inicio}  `
         }

      }
   } else if (inicio != "") {
      for (inicio; inicio <= fim; inicio += passo) {
         if (loop == 0) {
            saida.innerHTML += `começando 👨‍💻 👉${inicio}  `
            loop = 1
         } else if (loop == 1) {
            saida.innerHTML += `👉${inicio}  `
         }
       
      }
   }
}

function limpar() {
   saida.innerHTML = " "
}
