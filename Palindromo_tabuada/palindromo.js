const palavra = prompt("Informe uma palavra:");
let palavrainvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavrainvertida += palavra[i];
}

if (palavra === palavrainvertida) {
  alert(palavra + " È um palindromo!");
} else {
  alert(
    palavra + " Não é um palíndromo!\n\n" + palavra + "!=" + palavrainvertida
  );
}
