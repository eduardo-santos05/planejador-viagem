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

do {
    exibirMenu()
    opcao = prompt('Escolha uma opção: ')
} while(opcao !== '0')