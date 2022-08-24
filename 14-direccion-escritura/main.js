/* --------------- js --------------- */
/*
function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }

  console.log(dominantDirection("Hello!"));*/

/* ------------ html+css ------------ */


let form = document.getElementById('form');
let valor = document.getElementById('valor');
let solution = document.getElementById('solution');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    render(valor.value);
});

const render = (text) =>{

    let texto = '';
    
    texto += '<h3>Texto</h3>';
    texto += `<p> ${text} </p>`;
    texto += `<h3>Resultado</h3>`;
    texto += `<p> rtl </p>`;

    solution.innerHTML = texto;

}

render('Hola!');