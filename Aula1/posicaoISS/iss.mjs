/*

1 - A primeira linha faz a "chamada" e espera a resposta.

2- A segunda linha é o "segurança" que verifica se a resposta foi um sucesso. Se não foi, ele para tudo e lança um erro.

onst res = await fetch(...);
if (!res.ok) throw new Error(...}`);

*/


async function obterISSagora() {
	const res = await fetch("http://api.open-notify.org/iss-now.json");
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	const { iss_position } = await res.json(); //Atalho para a desestruturação e transforma o texto da api em um objeto javaScript
	const lat = parseFloat(iss_position.latitude).toFixed(4); // Converte para número e limita a 4 casas decimais
	const lon = parseFloat(iss_position.longitude).toFixed(4);
	console.log(`ISS em lat: ${lat}, lon: ${lon}`);
}
obterISSagora();

/*

1- await res.json(): Essa parte transforma o texto da resposta da API em um objeto JavaScript que podemos usar no nosso código.

2- const { iss_position } = ...: Essa parte é a novidade. É um atalho do JavaScript moderno chamado desestruturação (destructuring).

Pense assim:

A resposta da API é um objeto grande, como se fosse uma caixa com várias coisas dentro: { "message": "success", "timestamp": 1678886400, "iss_position": { "latitude": "...", "longitude": "..." } }

Em vez de pegar a caixa inteira e depois pegar o item que queremos, a desestruturação nos deixa pegar o item iss_position diretamente da "caixa" e já colocá-lo em uma variável com o mesmo nome.

É um atalho para o que, antigamente, faríamos em duas linhas:
const dados = await res.json();
const iss_position = dados.iss_position;

Faz sentido? É uma forma de escrever um código mais limpo e direto.

Agora, vamos para as próximas duas linhas do seu código:
const lat = parseFloat(iss_position.latitude).toFixed(4);
const lon = parseFloat(iss_position.longitude).toFixed(4);

*/


/*

1 - parseFloat: A API nos envia a latitude e a longitude como texto (uma string, ex: "51.50"). O parseFloat converte esse texto em um número com casas decimais (um float), para que possamos fazer cálculos com ele se precisarmos.

2- .toFixed(4): Essa função pega o número e o formata como um texto novamente, mas garantindo que ele tenha exatamente 4 casas decimais.

*/


/*

A razão para usar as crases (   ) é um recurso muito útil do JavaScript moderno.

As crases criam um tipo especial de string chamado Template Literal.

A grande vantagem de um Template Literal é que ele permite a interpolação de variáveis de forma fácil e legível. Isso significa que você pode colocar o valor de uma variável diretamente no meio do texto, usando a sintaxe ${...}.

No seu código:
\ISS em lat: ${lat}, lon: ${lon}``

O JavaScript vê o ${lat} e o ${lon} e, em vez de escrever esses caracteres, ele os substitui pelos valores que estão guardados dentro das variáveis lat e lon.

Se fôssemos fazer a mesma coisa com aspas normais, o código ficaria mais verboso, usando o sinal de + para juntar os pedaços:
console.log("ISS em lat: " + lat + ", lon: " + lon);

As crases, portanto, são uma maneira mais moderna e limpa de construir textos que misturam palavras e variáveis. 

*/