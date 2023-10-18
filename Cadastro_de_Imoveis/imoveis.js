const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem vindo ao(a) ao Cadastro de Imoveis!\n" +
      "Total de imoveis:  " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo imovel: \n2 Listar de Imoveis: \n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietario do imovel:");
      imovel.quarto = prompt("Quantos quartos possui o imovel?");
      imovel.banheiros = prompt("Quantos banheiros possui o imovel?");
      imovel.garagem = prompt("O imovel possui garagem? (SIM/NÃO)");

      const confirmacao = confirm(
        "Salvae este imovel?\n" +
          "\nProprietario:  " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quarto +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imovel salvo com sucesso!");
      } else {
        alert("voltando ao menu.");
      }

      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "imovel " +
            (i + 1) +
            "\nProprietario: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "Banheiros:  " +
            imoveis[i].banheiros +
            "\nPosssui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;

    case "3":
      alert("Encerrando..");
      break;
    default:
      alert("Opção invalida!");
  }
} while (opcao !== 3);
