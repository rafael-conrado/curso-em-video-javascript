let amigo = {
    nome: 'Rafael',
    sexo: 'Homem',
    peso: 60.0,
    engordar(p) {
        console.log('Engordou')
        this.peso += p
    }
    

}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)