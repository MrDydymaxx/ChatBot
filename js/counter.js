var name;
function incrementeCounterOf(name,i){
  console.log(i);
  bot["bot"][i]["count"]++;
  document.querySelector("." + name).innerHTML = bot["bot"][i]["count"];
}
function needIncrementation(name,i){
  console.log(name);
  incrementeCounterOf(name,i);
}


