const buttons = document.querySelectorAll("#btn"); // acessa todos os botões pelo id:btn
const visualizaTela = document.querySelector("#tela") // acessa o visor pela id:tela

// passa um alerta na tela assim que a página é atualizada
alert("Fizz buzz é um jogo de palavras em grupo para as crianças ensinarem sobre divisão. Os jogadores se revezam para contar de forma incremental, substituindo qualquer número divisível por três pela palavra Fizz, e qualquer número divisível por cinco pela palavra Buzz, e qualquer número divisível por 3 e 5 pela palavra FizzBuzz.");

numero = 0; 

//função forEach passa por todos os botões e identifica qual o evento de texto presente em cada um deles. A partir disso adicionamos as condicionantes a cada um dos botões.
buttons.forEach((btn) =>{ 

  btn.addEventListener("click",(evento) => {
    const value = evento.target.innerText;

    if(value === "PLAY") {
      numero = 1;
    } else if (value === "PRÓXIMO" && numero > 0) {
      numero++;
    }  else if (value === "ANTERIOR"&& numero > 0) {
      numero = numero - 1;
    } 
      
    if (numero % 3 === 0 && numero % 5 === 0) {
      visualizaTela.innerText ="Fizz Buzz";
    } else if (numero % 3 === 0) {
      visualizaTela.innerText = "Fizz";
    } else if (numero % 5 === 0) {
      visualizaTela.innerText = "Buzz";
    } else {
      visualizaTela.innerText = numero;
    }
  })
})