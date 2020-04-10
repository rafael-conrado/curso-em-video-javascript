function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // instanciar para poder trabalhar com datas
    var hora = data.getHours() // pega somente o valor inteiro da hora 

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f' // alteracao do plano de fundo dinamicamente
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'// alteracao do plano de fundo dinamicamente

    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'// alteracao do plano de fundo dinamicamente

    }
}
