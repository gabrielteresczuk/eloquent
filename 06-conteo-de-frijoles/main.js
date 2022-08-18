/* ----------- solucion js ---------- */

const conteo = (frase,letra) =>{

    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        
        if(frase[i] === letra){
            contador += 1;
        }
        
    }

    return contador;
}

console.log(conteo('fafefifofu','f'));


/* ------- solucion html + css ------ */

let form = document.getElementById('form');
let solution = document.getElementById('solution');
let frase = document.getElementById('valor');
let letra = document.getElementById('letra');

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    let cantidad = conteo(frase.value,letra.value); 

    let texto = `<p>Para la frase ${frase.value}</p>
    <p>Se econtraron ${cantidad}, letras ${letra.value}</p>
    `;
    solution.innerHTML = texto;

});
