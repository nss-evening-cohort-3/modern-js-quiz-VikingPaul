"use strict";
$('#description').append(``);
let otherPlayer = 2;
function battle() {
  let hit = Math.ceil(Math.random()*20);
  let dodge = Math.ceil(Math.random()*20);
  if (COMBATANTS["Player" + player].aim + hit > COMBATANTS["Player" + otherPlayer].dodge + dodge || hit === 20 && hit !== 1) {
    let damage = (COMBATANTS["Player" + player].weapon.attack() + COMBATANTS["Player" + player].attack)*COMBATANTS["Player" + player].weapon.attackNumber();
    COMBATANTS["Player" + otherPlayer].health -= damage;
    $('#description').append(`Player ${player} hit Player ${otherPlayer} with thier ${COMBATANTS["Player" + player].weapon.name} for ${damage}. Player ${otherPlayer} is now at ${COMBATANTS["Player" + otherPlayer].health} HP.<br>`);
    switch(player) {
      case 1:
        player = 2;
        otherPlayer = 1;
        break;
      case 2:
        player = 1;
        otherPlayer = 2;
        break;
    }
    if (COMBATANTS["Player" + player].health > 0) {
      setTimeout(battle, 2000);
    } else {
      setTimeout(end, 2000);
    }
  } else {
    switch(player) {
      case 1:
        player = 2;
        otherPlayer = 1;
        break;
      case 2:
        player = 1;
        otherPlayer = 2;
        break;
    }
    $('#description').append(`Player ${otherPlayer} missed Player ${player} with thier ${COMBATANTS["Player" + otherPlayer].weapon.name}. Player ${player} remains at ${COMBATANTS["Player" + player].health} HP.<br>`);
    setTimeout(battle, 2000);
  }
}
function end() {
  let chance = Math.ceil(Math.random()*100);
  if (chance === 50) {
    let life = Math.ceil(Math.random()*100);
    $('#description').append(`Player ${player} was brought back to life by their god. They now have ${life} health.<br>`);
    COMBATANTS["Player" + otherPlayer].health = life;
    setTimeout(battle, 2000);
  } else {
    $('#description').append(`Player ${player} was killed by Player ${otherPlayer} with their ${COMBATANTS["Player" + otherPlayer].weapon.name}. Player ${player}'s god didn't notice.<br>`);
  }
  $(".end").show();
}