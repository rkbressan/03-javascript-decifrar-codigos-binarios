function calculaNumeroDaSenha(senha) {
  const senhaEncrypted = [];

  senha.forEach((itemDaLista) => {
    const quebrandoBinario = itemDaLista.split("");
    senhaEncrypted.push(quebrandoBinario);
  });
  let senhaDecrypted = "";
  const listaMatriz = [];

  let contador = 0;
  for (let index = 0; index < senhaEncrypted.length; index++) {
    const linhaMatriz = [];
    for (let index = 0; index < senhaEncrypted.length; index++) {
      linhaMatriz.push(senhaEncrypted[index][contador]);
    }
    listaMatriz.push(linhaMatriz);
    contador++;
  }

  listaMatriz.forEach((linha) => {
    somaDaLinha = linha.reduce(
      (acumulado, valor) => Number(acumulado) + Number(valor),
      0
    );
    let valorToConcat = somaDaLinha >= 5 ? "1" : "0";
    senhaDecrypted = `${senhaDecrypted}${valorToConcat}`;
  });

  return converterParaDecimal(senhaDecrypted);
}

function converterParaDecimal(binario) {
  let decimal = 0;
  for (let c = 0; c < binario.length; c++)
    decimal += Math.pow(2, c) * binario[binario.length - c - 1]; //calcula para pegar do último ao primeiro
  return decimal;
}

// Teste unitário:
let assert = require("chai").assert;
describe("Calcula Numero Da Senha", function () {
  it("Retorna Senha Correta", function () {
    assert.equal(
      calculaNumeroDaSenha([
        "0110100000",
        "1001011111",
        "1110001010",
        "0111010101",
        "0011100110",
        "1010011001",
        "1101100100",
        "1011010100",
        "1001100111",
        "1000011000",
      ]),
      724
    );
  });
});

//Encontramos senha que acesso ao tesouro
//Desenvolver algoritmo que decifra os códigos
//A senha é um número binário(1,0) de 10 dígitos
//Formado pelo dígito predominante de cada coluna
//Caso a coluna tenha a mesma quantidade de 0 e 1 deve se considerar 1

//resultado >= 5 ? '1' : '0'

/*
0110100000	0	1	1	0	1	0	0	0	0	0
1001011111	1	0	0	1	0	1	1	1	1	1
1110001010	1	1	1	0	0	0	1	0	1	0
0111010101	0	1	1	1	0	1	0	1	0	1
0011100110	0	0	1	1	1	0	0	1	1	0
1010011001	1	0	1	0	0	1	1	0	0	1
1101100100	1	1	0	1	1	0	0	1	0	0
1011010100	1	0	1	1	0	1	0	1	0	0
1001100111	1	0	0	1	1	0	0	1	1	1
1000011000	1	0	0	0	0	1	1	0	0	0
	        7	4	6	6	4	5	4	6	4	4
SENHA	    1	0	1	1	0	1	0	1	0	0
*/
//a senha é: 1011010100
//mas não pode ser manual.. :c
