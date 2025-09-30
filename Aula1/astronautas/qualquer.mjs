async function getAstros() {
    try {
        const res = await fetch("http://api.open-notify.org/astros.json");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        
        const data = await res.json();
        
        // Agrupa astronautas por nave
        const porNave = data.people.reduce((acc, p) => {
            acc[p.craft] = acc[p.craft] || [];
            acc[p.craft].push(p.name);
            return acc;
        }, {});

        // Gera relatório em Markdown
        const relatorio = gerarRelatorioMarkdown(data.number, porNave);
        console.log(relatorio);

    } catch (erro) {
        console.error("Erro ao buscar dados:", erro.message);
    }
}

function gerarRelatorioMarkdown(total, porNave) {
    const data = new Date().toLocaleDateString('pt-BR');
    
    let markdown = `# Relatório de Astronautas no Espaço
Data: ${data}

## Total de Pessoas
Atualmente há **${total}** pessoas no espaço.

## Distribuição por Nave\n`;

    Object.entries(porNave).forEach(([nave, astronautas]) => {
        markdown += `\n### ${nave}
- Quantidade: ${astronautas.length}
- Tripulação: ${astronautas.join(', ')}\n`;
    });

    return markdown;
}

getAstros();