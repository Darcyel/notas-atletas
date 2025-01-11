//Porjeto 01 - Pontuação dos atletas
class NotasDosAtletas {
  constructor(atletas) {
    this.atletas = atletas;
  }
  organizarNotas() {
    this.atletas.forEach(function(atleta) {
      atleta.notas = atleta.notas.sort(function(a, b) {
        return a - b;
      })
    })
  }
  excluirNotas() {
    this.notas = [];
      for (let i = 0; i < this.atletas.length; i++) {
        this.notas.push(this.atletas[i].notas.slice(1, 4));
      }
  }
  somarNotas() {
    this.soma = [];
    for (let i = 0; i < this.notas.length; i++) {
      let soma = 0;
      this.notas[i].forEach(function(nota) {
        soma = soma + nota;
      })
      this.soma.push(soma);
    }
  }
  mediaDasNotas() {
    this.media = [];
    for (let i = 0; i < this.notas.length; i++) {
      this.media.push(this.soma[i] / this.notas[i].length);
    }
  }
  resultado() {
    let resultado = ``;
    for (let i = 0; i < this.atletas.length; i++) {
      resultado = resultado + `Atleta: ${this.atletas[i].nome}
    Notas Obtidas: ${this.atletas[i].notas.join(",")}
    Notas Válidas: ${this.media[i].toFixed(2)}
    ======================
  `;
    }
    console.log(resultado);
  }

}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
  ];

let notasDosAtletas = new NotasDosAtletas(atletas);
notasDosAtletas.organizarNotas();
notasDosAtletas.excluirNotas();
notasDosAtletas.somarNotas();
notasDosAtletas.mediaDasNotas();
notasDosAtletas.resultado()


