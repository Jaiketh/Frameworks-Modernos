/* Criar um módulo utils.js com funções de formatação (ex.: moeda) e importar em um
 arquivo main.mjs.*/

 export const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
 }