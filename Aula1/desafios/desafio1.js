/* Dado um array de serviços (name, price, active), filtrar ativos com preço ≥ X e calcular
 a média de preços.
 
 arrow function -- " => ", filter, map, reduce, let/const, template literals, destructuring.

 */
// 1- Dados iniciais
const servicos = [
    {nome: "Corte de Cabelo", preco: 30.00, ativo: true}, 
    {nome: "Barba", preco: 20.00, ativo: true},
    {nome: "Sobrancelha", preco: 15.00, ativo: false},
    {nome: "Hidratação", preco: 50.00, ativo: true},
    {nome: "Corte Infantil", preco: 25.00, ativo: false},
    {nome: "Corte Feminino", preco: 60.00, ativo: true},
];
// 2- Filtrar os dados conforme as regras
const servicosFiltrados = servicos.filter(servico => servico.ativo && servico.preco >= 25);
console.log(servicosFiltrados);
// 3- Somar os preços e calcular a média
const mediaPrecos = servicosFiltrados.reduce((acc, s) => acc + s.preco, 0) / servicosFiltrados.length;
// 4- Exibir o resultado final
console.log(`A media dos preços dos serviços ativos e com valor acima de RS25 é: R$${mediaPrecos.toFixed(2)}`);