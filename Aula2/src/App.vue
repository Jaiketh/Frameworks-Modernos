<template>
<!-- elementos html da página -->
    <div class="container">
        <h1>{{ titulo }}</h1> <!-- // interpolação de variável não reativa -->
        <!-- v-bind: liga o script com o template sem interpolação -->
        <div class="input-row">
            <input
                type="text"
                placeholder="Digite uma tarefa e precione Enter"
                v-model="newTask"
            /> 
            <!-- v-bind: ou ":" liga o script com o template sem interpolação-->
             <!-- v-on ou "@" liga o template com o script-->
              <!-- v-model two way data bind. liga o template com o script e scritp com template-->
            <button @click="addTask">Adicionar</button>
        </div>
        <div>
            <pre>{{ task }}</pre> <!-- interpolação de variável reativa -->
        </div>
    </div>

</template>
<script setup>
// javascript e funções do framework
import { ref } from 'vue'; // implementa a reatividade, ou seja, quando o valor de uma variável muda, a interface é atualizada automaticamente
const titulo = "Meu ToDo List"; // variável não reativa
const task = ref([]); // variavel reativa
const newTask = ref(""); // variavel reativa
const addTask = () => {
    console.log('Adicionando tarefa', newTask.value);
    task.value.push(newTask.value);
    newTask.value = "";
}
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
