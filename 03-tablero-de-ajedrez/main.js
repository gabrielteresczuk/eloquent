
/* ----------- solucion js ---------- */
let anchoTotal = 8;
let altoTotal = 8;
let texto = '';

for (let alto = 0; alto < altoTotal; alto++) {

    for (let ancho = 0; ancho < anchoTotal; ancho++) {
    
        if((alto+ancho) % 2 === 0){
            texto += ' '
        }else{
            texto += '#'
        }

    }
    texto += '\n';
}

console.log(texto);

/* -------- solucion html+css ------- */

let solution = document.getElementById('solution');
let form = document.getElementById('form');
let altoForm = document.getElementById('alto');
let anchoForm = document.getElementById('ancho');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    cuadricula(altoForm.value,anchoForm.value)
});

cuadricula = (altoProp = 8, anchoProp = 8) =>{

let textoHTML = '';


for (let alto = 0; alto < altoProp; alto++) {

    textoHTML += '<div class="row">';
    
    for (let ancho = 0; ancho < anchoProp; ancho++) {

        if((alto+ancho) % 2 === 0){
            textoHTML += '<div class="col-w"></div>';
        }else{
            textoHTML += '<div class="col-b"></div>';
        }
    
    }    

    textoHTML += '</div>';
    
}

solution.innerHTML = textoHTML;

}

cuadricula();



