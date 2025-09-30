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
    console.log(universidades);
}

listarUniversidades(); // Aqui executa o relatorio