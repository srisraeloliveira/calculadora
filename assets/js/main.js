function criaCalc() {
  return {
    display: document.querySelector(".display"),
    //btnClear: document.querySelector(".btn-clear"),
    
    //ctrl + F2 -> mudar o nome de uma variavel em varios lugares ao mesmo tempo
    init() {
      this.cliqueBtn(); //para executar as funções na tela
      this.keyEnter();  //para executar as funções no teclado
    },

    //Para limpar o display da calculadora
    clearDisplay() {
      this.display.value = "";
    },

    //Para apagar o último digito digitado
    delOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    //Adiciona o evento de enter para executar a conta;     
    keyEnter() {
      this.display.addEventListener("keyup", (e) => { 
        if (e.keyCode === 13) {
          this.equals();
        }
      });
    },

    //Para resolver a conta, foi utilizado o metodo eval, porem não é um método seguro.
    equals() {
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
    },
    
    //Função para capturar o clique no display
    cliqueBtn() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        //capturando numeros e operadores
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        //capturando o clear
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        //capturando o delete -> ultimo numero
        if (el.classList.contains("btn-del")) {
          this.delOne();
        }

        //informado o resultado
        if (el.classList.contains("btn-eq")) {
          this.equals();
        }
      });
    },

    //imprimindo valor no display
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}
//salvando função em uma variavel/constante
const calc = criaCalc();
//retornando função
calc.init();
