"use strict";
//////////////// Players
const COMBATANTS = {};
COMBATANTS.Player1 = function() {
  this.type = null;
  this.weapon = null;
  this.mod = null;
  this.health = 0;
  this.attack = 0;
  this.aim = 0;
  this.dodge = 0;
};
COMBATANTS.Player2 = function() {
  this.type = null;
  this.weapon = null;
  this.mod = null;
};


//////////////////////////////////////////////////////////////

//////////////// Types of bots
const TYPE = {};
function Robot() {
}

//////////////// Robot

TYPE.Drone = function() {
  this.dodge = 10;
  this.aim = 10;
};
TYPE.Drone.prototype = new Robot();
TYPE.Bipedal = function() {
  this.dodge = 15;
  this.aim = 5;
};
TYPE.Bipedal.prototype = new Robot();
TYPE.ATV = function() {
  this.dodge = 5;
  this.aim = 15;
};
TYPE.ATV.prototype = new Robot();


//////////////// DRONE

TYPE.UAV = function() {
  this.health = Math.ceil(Math.random()*15+70);
  this.name = "UAV";
};
TYPE.UAV.prototype = new TYPE.Drone();
TYPE.USV = function() {
  this.health = Math.ceil(Math.random()*20+50);
  this.name = "USV";
};
TYPE.USV.prototype = new TYPE.Drone();

//////////////// Bipedal

TYPE.Bodyguard = function() {
  this.health = Math.ceil(Math.random()*30+60);
  this.name = "Bodyguard";
};
TYPE.Bodyguard.prototype = new TYPE.Bipedal();
TYPE.Bionic = function() {
  this.health = Math.ceil(Math.random()*40+40);
  this.name = "Bionic";
};
TYPE.Bionic.prototype = new TYPE.Bipedal();

//////////////// ATV

TYPE.Tank = function() {
  this.health = Math.ceil(Math.random()*50+100);
  this.name = "Tank";
};
TYPE.Tank.prototype = new TYPE.ATV();
TYPE.Tesla = function() {
  this.health = Math.ceil(Math.random()*30+70);
  this.name = "Tesla";
};
TYPE.Tesla.prototype = new TYPE.ATV();

//////////////////////////////////////////////////////////////

//////////////// Types of mods
const MODS = {};
function Mods() {
  this.health = 0;
  this.attack = 0;
  this.dodge = 0;
  this.aim = 0;
}
//////////////// 6 mods

MODS.DefenseMod = function() {
  this.health = 50;
  this.name = "Defense";
};
MODS.DefenseMod.prototype = new Mods();
MODS.AttackMod = function() {
  this.attack = 50;
  this.name = "Attack";
};
MODS.AttackMod.prototype = new Mods();
MODS.CamoMod = function() {
  this.dodge = 50;
  this.name = "Camo";
};
MODS.CamoMod.prototype = new Mods();
MODS.AshtrayMod = function() {
  this.attack = 25;
  this.health = 25;
  this.name = "Ashtray";
};
MODS.AshtrayMod.prototype = new Mods();
MODS.SolarMod = function() {
  this.health = 40;
  this.attack = 10;
  this.name = "Solar";
};
MODS.SolarMod.prototype = new Mods();
MODS.WeaponAfinityMod = function() {
  this.health = 10;
  this.attack = 40;
  this.name = "Solar";
};
MODS.WeaponAfinityMod.prototype = new Mods();

//////////////////////////////////////////////////////////////

//////////////// Types of weapons
const WEAPONS = {};
function Weapons () {
  this.attackNumber = function() {
    return 1;
  };
}
//////////////// 6 weapons

WEAPONS.Laser = function() {
  this.attack = function() {
    return Math.ceil(Math.random()*20+20);
  };
  this.name = "Laser";
};
WEAPONS.Laser.prototype = new Weapons();
WEAPONS.Bomb = function() {
  this.attack = function() {
    return Math.ceil(Math.random()*90+10);
  };
  this.name = "Bomb";
};
WEAPONS.Bomb.prototype = new Weapons();
WEAPONS.FiftyCal = function() {
  this.attack = function() {
    return Math.ceil(Math.random()*70+30);
  };
  this.name = "50-Cal";
};
WEAPONS.FiftyCal.prototype = new Weapons();
WEAPONS.MachineGun = function() {
  this.attack = function() {
    return 1;
  };
  this.attackNumber = function() {
    return Math.ceil(Math.random()*60);
  };
  this.name = "Machine Gun";
};
WEAPONS.MachineGun.prototype = new Weapons();
WEAPONS.Nuke = function() {
  this.attack = function() {
    return Math.ceil(Math.random()*60+40);
  };
  this.name = "Nuke";
};
WEAPONS.Nuke.prototype = new Weapons();
WEAPONS.Potato = function() {
  this.attack = function() {
    return Math.ceil(Math.random()*5+9);
  };
  this.name = "Potato";
};
WEAPONS.Potato.prototype = new Weapons();

//////////////////////////////////////////////////////////////