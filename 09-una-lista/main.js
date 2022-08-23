/* ----------- javascript ----------- */

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  

console.log(arrayToList([1,2,3,4]));

console.log(listToArray(arrayToList([1,2,3,4])));

console.log(prepend(8,arrayToList([1,2,3,4])));

console.log(nth(arrayToList([1,2,3,4]),2));


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

    texto += `<h3>Array a Lista</h3>`;
    texto += `<p> ${JSON.stringify(arrayToList(array))} </p>`;
    texto += `<h3>Lista a Array</h3>`;
    texto += `<p> ${listToArray(arrayToList(array))} </p>`;
    texto += `<h3>Lista a Array</h3>`;

    solution.innerHTML = texto;

}

render([1,2,3,4]);