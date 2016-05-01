"use strict";
$('.choose').hide();
$('#botChoice').show();
$("#player").html("Player 1");
let player = 1;
$('#botChoice').click((e) => {
  if (e.target.id !== "" && e.target.id !== "botChoice") {
    let id = e.target.id;
    COMBATANTS["Player" + player].type = new TYPE[id]();
    $('.choose').hide();
    $('#weaponChoice').show();
  }
});


$('#weaponChoice').click((e) => {
  if (e.target.id !== "" && e.target.id !== "weaponChoice") {
    let id = e.target.id;
    COMBATANTS["Player" + player].weapon = new WEAPONS[id]();
    $('.choose').hide();
    $('#modChoice').show();
  }
});


$('#modChoice').click((e) => {
  if (e.target.id !== "" && e.target.id !== "modChoice") {
    let id = e.target.id;
    COMBATANTS["Player" + player].mod = new MODS[id]();
    $('.choose').hide();
    COMBATANTS["Player" + player].health = COMBATANTS["Player" + player].type.health + COMBATANTS["Player" + player].mod.health;
    COMBATANTS["Player" + player].dodge = COMBATANTS["Player" + player].type.dodge + COMBATANTS["Player" + player].mod.dodge;
    COMBATANTS["Player" + player].attack = COMBATANTS["Player" + player].mod.attack;
    COMBATANTS["Player" + player].aim = COMBATANTS["Player" + player].type.aim + COMBATANTS["Player" + player].mod.aim;
    $('#player' + player).html(`PLAYER ${player}:<p>Type: ${COMBATANTS["Player" + player].type.name}</p><p>HP: ${COMBATANTS["Player" + player].health}</p><p>Weapon: ${COMBATANTS["Player" + player].weapon.name}</p><p>Mod: ${COMBATANTS["Player" + player].mod.name}</p>`);
    if (player === 2) {
      $('#battleTime').show();
      $("#player").html("");
      $('#description').html(``);
      player = 1;
      battle();
    } else {
      $("#player").html("Player 2");
      player = 2;
      $('#botChoice').show();
    }
  }
});
$("#again").click(() => {
  $('.choose').hide();
  $('#botChoice').show();
  $("#player").html("Player 1");
  player = 1;
});