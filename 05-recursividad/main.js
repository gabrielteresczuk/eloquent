/* ----------- solucion js ---------- */

esPar = (valor) =>{

    if(valor === 0) {
        return true;
    }else if(valor === 1){
        return false
    }else if(valor < 0){
        return esPar(-valor);
    }else{
        return esPar(valor -2);
    }

}

console.log(esPar(10));

/* ------- solucion html+css  ------- */


let form = document.getElementById('form');
let solution = document.getElementById('solution');
let valor = document.getElementById('valor');

let textoAImprimir ='';

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    let texto = esParhtml(valor.value); 

    solution.innerHTML = textoAImprimir + texto;

});



esParhtml = (valor) =>{

    textoAImprimir += `<p> ${valor}</p>`;

    if(valor === 0) {
        return true;
    }else if(valor === 1){
        return false
    }else if(valor < 0){
        return esPar(-valor);
    }else{
        return esParhtml(valor -2);
    }

}
