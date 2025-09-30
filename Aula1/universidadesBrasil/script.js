/*
Quando você usa chaves {} depois da =>, 
o JavaScript entende que você está começando 
um bloco de código de várias linhas e espera que você use 
a palavra return para dizer o que a função deve devolver.

Se você quer que a função retorne um objeto diretamente (em uma linha só), 
você precisa envolvê-lo com parênteses ( ). Fica assim: uni => ({ ... }).
*/

/*

Atividades realizadas:
1. Criei a função para buscar os dados.

2. Criei a função para processar e exibir os dados.

3. Usei .slice() para pegar os 20 primeiros.

4. Usei .map() para formatar a lista.

5. Usei console.table() para exibir de forma organizada.

6. Lembrei de chamar a função principal no final para executar tudo.

*/

async function buscarUniversidades(nomeDoPais) {
    try {
        const response = await fetch(`http://universities.hipolabs.com/search?country=${nomeDoPais}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();  
} catch (err) {
        console.error("Falha ao buscar as universidades:", err.message);
        return null;
    }
}

async function listarUniversidades(){
    const universidades = await buscarUniversidades("Brazil");
    const primeiras20 = universidades.slice(0, 20); // Pega as primeiras 20 universidades, o slice serve para isso.
    const listaFormatada = primeiras20.map( uni => ({
        nome: uni.name, site: uni.web_pages[0]
    })); /* Mapeia para um formato mais simples, 
    O método que usamos para transformar ou "mapear" 
    cada item de um array em algo novo é o .map(). */
    console.table(listaFormatada); // Mostra em formato de tabela no console
}

listarUniversidades(); // Aqui executa o relatorio