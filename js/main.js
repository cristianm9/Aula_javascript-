function botao() {
  document.getElementById("clicar").innerHTML = "<b>Obrigado por clicar<b/>";
  console.log(document.getElementById("clicar"));
  // alert("Obrigado por clicar");
}

function redirecionar() {
  window.open("https://g1.globo.com/economia/agronegocios/globo-rural/"); //em outra janela .
  window.location.href =
    "https://g1.globo.com/economia/agronegocios/globo-rural/"; // na mesma janela.
}
function troca(elemento) {
  //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse.";
  //alert("Troca texto");
  elemento.innerHTML = "Obrigado por passar o mouse.";
}
function volta(elemento) {
  //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
  alert("Pagina carregada");
}

function funcaochange(elemento){
  console.log(elemento.value);
}
/*function soma(n1, n2) {
  return n1 + n2;
}
function validaidade(idade){
  
  let validar;
  if(idade>=18){
    validar = true;
  }else{
    validar = false;
  }
  return validar;
}

var idade = prompt("Qual sua idade ?");
console.log(validaidade(idade));
alert(soma(15, 20));
/*

/*function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Pain", "Pain", "Santa Cruz"));
*/
/*let d = new Date();
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth());
*/
/*let count ;
for(count=0; count <=10;count++){
    alert(count);
}*/

/*let count = 0;

while(count<=5) {
  console.log(count);
  count++;
}*/
/*let idade = prompt("Qual a sua idade ?");

if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade ");
    }
*/

/*let fruta = [
  { nome: "maçã", cor: "vermelha" },
  { nome: "melão", cor: "amarelo" }
];*/
//console.log(fruta);
//alert(fruta[1].nome);

//let list = ["maçã", "pêra", "uva"];
//list.push("melância");
//console.log(list.toString());
//console.log(list.join(" - "));
//alert(list[1]);

//let nome = " Cristian Matheus Galindo de Brito";
//let idade = 24;
//let frase = "Pain é o melhor time do mundo";
//alert("Bem vindo" +nome + " Sua idade : " +idade +" Nasceu no ano: " + (2020 - idade));
//console.log("Nome : " + nome + " Ano de nascimento : " + (2020 - 24));
//console.log(frase.toLowerCase());
//console.log(frase.replace("Pain","Santa Cruz"));
