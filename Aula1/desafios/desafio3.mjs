/*
Uma função assíncrona com tratamento de erros sempre segue esta estrutura:

async function nomeDaFuncao(parametro) {
  try {
    // 1. Tenta executar o código de rede aqui
  } catch (err) {
    // 2. Se algo der errado, captura o erro aqui
  }
}
*/

async function buscarPost(id) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);/*Usar o ${id} possibilita que o metódo utilize qualquer post que for inserido*/
        if (!response.ok) throw new Error(`HTTP $[response.status}`);
        return await response.json();
    } catch (err) {
        console.error("Falha ao buscar o post:", err.message);
        return null;
    }
}

// Testando a função com um ID válido
const testarBusca= async () => {
    console.log("Buscando post com ID: 5...");
    const post5 = await buscarPost(5);

    // Verifica se o post não é nulo antes de tentar ler
    if (post5) {
        console.log("Título encontrado:", post5.title);
    }
};
testarBusca(); // Aqui executa o teste

// Testando a função com um ID inválido
/*const testarBuscaInvalida = async (id) => {
    console.log("Buscando post com ID: 9999...");
    const postInvalido = await buscarPost(9999);
}*/

async function createPost(data) {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP $[response.status}`);
        return await response.json();
    } catch (err) {
        console.error("Falha ao criar o post:", err.message);
        return null;
    }
}