
/* ------------ solucion ------------ */

let texto = '';

while (texto.length < 7) {
    texto += '#';
    console.log(texto);
}

/* -------- solucion en html -------- */

const solution = document.getElementById('solution');
const anchoForm = document.getElementById('anchoForm');
const ancho = document.getElementById('ancho');


anchoForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(ancho.value){
        anchoBase=ancho.value;
        crearTriangulo(ancho.value);
    }
});

const crearTriangulo = (anchoBase = 7) =>{

    let textoHTML = '';

    for (let i = 0; i < anchoBase; i++) {
    
        textoHTML += `<p>`;
    
        for (let i2 = 0; i2 < i+1; i2++) {
            textoHTML += `#`
        }
    
        textoHTML += `</p>`;
    }
    
    solution.innerHTML = textoHTML;

}

crearTriangulo();