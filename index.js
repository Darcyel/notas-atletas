//Porjeto 01 - Pontuação dos atletas
class notasDosAtletas {
  constructor (atletas) {
    this.atletas = atletas;
  }
  organizarNotas() {
    this.atletas.forEach(function(atleta) {
      atleta.notas = atletas.notas.sort(function(a, b) {
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
  
      
