let saldo = parseFloat(prompt("Informe a quantidade de dinheiro incial:"))
let opcao = ""

do {
    opcao = prompt(
        "Saldo Disponivel: R$" + saldo +
        "\n1. Adicionar dinheiro:" +
        "\n2. Remover dinheiro:" +
        "\n3. Sair."
    )

    switch(opcao) {
        case "1":
          saldo += parseFloat(prompt("informe o valor a ser adicionado:"))
          break
        case "2":
          saldo -= prompt("Informe o valor a ser removido:")
          break
        case "3": 
          alert("Saindo...")
          break
        default: 
          alert("Opção Invalida..")
    }

}while (opcao !== "3")