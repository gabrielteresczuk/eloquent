/* ----------- solucion js ---------- */

min = (a,b) =>{
    if(a<b){
        return a
    }else{
        return b
    }
}

console.log(min(10,20));

/* -------- solucion html+CSS ------- */

let form = document.getElementById('form');
let solution = document.getElementById('solution');
let valores = document.getElementById('valores');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let pattern = /^(-*\d,*)*$/g;

    if(pattern.test(valores.value)){
        let arrayValores = valores.value.split(',');
        minMany(arrayValores);
    }else{
        let texto = `<p> El formato no corresponde. </p>`;
        solution.innerHTML = texto;
    }

})

minMany = (valores) =>{

    let menor = Infinity;

    valores.forEach(el => {
        if(el < menor){
            menor = el;
        }
    });

    let texto = `<p>Los numeros ingresados fueron: ${valores} </p>
                <p>El menor de todos ellos es el: <strong>${menor}</strong></p>`;
    solution.innerHTML = texto;

}

