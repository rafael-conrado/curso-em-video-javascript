function contarpasso() {
   var inicio = document.querySelector('.inicio')
   var fim = document.querySelector('.fim')
   var passo = document.querySelector('.passo')
   var saida = document.querySelector('div#saida')




   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
     
      window.alert("[ERRO] : algum campo está vazio, por favor conferir e tentar novamente !")
      saida.innerHTML = "IMPOSSÍVEL CONTAR"
   }

   else {
      inicio = Number(inicio.value)
      fim = Number(fim.value)
      passo = Number(passo.value)
      saida.innerHTML = "Começando 👨‍💻 : <br> "
      if(passo <= 0){
         window.alert("Passo não pode ser '0', considerando passo = 1")
         passo =1
      }

      if (inicio < fim) {
         for (inicio; inicio <= fim; inicio += passo) {

            saida.innerHTML += ` ${inicio}  `
         }
        
      } else {
         for (inicio; inicio >= fim; inicio -= passo) {

            saida.innerHTML += ` ${inicio}  `
         }
      }
      saida.innerHTML += "🏆"
   }
}


function limpar() {
   saida.innerHTML = " "
}
