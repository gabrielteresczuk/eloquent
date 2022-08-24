/* --------------- js --------------- */

const reducir = (array) =>{
   let newArray =  array.reduce((result, valor)=> result.concat(valor), []);
   return newArray;
}

console.log(reducir([[1, 2, 3], [4, 5], [6]]));
/* ------------ html+css ------------ */

let form = document.getElementById('form');
let valor = document.getElementById('valor');
let solution = document.getElementById('solution');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    render(JSON.parse(valor.value));
});

const render = (array) =>{

    let texto = '';
    
    texto += '<h3>Array inicial</h3>';
    texto += `<p> ${JSON.stringify(array)} </p>`;
    texto += `<h3>Array reducido</h3>`;
    texto += `<p> ${JSON.stringify(reducir(array))} </p>`;

    solution.innerHTML = texto;

}

render([[1, 2, 3], [4, 5], [6]]);