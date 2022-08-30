/* --------------- js --------------- */

let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));

console.log('one' in map);

/* ------------ html+css ------------ */


let form = document.getElementById('form');

let prop = document.getElementById('prop');


let solution = document.getElementById('solution');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let arrayString = desde.value.split(',');
    let arrayNum = arrayString.map(el => parseInt(el));

    grupoRender = Group.from(arrayNum);
    render();
});


const render = (str) =>{


    let texto = '';
    
    texto += `<h3>BUSQUEDA -> ${str}</h3>`;
    texto += `<h4>Object.prototype.hasOwnProperty.call(map, '${str}')</h4>`
    texto += `<p>${Object.prototype.hasOwnProperty.call(map, str)}</p>`;
    texto += `<h4>'${str}' in map </h4>`
    texto += `<p>${str in map}</p>`;

    solution.innerHTML = texto;


}

render('hasOwnProperty');

