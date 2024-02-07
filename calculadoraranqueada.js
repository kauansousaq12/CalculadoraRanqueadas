function calculadoraRanqueada(qntVitoria, qntDerrotas){
    saldodeVitorias = qntVitoria - qntDerrotas
        if(saldodeVitorias <= 10){
            nivel = "Ferro"
        } else if(saldodeVitorias >= 11 && saldodeVitorias <= 20){
            nivel = "Bronze"
        } else if(saldodeVitorias >= 21 && saldodeVitorias <= 50){
            nivel = "Prata"
        } else if(saldodeVitorias >= 51 && saldodeVitorias <= 80){
            nivel = "Ouro"
        } else if(saldodeVitorias >= 81 && saldodeVitorias <= 90){
            nivel = "Diamante"
        } else if(saldodeVitorias >= 91 && saldodeVitorias <= 100){
            nivel = "Lendario"
        } else if(saldodeVitorias >= 101){
            nivel = "Imortal"
        }
    console.log("O Heroi tem de saldo de vitoria " + qntVitoria + " está no nivel de " + nivel)
}

calculadoraRanqueada(100, 50)

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"