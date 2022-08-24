/* --------------- js --------------- */

const cada = (array, predicado) => {

    for (const elemento of array) {
        if(!predicado(elemento)) return false;
    }
    return true;
}

const cada2 = (array, predicado) =>{
    return !array.some(elemento => !predicado(elemento));
}


/* ------------ html+css ------------ */


let form = document.getElementById('form');
let valor = document.getElementById('valor');
let solution = document.getElementById('solution');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    render(JSON.parse(valor.value));
});

const render = (array, predicado) =>{

    let texto = '';
    
    texto += '<h3>Array</h3>';
    texto += `<p> ${JSON.stringify(array)} </p>`;
    texto += '<h3>Predicado</h3>';
    texto += `<p> ${predicado.toString()} </p>`;
    texto += `<h3>Resultado</h3>`;
    texto += `<p> ${cada(array,predicado)} </p>`;

    solution.innerHTML = texto;

}

render([1, 3, 5], n => n < 10);