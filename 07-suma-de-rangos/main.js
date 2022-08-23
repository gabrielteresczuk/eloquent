/* ----------- javascript ----------- */

const rango = (inicio, final, paso = (final > inicio? -1: 1) )=>{
    let arrayRango = [];
    if(paso > 0){
        for (let i = inicio; i <= final; i+=paso) {
            arrayRango.push(i);
        }
    }else{
        for (let i = inicio; i >= final; i+=paso) {
            arrayRango.push(i);
        }
    }

    return arrayRango;
}

const suma = (arg) => {
    let total = 0;
    for (let valor of arg) {
        total += valor;
    }
    return total;
}

console.log(rango(1,10,1));
console.log(suma(rango(1,10,1)));


/* ------------ html+css ------------ */

const form = document.getElementById('form');
const inicio = document.getElementById('inicio');
const final = document.getElementById('final');
const paso = document.getElementById('paso');
const solution = document.getElementById('solution');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

render(Number(inicio.value),Number(final.value),Number(paso.value));

})

const render = (i,f,p) =>{

    let texto = '';

    texto += `<h3>Rango de Numeros de ${i} a ${f}</h3>`;
    texto += `<p> ${rango(i,f,p).join(', ')} </p>`;
    texto += `<h3>Suma total de los valores del rango</h3>`;
    texto += `<p> ${suma(rango(i,f,p))} </p>`;

    solution.innerHTML = texto;

}

render(1,10,1);