"use strict";
// creates a variable for the player not attacking
let otherPlayer = 2;
function battle() {
  // battle function creates 'rolls' to hit and dodge to decide if 'otherPlayer' will hit/miss 'player'
  let hit = Math.ceil(Math.random()*20);
  let dodge = Math.ceil(Math.random()*20);
  //switches player and otherPlayer from previous call of battle so the players take turns attacking
  switch(player) {
    case 1:
      player++;
      otherPlayer = 1;
      break;
    case 2:
      player--;
      otherPlayer = 2;
      break;
  }
  // logic for hit
  if (COMBATANTS["Player" + otherPlayer].aim + hit > COMBATANTS["Player" + player].dodge + dodge || hit === 20 && hit !== 1) {
    let damage = COMBATANTS["Player" + otherPlayer].attack + COMBATANTS["Player" + otherPlayer].weapon.attack()*COMBATANTS["Player" + otherPlayer].weapon.attackNumber();
    COMBATANTS["Player" + player].health -= damage;
    $('#description').append(`Player ${otherPlayer} hit Player ${player} with thier ${COMBATANTS["Player" + otherPlayer].weapon.name} for ${damage}. Player ${player} is now at ${COMBATANTS["Player" + player].health} HP.<br>`);
    if (COMBATANTS["Player" + player].health > 0) {
      setTimeout(battle, 2000);
    } else {
      setTimeout(end, 2000);
    }
  } else {
    // logic for miss
    $('#description').append(`Player ${otherPlayer} missed Player ${player} with thier ${COMBATANTS["Player" + otherPlayer].weapon.name}. Player ${player} remains at ${COMBATANTS["Player" + player].health} HP.<br>`);
    setTimeout(battle, 2000);
  }
}
// end function ends game. unless chance === 20, then it revives player and returns to battle
function end() {
  let chance = Math.ceil(Math.random()*20);
  if (chance === 20) {
    let life = Math.ceil(Math.random()*100);
    $('#description').append(`Player ${player} was brought back to life by their god. They now have ${life} health.<br>`);
    COMBATANTS["Player" + player].health = life;
    setTimeout(battle, 2000);
  } else {
    $('#description').append(`Player ${player} was killed by Player ${otherPlayer} with their ${COMBATANTS["Player" + otherPlayer].weapon.name}. Player ${player}'s god didn't notice.<br>`);
    $(".end").show();
  }
}