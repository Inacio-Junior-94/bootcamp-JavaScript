function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Mateus',
	idade: 18,
};

const pessoa2 = {
	nome: 'Maria',
	idade: 27,
};

const pessoa3 = {
	nome: 'Lili',
	idade: 16,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));