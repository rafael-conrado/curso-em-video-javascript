function verificar() {

    var data = new Date() // trabalhar com data 
    var ano = data.getFullYear() // pega o valor inteiro do ano (XXXX)
    var fano = document.getElementById('txtano') // usar id
    var res = document.querySelector('div#res') // usar query



    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // = <img id="foto>", criacao de imagem dinamicamente

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.png')//criacao de imagem dinamicamente
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.png')

            } else if (idade < 50) {
                img.setAttribute('src', 'homem.png')

            } else {
                img.setAttribute('src', 'idoso.png')

            }

        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-f.png')


            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center' //configuracao dinamica
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>` // centraliza sem usar css ou  html
        res.appendChild(img)// centraliza sem usar css ou  html


    }

}
