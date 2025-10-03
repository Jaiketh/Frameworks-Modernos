<template>
<!-- elementos html da página -->
    <div class="container">
        <h1>ToDo List</h1>
        <div class="input-row">
            <input
                type="text"
                placeholder="Digite uma tarefa e precione Enter"
            /> 
            <button>Adicionar</button>
        </div>

    </div>

</template>
<script setup>
// javascript e funções do framework
</script>
<style>
/* CSS */
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}
</style>
