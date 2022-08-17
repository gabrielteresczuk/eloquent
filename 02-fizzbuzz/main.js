/* ----------- solucion js ---------- */

for (let i = 1; i <= 100; i++) {

    let texto = ''

    if (i % 3 === 0) texto += 'Fizz';
    if (i % 5 === 0) texto += 'Buzz';
    
    console.log(i + ' ' + texto);
    //console.log(texto || i);
    
}

/* ------ solucion con html+css ----- */

const solution = document.getElementById('solution');

let textoHTML = '';

for (let i = 1; i <= 100; i++) {
    
    textoHTML += '<p>';

    textoHTML += `${i} `;

    textoHTML += '<strong>';
    if(i % 3 === 0 ) textoHTML += 'Fizz';
    if(i % 5 === 0 ) textoHTML += 'Buzz';
    textoHTML += '</strong>';

    textoHTML += '</p>';
    
}

solution.innerHTML = textoHTML;