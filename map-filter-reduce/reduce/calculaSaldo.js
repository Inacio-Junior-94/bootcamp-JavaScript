function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((atual, item) => atual - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 6,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 30,
		nome: 'carne',
	},
    {
		preco: 8,
		nome: 'Arroz',
	},
    {
		preco: 15,
		nome: 'Cereal',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));