/* ----------- javascript ----------- */

// tomamos el valor, lo damos a otra variable sin tocar el original
const revertirArray = (array) =>{
    let newArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(revertirArray([1,2,3,4,5,6]));

// revertimos el mismo array que entra como parametro
const revertirArrayEnSuLugar = (array) =>{
    let nuevoArray = [];
    let length = array.length;
    
    for (let i = 0; i < length; i++) {
        nuevoArray.push(array.pop());
    }
    for (let i = 0; i < length; i++) {
        array.push(nuevoArray.shift());
    }
    return array;
}

let numeros = [1,2,3,4,5,6,7];
revertirArrayEnSuLugar(numeros);
console.log(numeros);



/* ------------ html+css ------------ */

const form = document.getElementById('form');
const arreglo = document.getElementById('arreglo');
const solution = document.getElementById('solution');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    render(arreglo.value.split(','));

})

const render = (array) =>{

    let texto = '';

    texto += `<h3>Arreglo de entrada</h3>`;
    texto += `<p> ${(array).join(', ')} </p>`;
    texto += `<h3>Arreglo invertido</h3>`;
    texto += `<p> ${revertirArray(array).join(', ')} </p>`;

    solution.innerHTML = texto;

}

render([1,2,3,4])