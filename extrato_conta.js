class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }
  depositar(valor) {
    this.saldo += valor
  }
  sacar(valor) {
    this.saldo -= valor
  }
  exibirSaldo() {
    console.log(this.saldo)
  }
}

const guilherme = new Cliente('Guilherme', 'guilherme@email.com', '15595588866', 100)

console.log(guilherme)

guilherme.depositar(50)

guilherme.exibirSaldo()

guilherme.sacar(120)

guilherme.exibirSaldo()
