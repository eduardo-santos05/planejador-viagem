import PromptSync from "prompt-sync"

const prompt = PromptSync()

function exibirMenu() {
    console.log('\n=== Planejador de Viagem ===')
    console.log('1. Custo de combustível')
    console.log('2. Tempo de viagem')
    console.log('3. Dividir despesas')
    console.log('4. Converter reais para dólares')
    console.log('0. Sair')
}

let opcao = ''
let distanciaViagem
let consumoCarro
let precoPorLitro
let velocidadeMedia
let totalDespesas
let numeroPessoas

do {
    exibirMenu()
    opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '1':
            distanciaViagem = Number(prompt('Informe a distância da viagem (km): '))
            consumoCarro = Number(prompt('Informe o consumo do carro (km/L): '))
            precoPorLitro = Number(prompt('Informe o preço do litro (R$): '))
            let litrosGastosPorViagem = distanciaViagem / consumoCarro
            let custo = (litrosGastosPorViagem * precoPorLitro).toFixed(2)
            console.log('Custo estimado do combustível: R$ ' + custo)
            break
        case '2':
            distanciaViagem = Number(prompt('Informe a distância da viagem (km): '))
            velocidadeMedia = Number(prompt('Informe a velocidade média (km/h): '))
            let tempoEstimadoViagem = distanciaViagem/velocidadeMedia
            console.log('Tempo estimado de viagem: ' + tempoEstimadoViagem + ' horas')
            break
        case '3':
            totalDespesas = Number(prompt('Informe o total de despesas (R$): '))
            numeroPessoas = Number(prompt('Informe o número de pessoas: '))
            if (numeroPessoas <= 0) {
                console.log('O número de pessoas precisa ser maior que 0.')
                continue
            }
            let precoPorPessoa = (totalDespesas / numeroPessoas).toFixed(2)
            console.log('Cada pessoa paga: R$ ' + precoPorPessoa)
            break
    }
} while(opcao !== '0')

