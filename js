
const pokeGrid = document.querySelectorAll('#pokeGrid');
const pokeStats = document.querySelectorAll('#pokeStats');
const hpGreen = document.querySelectorAll('.hp-green');
const atkRed = document.querySelectorAll('.atk-red');
const defBlue = document.querySelectorAll('.def-blue');
const spdYellow = document.querySelectorAll('.spd-yellow');
const atkOrange = document.querySelectorAll('.atk-orange');
const atkPurple = document.querySelectorAll('.atk-purple');
const outerGrid = document.querySelector('#outerGrid');
const evoLinks = document.querySelectorAll('#container')
const statHolder = document.querySelectorAll('#statHolder');
//
let pokeApi = 'https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/pokemon/';

let bulbsaur = [];

for(let i=1; i<2; i++){
$.getJSON(`https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/pokemon/${i}`, function (data){
// console.log(data)
// bulbsaur.push(data);

for(let i=0; i<2; i++){
  for(let t=0; t<6; t++){
      $(statHolder[i]).append(
  `<li class='hp-green'>${data.stats[t].stat.name}:${data.stats[t].base_stat}</li>`)
}
}
});
}





// for(let i=0; i<2; i++){
//   for(let t=0; t<6; t++){
//       $(statHolder[i]).append(
//   `<li class='hp-green'>${bulbsaur.stats[t].stat.name}:${bulbsaur.stats[t].base_stat}</li>`)
// }
// }
// });
// }



for(let i=0; i<151; i++){
  $(evoLinks[i]).click(function () {
  $(pokeStats[i]).fadeOut(1000);
}
)};

for(let i=0; i<151; i++){
  $(evoLinks[i]).mouseenter(function () {
  $(pokeStats[i]).fadeIn(500);
}
)};

const displayOn = () =>{
for (let i=0; i<pokeGrid.length; i++){
  pokeGrid[i].addEventListener('click', () =>{
        if(pokeStats[i].style.display == 'none'){
                $(pokeStats[i]).fadeIn(1000);
              return statColor();
      }
    });
  };
return;
};

const mOver = () => {
for (let i=0; i<pokeGrid.length; i++){
pokeGrid[i].addEventListener('mouseover', (event) =>{
        pokeStats[i].style.display = 'block';
          if(event.target.id === 'evo'){
            $(pokeStats[i+1]).fadeIn(500);
          }
    })
  }
  return;
}

const mOut = () => {
for (let i=0; i<pokeGrid.length; i++){
pokeGrid[i].addEventListener('mouseout', () =>{
        pokeStats[i].style.display = 'none';
    })
  }
  return;
}

let statColor = () => {
for(let i = 0; i < hpGreen.length; i++){
  hpGreen[i].style.color="#4a772d";
};
for(let i = 0; i < atkRed.length; i++){
  atkRed[i].style.color="red";
};
for(let i = 0; i < defBlue.length; i++){
  defBlue[i].style.color="#404144";
};
for(let i = 0; i < spdYellow.length; i++){
  spdYellow[i].style.color="#f4ce42";
};
for(let i = 0; i < atkOrange.length; i++){
  atkOrange[i].style.color="orange";
};
for(let i = 0; i < atkPurple.length; i++){
  atkPurple[i].style.color="purple";
};
  return;
}

displayOn();
mOver();
statColor();
mOut();
statColor();
