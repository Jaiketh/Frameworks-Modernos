async function getPoemByTitle(title = "Ozymandias") {
    try {
        const url = `https://poetrydb.org/title/${encodeURIComponent(title)}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        
        const data = await res.json();
        const poem = data[0];

        // Exibe informações básicas
        console.log(`Título: ${poem.title}`);
        console.log(`Autor: ${poem.author}`);
        console.log("\nPrimeiros 5 versos:");
        console.log(poem.lines.slice(0, 5).join("\n"));

        // Conta palavras mais frequentes
        const palavras = poem.lines
            .join(" ")
            .toLowerCase()
            .replace(/[.,!?;:]/g, "")
            .split(/\s+/);

        const contagem = palavras.reduce((acc, palavra) => {
            acc[palavra] = (acc[palavra] || 0) + 1;
            return acc;
        }, {});

        // Encontra as 3 palavras mais frequentes
        const maisFrequentes = Object.entries(contagem)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3);

        console.log("\nPalavras mais frequentes:");
        maisFrequentes.forEach(([palavra, quantidade]) => {
            console.log(`${palavra}: ${quantidade} vezes`);
        });

        return {
            poema: poem,
            palavrasFrequentes: maisFrequentes
        };

    } catch (erro) {
        console.error("Erro ao buscar poema:", erro.message);
        throw erro;
    }
}

// Função para criar HTML com destaque
function criarHTML(poema, palavrasFrequentes) {
    const palavrasDestaque = palavrasFrequentes.map(([palavra]) => palavra);
    
    const htmlPoema = poema.lines.map(linha => {
        palavrasDestaque.forEach(palavra => {
            const regex = new RegExp(`\\b${palavra}\\b`, 'gi');
            linha = linha.replace(regex, `<span class="destaque">${palavra}</span>`);
        });
        return `<p>${linha}</p>`;
    }).join("");

    return `
        <style>
            .destaque { 
                background-color: yellow;
                font-weight: bold;
            }
        </style>
        <h1>${poema.title}</h1>
        <h2>por ${poema.author}</h2>
        <div class="poema">
            ${htmlPoema}
        </div>
    `;
}

// Execução principal
async function main() {
    try {
        const resultado = await getPoemByTitle();
        const html = criarHTML(resultado.poema, resultado.palavrasFrequentes);
        console.log("\nHTML gerado:");
        console.log(html);
    } catch (erro) {
        console.error("Erro na execução:", erro);
    }
}

main();