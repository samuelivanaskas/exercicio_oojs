function Pessoa(nome) {
    this.nome = nome;
    this.Bomdia = function() {
        console.log(this.nome + " Bom dia");
    }
}

function Atacante(nome, time, salario) {
    this.time = time;
    this.salario = salario;

    Pessoa.call(this, nome)
}

function Zagueiro(nome, time, salario) {
    this.time = time;
    this.salario = salario;

    Pessoa.call(this, nome)
}

const pessoa1 = new Pessoa("Messi");
const atacante1 = new Atacante("Messi", "PSG", "10000000");
const zagueiro1 = new Zagueiro("Marquinhos", "PSG", "5000000");

console.log(pessoa1);
console.log(atacante1);
console.log(zagueiro1);