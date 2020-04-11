
var a = 0;

function contarpasso() {
   var inicio = Number(document.querySelector('.inicio').value)
   var fim = Number(document.querySelector('.fim').value)
   var passo = Number(document.querySelector('.passo').value)
   var saida = document.querySelector('div#saida')
   

   if (inicio == "") {
     saida.innerHTML = "Impossível calcular, por favor inserir um valor"
      a = 1
      return false;
   }



   for (inicio; inicio <= fim; inicio += passo) {

      if (a == 0 || a ==1) {
         saida.innerHTML += `começando 👨‍💻 👉${inicio}  `
         a=2
      } else  {
         saida.innerHTML += `👉${inicio}  `
      }

      /*
      inicio em branco "impossivel contar, inserir valor"
      passo = 0 , passo invalido e iniciar com passo 1 
      */

   }


}

function limpar() {
   if (a == 0  ) {
      saida.innerHTML = " "
   }
   

}
