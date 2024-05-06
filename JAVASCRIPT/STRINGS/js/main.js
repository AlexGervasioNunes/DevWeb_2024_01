let valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 * valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);
// Métodos de strings
console.clear();
const string01 = 'Instituto da Oportunidade Social';
// Acessando o primeiro caractere
console.log(string01.charAt(0));
console.log(string01[0]);
// Acessando o décimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);
console.clear();
let texto = 'abcdefehijklmnopqrstuvxwyzáàâãäăåąảæꜵƀĉčċçďđðéèêëěęėẻġǵğĝĥíìĩîïįîỉĵɉķļľńñňņóòõôöơỏœřŗŝšşţťúùũûüŭůųưủŵŷy̌ýÿỷẏỳžźżꝺ';
console.log(texto.length);
console.clear();
let mensagem = 'Venha para a Microsoft!';
console.log(mensagem);
let novaMensagem = mensagem.replace('Microsoft', 'IOS');
console.log(novaMensagem);
// Substring e spit
const str = 'Mozilla FireFox';
console.log(str.substring(1, 4));
console.log(str.substring(4));
const str1 = 'A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
// Saída esperada: "um"
const chars = str1.split('');
console.log(chars[7]);
// Saída esperada: "a"
const strCopy = str1.split();
console.log(strCopy);
// Saída esperada: Array ["A raposa é um animal esperto"]
//Remover Espaços
let text = ' Olá Alunos do IOS! ';
console.log(text.trim());
let frase = 'Sou um aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS')); // Returns 16
console.log(frase.lastIndexOf('IOS')); // Returns 24
console.log(frase.search('IOS')); // Returns 16
console.log(frase.startsWith('S')); // Verdadeiro - retorna true
console.log(frase.startsWith('Sou')); // Verdadeiro - retorna true
console.log(frase.startsWith('你好')); // Falso - retorna false
console.log(frase.endsWith('!')); // Verdadeiro - retorna true
console.log(frase.endsWith('bom!')); // Verdadeiro - retorna true
console.log(frase.endsWith('こんにちは')); // Falso - retorna false