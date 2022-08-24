/* --------------- js --------------- */

const ciclo = (inicio , prueba, actualizacion, cuerpo) =>{

    for(let valor = inicio; prueba(valor); valor = actualizacion(valor)){
        cuerpo(valor);
    }

}

ciclo(3, n => n > 0, n => n - 1, console.log);


/* ------------ html+css ------------ */

const ciclohtml = (inicio , prueba, actualizacion) =>{
    let valores = '';
    for(let valor = inicio; prueba(valor); valor = actualizacion(valor)){
        valores += valor + ', '; 
    }

    return valores

}


let form = document.getElementById('form');
let valor = document.getElementById('valor');
let solution = document.getElementById('solution');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    render(JSON.parse(valor.value));
});

const render = (inicio,prueba,act) =>{

    let texto = '';
    
    texto += '<h3>Ciclo</h3>';
    texto += `<p>${inicio} , ${JSON.stringify(prueba.toString())} , ${JSON.stringify(act.toString())} </p>`;
    texto += `<h3>Resultado</h3>`;
    texto += `<p> ${ciclohtml(inicio,prueba,act)} </p>`;

    solution.innerHTML = texto;

}

render(3, n => n > 0, n => n - 1);