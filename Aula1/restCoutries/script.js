async function buscarPais(nomeDoPais) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${nomeDoPais}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();  
} catch (err) {
        console.error("Falha ao buscar o pais:", err.message);
        return null;
    }
}

async function exibirPais(nomeDoPais){
    const divInfo = document.getElementById('info-pais');
    const pais = await buscarPais(nomeDoPais);

    if (!pais) {
        divInfo.innerHTML = "<p>Não foi possível carregar os dados do país.</p>";
        return;
    }

    const br = pais [0];
    const moedas = Object.entries(br.currencies || {}).map(([code, curl]) =>`${code} - ${curl.name}`); // A linha complexa das moedas para transformar um objeto de moedas em um texto legível.
    
    const tabelaHTML = `
        <table>
            <tr>
                <td>Nome Oficial</td>
                <td>${br.name.official}</td>
            </tr>
            <tr>
                <td>Capital</td>
                <td>${br.capital?.[0]}
                </td>
            </tr>  
            <tr>
                <td>População</td>
                <td>${br.population.toLocaleString(`pt-BR`)}
                </td>
            </tr>
            <tr>
                <td>Moedas</td>
                <td>${Object.entries(br.currencies || {}).map(([code, curl]) =>`${code} - ${curl.name}`).join(', ')}
            </tr>  
        </table>`;
    console.log(tabelaHTML);
    divInfo.innerHTML = tabelaHTML; // Este comando "despeja" o HTML dentro do elemento divInfo. isso diz ao JavaScript: "O conteúdo HTML dentro da divInfo agora é igual ao texto que está na variável tabelaHTML.
    // Chama a função para iniciar a exibição do país
}
exibirPais("Brazil");