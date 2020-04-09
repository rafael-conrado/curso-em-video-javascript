var idade = 66

if (idade <16)
{
    console.log(`Com ${idade} anos, no Brasil não pode votar!`)
} else if ( idade >= 16 && idade<18 ||idade >65) {
console.log(`Com ${idade} anos, no Brasil seu voto é opcional!`)
}else {
    console.log(`Com ${idade} anos, no Brasil o voto é obrigatório!`)
}