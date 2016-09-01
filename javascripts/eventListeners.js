"use strict";
$('.choose').hide();
$('#botChoice').show();
$("#player").html("Player 1");
// Sets which player is going to be set up.
let player = 1;
$('#botChoice').click((e) => {
  if (e.target.id !== "" && e.target.id !== "botChoice") {
    // checks for a propper type for the current player and stores that as .type then moves onto the next set of buttons
    let id = e.target.id;
    COMBATANTS["Player" + player].type = new TYPE[id]();
    $('.choose').hide();
    $('#weaponChoice').show();
  }
});


$('#weaponChoice').click((e) => {
  if (e.target.id !== "" && e.target.id !== "weaponChoice") {
    // checks for a propper weapon for the current player and stores that as .weapon then moves onto the next set of buttons
    let id = e.target.id;
    COMBATANTS["Player" + player].weapon = new WEAPONS[id]();
    $('.choose').hide();
    $('#modChoice').show();
  }
});


$('#modChoice').click((e) => {
  if (e.target.id !== "" && e.target.id !== "modChoice") {
    // checks for a propper mod for the current player and stores that as .mod
    let id = e.target.id;
    COMBATANTS["Player" + player].mod = new MODS[id]();
    $('.choose').hide();
    // builds the player COMBATANT then stores that into thier individual section.
    COMBATANTS["Player" + player].health = COMBATANTS["Player" + player].type.health + COMBATANTS["Player" + player].mod.health;
    COMBATANTS["Player" + player].dodge = COMBATANTS["Player" + player].type.dodge + COMBATANTS["Player" + player].mod.dodge;
    COMBATANTS["Player" + player].attack = COMBATANTS["Player" + player].mod.attack;
    COMBATANTS["Player" + player].aim = COMBATANTS["Player" + player].type.aim + COMBATANTS["Player" + player].mod.aim;
    $('#player' + player).html(`PLAYER ${player}:<p>Type: ${COMBATANTS["Player" + player].type.name}</p><p>HP: ${COMBATANTS["Player" + player].health}</p><p>Weapon: ${COMBATANTS["Player" + player].weapon.name}</p><p>Mod: ${COMBATANTS["Player" + player].mod.name}</p>`);
    //checks to see if player 1 or 2 was just built. if was player 1, player will change to 2 and go back to the beginning. if 2 it will start the battle
    if (player === 2) {
      $('#battleTime').show();
      $("#player").html("");
      $('#description').html("");
      player = 1;
      otherPlayer = 2;
      battle();
    } else {
      $("#player").html("Player 2");
      player = 2;
      $('#botChoice').show();
    }
  }
});
// on loss it will reset to the beginning and user can choose more robots.
$("#again").click(() => {
  $('.choose').hide();
  $('#botChoice').show();
  $("#player").html("Player 1");
  player = 1;
});