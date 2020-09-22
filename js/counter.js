var characters = {};
characters['diablo'] = 0;
characters['sram'] = 0;
characters['terrorist'] = 0;
characters['velkoz'] = 0;
characters['squirtle'] = 0;
characters['firekeeper'] = 0;
characters['anaamari'] = 0;

var name = "terrorist";

needIncrementation(name);

function incrementeCounterOf(name){
  characters[name] = characters[name] +1;
  document.querySelector("." + name).innerHTML = characters[name];
}


function needIncrementation(name){
  incrementeCounterOf(name);
}

window.onload = function(){
    document.querySelector('.diablo').innerHTML = characters['diablo'];
    document.querySelector('.sram').innerHTML = characters['sram'];
    document.querySelector('.terrorist').innerHTML = characters['terrorist'];
    document.querySelector('.velkoz').innerHTML = characters['velkoz'];
    document.querySelector('.squirtle').innerHTML = characters['squirtle'];
    document.querySelector('.firekeeper').innerHTML = characters['firekeeper'];
    document.querySelector('.anaamari').innerHTML = characters['anaamari'];
    console.log(characters['.diablo']);
};


