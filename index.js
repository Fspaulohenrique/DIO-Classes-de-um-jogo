/*Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada.

*/

//Meu codigo
class heroi {
    constructor(nome, level, tipo) {
        this.nome = nome
        this.level = level
        this.tipo = tipo
        this.ataque
    }

    atacar() {

        if (this.tipo === "Mago") {
            this.ataque = "Magia"
        } else if (this.tipo === "Guerreiro") {
            this.ataque = "Espada"
        } else if (this.tipo === "Monge") {
            this.ataque = "Artes Marciais"
        } else if (this.tipo === "Ninja") {
            this.ataque = "Shuriken"
        }


        console.log(`O Player ${this.nome} de level ${this.level} atacou usando o ${this.tipo} com o poder ${this.ataque}`)
    }
}

let personagem1 = new heroi("Paulo", 100, "Mago")
let personagem2 = new heroi("Raze",100, "Guerreiro")
let personagem3 = new heroi("Cypher",100, "Monge")
let personagem4 = new heroi("Jett",100, "Ninja")

personagem1.atacar()
personagem2.atacar()
personagem3.atacar()
personagem4.atacar()