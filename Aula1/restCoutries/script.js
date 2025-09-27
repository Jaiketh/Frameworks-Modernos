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
    const br = pais [0];
    console.log({
        nome.offiao: br.nome
    });
}