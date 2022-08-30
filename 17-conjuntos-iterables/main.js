/* --------------- js --------------- */

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return {done: true};
    } else {
      let result = {value: this.group.members[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}


/* ------------ html+css ------------ */


let form = document.getElementById('form');

let desde = document.getElementById('desde');


let solution = document.getElementById('solution');

let grupoRender = Group.from([1,2,3,4,5]);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let arrayString = desde.value.split(',');
    let arrayNum = arrayString.map(el => parseInt(el));

    grupoRender = Group.from(arrayNum);
    render();
});


const render = () =>{

    console.log(grupoRender.members);

    let texto = '';
    
    texto += '<h3>Grupo</h3>';
    texto += grupoRender.members.map(el => `<p>${el} - <button data-id=${el} class='eliminar'> Eliminar </button></p>`).join('');

    solution.innerHTML = texto;

    let botones = document.querySelectorAll('.eliminar');

    botones.forEach(el =>{
      el.addEventListener('click',()=>{

        grupoRender.delete(parseInt( el.getAttribute("data-id")));
        render();
      });
    })

}

render();

