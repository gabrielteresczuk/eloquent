/* --------------- js --------------- */

class Grupo {
  constructor(){
    this.miembros = [];
  }

  tiene = (valor) =>{
    return this.miembros.includes(valor);
  }

  agregar = (valor) =>{
    if(!this.tiene(valor)){
      this.miembros.push(valor);
    }
  }

  borrar = (valor) =>{
    this.miembros = this.miembros.filter(el => el !== valor);
  }

  static desde = (collection) =>{
    let grupo = new Grupo;
    for (const i of collection) {
      grupo.agregar(i);
    }
    return grupo;
  }

}



let group = Grupo.desde([10, 20]);
console.log(group.tiene(10));
// → true
console.log(group.tiene(30));
// → false
group.agregar(10);
group.borrar(10);
console.log(group.tiene(10));


/* ------------ html+css ------------ */


let form = document.getElementById('form');

let desde = document.getElementById('desde');


let solution = document.getElementById('solution');

let grupoRender = Grupo.desde([1,2,3,4,5]);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let arrayString = desde.value.split(',');
    let arrayNum = arrayString.map(el => parseInt(el));

    grupoRender = Grupo.desde(arrayNum);
    render();
});


const render = () =>{

    console.log(grupoRender.miembros);

    let texto = '';
    
    texto += '<h3>Grupo</h3>';
    texto += grupoRender.miembros.map(el => `<p>${el} - <button data-id=${el} class='eliminar'> Eliminar </button></p>`).join('');

    solution.innerHTML = texto;

    let botones = document.querySelectorAll('.eliminar');

    botones.forEach(el =>{
      el.addEventListener('click',()=>{

        grupoRender.borrar(parseInt( el.getAttribute("data-id")));
        render();
      });
    })

}

render();

