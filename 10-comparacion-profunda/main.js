/* ----------- javascript ----------- */
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));
  



/* ------------ html+css ------------ */

const form = document.getElementById('form');
const arreglo = document.getElementById('arreglo');
const solution = document.getElementById('solution');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    render(arreglo.value.split(','));

})

const render = (obj1, obj2) =>{

    let texto = '';

    texto += `<h3>Objetos a comparar</h3>`;
    texto += `<p> ${JSON.stringify(obj1)} </p>`;
    texto += `<p> ${JSON.stringify(obj2)} </p>`;
    texto += `<h3>Resultado</h3>`;
    texto += `<p> ${(deepEqual(obj1, obj2))} </p>`;

    solution.innerHTML = texto;

}

render(obj, obj);