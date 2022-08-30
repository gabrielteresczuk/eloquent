/* --------------- js --------------- */

class Vec {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  mas = (otro) =>{
    return new Vec(this.x + otro.x ,this.y + otro.y );
  }

  menos = (otro)=>{
    return new Vec(this.x - otro.x ,this.y - otro.y );
  }

  get longitud() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).mas(new Vec(2, 3)));

console.log(new Vec(1, 2).menos(new Vec(2, 3)));

console.log(new Vec(3, 4).longitud);

/* ------------ html+css ------------ */


let form = document.getElementById('form');

let x1 = document.getElementById('x1');
let y1 = document.getElementById('y1');
let x2 = document.getElementById('x2');
let y2 = document.getElementById('y2');

let solution = document.getElementById('solution');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    render(x1.value,y1.value,x2.value,y2.value);
});

const render = (x1,y1,x2,y2) =>{

    let vec = new Vec(x1,y1).mas(new Vec(x2,y2));
    let vec2 = new Vec(x1,y1).menos(new Vec(x2,y2));
    let vec3 = new Vec(x1,y1).longitud;

    let texto = '';
    
    texto += '<h3>SUMA</h3>';
    texto += `<p>x: ${vec.x}, y:${vec.y} </p>`;
    texto += '<h3>RESTA</h3>';
    texto += `<p>x: ${vec2.x}, y:${vec2.y} </p>`;
    texto += `<h3>Longitud</h3>`;
    texto += `<p>${vec3} </p>`;

    solution.innerHTML = texto;

}

render(1,2,2,3);