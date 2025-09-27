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

async function relatorio() {
    const pais = await buscarPais("Brazil");
    const br = pais [0];
    const moedas = Object.entries(br.currencies || {}).map(([code, curl]) =>`${code} - ${curl.name}`); // A linha complexa das moedas para transformar um objeto de moedas em um texto legível.
    console.log({
        nomeOficial: br.name.official,
        capital: br.capital?.[0], // O ?. em br.capital?.[0] para evitar erros caso um país não tenha uma capital definida.
        regiao: br.region,
        populacao: br.population.toLocaleString('pt-BR'),
        moedas: moedas

    });
}

relatorio(); // Aqui executa o relatorio