
/*1 - Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"
console.log("Olá mundo")*/

/*-------------------------------------------------------------------------------*/

/*2 - Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer!

var nome = window.prompt('Qual o seu nome?')
console.log(`Olá ${nome}, é um prazer te conhecer!`)*/

/*-------------------------------------------------------------------------------*/

/*3 -  Crie um programa que leia o nome e o salário de um funcionário, mostrando no 
final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
let nomeFuncionario = "Maria do Bairro"
let salarioFuncionario  = "2.500,00"
console.log(`O funcionário ${nomeFuncionario} tem um salário de R$${salarioFuncionario} em Junho.`)*/

/*-------------------------------------------------------------------------------*/

/*4 - Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório 
entre eles.
Ex:
Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13
let numero1 = 10
let numero2 = 30

let resultado = numero1 + numero2

console.log(`À soma entre ${numero1} e ${numero2} é igual a ${resultado}`)*/

/*-------------------------------------------------------------------------------*/

/*5 - Faça um programa que leia as duas notas de um aluno em uma matéria e mostre 
na tela a sua média na disciplina.
Ex: 
Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5
let nota1 = 9
let nota2 =7
let media = (nota1 + nota2) / 2 

console.log(`A média entre ${nota1} e ${nota2} é igual a ${media}`)*/

/*-------------------------------------------------------------------------------*/

/*6 - Faça um programa que leia um número inteiro e mostre o seu antecessor e seu 
sucessor.
Ex: 
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10
let numero = 5
let suc = numero + 1
let ant = numero - 1

console.log(`O antecessor de ${numero} é ${ant}
O sucessor de ${numero} é ${suc}`)*/

/*-------------------------------------------------------------------------------*/

/*7 - Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a 
sua terça parte.
Ex: 
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666
let numero = 9
let dobro = numero * 2
let terca = numero / 3

console.log(`O dobro de ${numero} é ${dobro}
A terça parte de ${numero} é ${terca}`)*/

/*-------------------------------------------------------------------------------*/

/*8 - Desenvolva um programa que leia uma distância em metros e mostre os valores 
relativos em outras medidas.
Ex: 
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm

var metros = 27
var Km = metros * 0.001
var dm = metros * 10
var Hm = metros * 0.01
var cm = metros * 100
var Dam = metros * 0.1
var mm = metros * 1000

console.log(`A distância de ${metros} metro corresponde a: \n ${Km} km \n ${dm} dm \n ${Hm} Hm \n ${cm} cm \n ${Dam} Dam \n ${mm} mm`)*/

/*-------------------------------------------------------------------------------*/

/*9 - Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

let carteira = 10
let cashindollar = carteira / 3.45

console.log(`com ${carteira} R$ você consegue comprar ${cashindollar} U$`)*/

/*-------------------------------------------------------------------------------*/

/*10 - Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

let alturaParede = 1
let larguraParede = 1
let areaTotal = alturaParede * larguraParede
let tinta = areaTotal / 2

console.log(`Para pintar uma parede com área ${areaTotal}m, precisará de ${tinta}l de tinta`)*/

/*-------------------------------------------------------------------------------*/

/*11 -  Desenvolva uma lógica que leia os valores de A, B e C de uma equação do 
segundo grau e mostre o valor de Delta.

var a = 2
var b = 8
var c = -24
let delta = b**2 - 4* (a*c)

console.log(`Valor de Delta ${delta}`)*/

/*-------------------------------------------------------------------------------*/

/*12 - Crie um programa que leia o preço de um produto, calcule e mostre o seu 
PREÇO PROMOCIONAL, com 5% de desconto.

let preco = 80
let desconto = 5 * (preco / 100)
let valorProm = preco - desconto

console.log(`valor promocional será ${valorProm}`)*/

/*-------------------------------------------------------------------------------*/

/*13 - Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o 
seu novo salário, com 15% de aumento.

let salario = 1800
let aumento = 15 * (salario / 100)
let novoSalario = salario + aumento
console.log(`Salário antigo:\n R$${salario} \n Novo salário \n ${novoSalario}`)*/

/*-------------------------------------------------------------------------------*/

/*14 - A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva 
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a 
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, 
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

let kmPerco = 160
let dias = 4
let precoTotal = dias * 90 + kmPerco * 0.20

console.log(`${precoTotal}`)*/

/*-------------------------------------------------------------------------------*/

/*15 - Crie um programa que leia o número de dias trabalhados em um mês e mostre o 
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 
por hora trabalhada.

let diasTrabalhados = 2
let salario = diasTrabalhados * 8 * 25
console.log(salario)*/

/*-------------------------------------------------------------------------------*/

/*16 - [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um 
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele 
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule 
quantos dias de vida um fumante perderá e exiba o total em dias.

let cigarrosDia = 2
let anosFumando = 1
let AnosParaDias = anosFumando * 365
let diasPerdidos = cigarrosDia * AnosParaDias * 10 / 1440
console.log(` Você perderá ${diasPerdidos} dias, se continuar fumando assim`)*/

/*-------------------------------------------------------------------------------*/

/*17 - Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

let velocidade = 85
let multa = (velocidade - 80) * 5
if(velocidade > 80){
    console.log(`Você foi multado por escesso de velocidade a multa custa R$${multa}`)
}else{
    console.log(`Boa viagem, dirija com cautela`)
}*/

/*-------------------------------------------------------------------------------*/

/*18 - Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
dela e depois mostre se ela pode ou não votar.

let idade = 10
if(idade >= 16 && idade < 18 || idade >= 65 ){
    console.log(`Seu voto é facultativo`)
} else if(idade >= 18 && idade < 65 ){
    console.log(`Seu voto é obrigatório`)
}else{
    console.log(`Você não pode votar`)
}*/

/*-------------------------------------------------------------------------------*/

/*19 - Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua 
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou 
não um bom aproveitamento (se ficou acima da média 7.0).

let n1 = 10
let n2 = 10
let media = (n1+n2) / 2
if(media >= 7){
    console.log(`Sua média é ${media} você foi aprovado!`)
}else{
    console.log(`Sua média é ${media} você foi reprovado`)
}*/

/*-------------------------------------------------------------------------------*/

/*20 - Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou 
ÍMPAR.

let numero = 57
let conversor = numero % 2
if(conversor == 0 ){
    console.log(`${numero} é par`)
}else{
    console.log(`${numero} é ímpar`)
}*/

/*-------------------------------------------------------------------------------*/

/*21 - Faça um algoritmo que leia um determinado ano e mostre se ele é ou não 
BISSEXTO.

let ano = 1600
if (ano%400 == 0){
    console.log(`${ano} é um ano bissexto`)
}else{
    console.log(`${ano} não é um ano bissexto`)
}*/

/*-------------------------------------------------------------------------------*/

/*22 - Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua 
situação em relação ao alistamento militar.
 - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o 
alistamento.
 - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do 
alistamento.

let nascimento = 2010
let anoAtual = 2022
let idadeAtual = anoAtual - nascimento
let passouDoTempo = idadeAtual - 18
let aindaFalta = 18 - (anoAtual - nascimento)

if(idadeAtual > 18){
    console.log(`Você deveria ter se alistado a ${passouDoTempo} anos atrás`)
}else{
    console.log(`Ainda faltam ${aindaFalta} anos para você se alistar`)
}*/

/*-------------------------------------------------------------------------------*/

/*23 - Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
que:
 - Homens ganham 5% de desconto
 - Mulheres ganham 13% de desconto

let nome = "pessoa"
let genero = "m"
let valorCompra = 1500
let descontoHomem = 5 * valorCompra / 100
let descontoMulher = 13 * valorCompra / 100

if(genero == "h"){
    console.log(`Sua compra deu ${valorCompra - descontoHomem} com 5% de desconto`)
}else if(genero == "m"){
    console.log(`Sua compra deu ${valorCompra - descontoMulher} com 13% de desconto`)
}else{
    console.log('Insira um gênero válido "m" ou "h"')
}*/

/*-------------------------------------------------------------------------------*/

/*24 - Faça um algoritmo que pergunte a distância que um passageiro deseja 
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para 
viagens até 200Km e R$0.45 para viagens mais longas.

let distancia = 400
let ticket1 = 0.50 * distancia
let ticket2 = 0.45 * distancia

if(distancia<= 200){
    console.log(ticket1)
}else{
    console.log(ticket2)
}*/

/*-------------------------------------------------------------------------------*/

/*25 - [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta. 
Analise seus comprimentos e diga se é possível formar um triângulo com essas 
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento 
de cada lado deve ser menor que a soma dos outros dois.

let reta1 = 5
let reta2 = 5
let reta3 = 5
if(reta1 < (reta2 + reta3) && reta2 < (reta1 + reta3) && reta3 < (reta1 + reta2)){
    console.log(`É possível formar um triângulo`)
}else{
    console.log(`Não é possível formar um triângulo`)
}*/

/*-------------------------------------------------------------------------------*/

/*26 - Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando 
na tela uma das mensagens abaixo:
 - O primeiro valor é o maior
 - O segundo valor é o maior
 - Não existe valor maior, os dois são iguais

let n1 = 3
let n2 = 2

if(n1 > n2){
    console.log(`O primeiro valor é o maior`)
}else if(n2>n1){
    console.log(`O segundo valor é o maior`)
}else{
    console.log(`Não existe valor maior, os dois são iguais`)
} */

/*-------------------------------------------------------------------------------*/

/*27 - Crie um programa que leia duas notas de um aluno e calcule a sua média, 
mostrando uma mensagem no final, de acordo com a média atingida:
 - Média até 4.9: REPROVADO
 - Média entre 5.0 e 6.9: RECUPERAÇÃO
 - Média 7.0 ou superior: APROVADO

let nota1 = 5
let nota2 = 8
let media = (nota1 + nota2) / 2

if(media <= 4.9){
    console.log(`Sua média é ${media} REPROVADO`)
} else if(media >= 5.0 && media< 6.9){
    console.log(`Sua média é ${media} RECUPERAÇÃO`)
}else{
    console.log(`Sua média é ${media} APROVADO`)
}*/

/*-------------------------------------------------------------------------------*/

/*28 - Faça um programa que leia a largura e o comprimento de um terreno 
retangular, calculando e mostrando a sua área em m². O programa também 
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
 - Abaixo de 100m² = TERRENO POPULAR
 - Entre 100m² e 500m² = TERRENO MASTER
 - Acima de 500m² = TERRENO VIP

let largura = 26
let comprimento = 20
let area = largura * comprimento

if(area < 100){
    console.log(`O total da área é ${area}m², seu terreno é TERRENO POPULAR`)
}else if(area > 100 && area <= 500){
    console.log(`O total da área é ${area}m², seu terreno é TERRENO MASTER`)
}else{
    console.log(`O total da área é ${area}m², seu terreno é TERRENO VIP`)
}*/

/*-------------------------------------------------------------------------------*/

/*29 - Desenvolva um programa que leia o nome de um funcionário, seu salário, 
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de 
acordo com a tabela a seguir:
 - Até 3 anos de empresa: aumento de 3%
 - entre 3 e 10 anos: aumento de 12.5%
 - 10 anos ou mais: aumento de 20%

let nome = "Caio"
let salario = 1500
let anosDeTrabalho = 11
let aumento3 =  (salario * 3) / 100
let aumento12 = (salario * 12.5) / 100
let aumento20 = (salario * 20) / 100

if(anosDeTrabalho <= 3){
    console.log( salario + aumento3)
}else if(anosDeTrabalho > 3 && anosDeTrabalho <=10){
    console.log( salario + aumento12)
}else{
    console.log( salario + aumento20)
}

/*-------------------------------------------------------------------------------*/

/*30 - [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo 
de triângulo será formado: 
 - EQUILÁTERO: todos os lados iguais
 - ISÓSCELES: dois lados iguais
 - ESCALENO: todos os lados diferentes

let reta1 = 9
let reta2 = 4
let reta3 = 6
if(reta1 < (reta2 + reta3) && reta2 < (reta1 + reta3) && reta3 < (reta2 + reta1)){
    console.log(`É possível criar um triângulo`)
    if(reta1 == reta2 && reta2 == reta3){
        console.log(`De tipo EQUILÁTERO`)
    }else if(reta1 == reta2 || reta1 == reta3 || reta2 == reta1 || reta2 == reta3 || reta3 == reta1 || reta3 == reta2){
        console.log(`De tipo ISÓSCELES`)
    }else if(reta1 != reta2 && reta2 != reta3){
        console.log(`De tipo ESCALENO`)
    }
}else{
    console.log(`Não é possível criar um triângulo com essas medidas`)
}*/

/*-------------------------------------------------------------------------------*/

/*38 - Escreva um programa que mostre na tela a seguinte contagem:
6 7 8 9 10 11 Acabou!

let i = 6
while(i <= 11){
console.log(i++)
}
console.log('Acabou!')*/

/*-------------------------------------------------------------------------------*/

/*39 - Faça um algoritmo que mostre na tela a seguinte contagem:
10 9 8 7 6 5 4 3 Acabou!

let i = 10
while(i >= 3){
    console.log(i--)
}
console.log("Acabou!")*/

/*-------------------------------------------------------------------------------*/

/*40 - Crie um aplicativo que mostre na tela a seguinte contagem:
0 3 6 9 12 15 18 Acabou!

let i = 0
while(i < 18){
    console.log(i+=3)
}
console.log("Acabou!")*/

/*-------------------------------------------------------------------------------*/

/*42 - Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
qualquer e mostre uma contagem até esse valor:
Ex: Digite um valor: 35
Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

let numeroInicial = 1
let numeroEscolhido = 35

while(numeroInicial <= numeroEscolhido){
    console.log(numeroInicial++)
}
console.log('Acabou!')*/

/*-------------------------------------------------------------------------------*/

/*43 - Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...

let numero = 30
let numeroDividido = numero / 4

while(numero > 0){
    if(numero % 4 == 0){
        console.log([numero--])
    }else{
        console.log(numero--)
    } 
}*/

/*-------------------------------------------------------------------------------*/

/*44 - Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!

let inicial = 3
let final = 10
let incremento = 2

if(inicial<final){
    for(let i = inicial; i<=final; i+=incremento){
        console.log(i)
    }
    console.log("Acabou!")
}else{
    for(let i = inicial; i>=final; i-=incremento){
        console.log(i)
    }
    console.log("Acabou!")
}*/

/*-------------------------------------------------------------------------------*/



/*Desenvolva um programa usando a estrutura “para” que mostre na tela a
seguinte contagem:
0 5 10 15 20 25 30 35 40 Acabou!

let i = 0
let final = 40

for(let i = 0; i <= final ; i+=5){
    console.log(i)
}*/

/*-------------------------------------------------------------------------*/

/*65 - Desenvolva um programa usando a estrutura “para” que mostre na tela a
seguinte contagem:
100 90 80 70 60 50 40 30 20 10 0 Acabou!

let final = -10


for(let i = 100; i>final; i-=10){
    console.log(i)
}
console.log("Acabou!")

/*-------------------------------------------------------------------------*/
