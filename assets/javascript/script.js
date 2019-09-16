// my variables
var baseAttack = 0; // original attack strength
// here we store the current character being played as an object
var player;
// here we store the current enemy selected as an object
var Enemy;
// array that will store the character objects
var characterArray = [];
// i'm going to use this to mark if we selected a player character yet or nah
var playerSelected = false;
// use to mark if we selected a player character yet or nah
var EnemySelected = false;

// function to create characters (this I barrowed conceptually, but I do know how this function ... functions )
// character creation template
// we're using this function to create objects
// later they're going to be put into my characterArray
function Character(name, hp, ap, counter, skill, pic) {
	this.name = name;
	this.healthPoints = hp;
	this.attackPower = ap;
	this.counterAttackPower = counter;
	this.skill = skill;
	this.pic = pic;
}

// Increase the attack strength (this attack strength + original attack strength)
// this function is an expansion of the function set above
// my base attack variable has a value of 0
// my attack power will vary based on the characters that I create off of the Character function above
Character.prototype.increaseAttack = function() {
	this.attackPower += baseAttack;
};

// this function is an expansion of the hcharacter function above
// healthpoints decrease by the amount of attack power a character has
Character.prototype.attack = function(Obj) {
	Obj.healthPoints -= this.attackPower;
	// this message will display in screen and the attack power and loss of health points
	$('#msg').html('You attacked ' + Obj.name + 'for ' + this.attackPower + ' damage points.');
	this.increaseAttack();
};

// this is the 'enemies' attack on the main character
// Performs a counter attack
Character.prototype.counterAttack = function(Obj) {
	Obj.healthPoints -= this.counterAttackPower;
	// this message will display in screen and the counterattack + loss of healthpoints
	$('#msg').append('<br>' + this.name + ' counter attacked you for ' + this.counterAttackPower + ' damage points.');
};

// initializing new character ... they will follow the temlate of the character function above

// Initialize all the characters
function initCharacters() {
	// these will all follow the object templeate of the character function
	// new desgnanted a new instance
	var michael = new Character('Michael Meyers', 300, 10, 5, 'Immortal', $('#michael'));
	var jason = new Character('Jason Vorhees', 150, 50, 30, "Just won't die, ", $('#jason'));
	var ghostFace = new Character('Ghostface', 200, 15, 2, 'Has knife and will just keep walking', $('#ghostFace'));
	var freddy = new Character('Freddie Kreuger', 60, 30, 12, 'Enters your Dreams just for Fun', $('#freddy'));
	// declared in global variables as an empty array .push adds the characters to the array
	charaterArray.push(michael, jason, ghostFace, freddy);
}

// function to check is the character is alive
function isAlive(Obj) {
	// if my characters health points are greater than zero log true
	if (Obj.healthPoints > 0) {
		return true;
	}
	// if less then 0 log false (she dead )
	return false;
}

// Checks if the player has won
function isWinner() {
	// if there are no more characters left to battle in the character array and player heathpoints are greater than zero return true (they won!)
	if (characterArray.length == 0 && player.healthPoints > 0) return true;
	else
		// else they died (lame )
		return false;
}
