//Funçao Construtora

//instanciando como função construtora
function Calc() {
  this.display = document.querySelector(".display");
  //Funções dependendentes de Calc para iniciar o programa
  this.inicia = () => {
    this.captureClick();
    this.keyEnter();
  };
  //Função para permitir o resultado com a tecla enter
  this.keyEnter = () => {
    this.display.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) this.equalsDisplay();
    });
  };
  //Por se tratar de uma função construtora, podemos capturar todos os eventos conjuntamente
  this.captureClick = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.delDisplay();
      if (el.classList.contains("btn-eq")) this.equalsDisplay();
    });
  };
  //adicionando numero no display
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
  };
  //limpando o display
  this.clearDisplay = () => {
    this.display.value = "";
  };
  //apagando ultimo digito do display
  this.delDisplay = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
  //executando calculo, utilizando eval
  this.equalsDisplay = () => {
    let conta = this.display.value;
    try {
      conta = eval(conta);
      if (!conta) {
        alert("Conta inválida");
        return;
      }
      this.display.value = String(conta);
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };
}

//iniciando novo processo em uma função construtora (usar New)
const calculadora = new Calc();
//iniciando calculadora
calculadora.inicia();

// Prática ao longo do código de utilização de Arrow Functions
