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

// this function is an expansion of the hcharacter function above
// healthpoints decrease by the amount of attack power a character has
Character.prototype.attack = function(Obj) {
	Obj.healthPoints -= this.attackPower;
	// this message will display in screen and the attack power and loss of health points
	$('#msg').html('You attacked ' + Obj.name + 'for ' + this.attackPower + ' damage points.');
	this.increaseAttack();
};

// initializing new character ... they will follow the temlate of the character function above
function initCharacters() {
	// these will all follow the object templeate of the character function
	// new desgnanted a new instance
	var michael = new Character('Michael Meyers', 300, 10, 5, 'Immortal', 'assets/images/battle_icons/michael.jpg');
	var jason = new Character('Jason Vorhees', 150, 50, 30, "Just won't die, ", 'assets/images/battle_icons/jason.jpg');
	var ghostFace = new Character(
		'Ghostface',
		200,
		15,
		2,
		'Has knife and will just keep walking',
		'assets/images/battle_icons/ghostface.jpg'
	);
	var freddy = new Character(
		'Freddie Kreuger',
		60,
		30,
		12,
		'Enters your Dreams just for Fun',
		'assets/images/battle_icons/freddy.jpg'
	);
	// declared in global variables as an empty array .push adds the characters to the array
	characterArray.push(michael, jason, ghostFace, freddy);
}

// Increase the attack strength (this attack strength + original attack strength)
// this function is an expansion of the function set above
// my base attack variable has a value of 0
// my attack power will vary based on the characters that I create off of the Character function above
Character.prototype.increaseAttack = function() {
	this.attackPower += baseAttack;
};

// this is the 'enemies' attack on the main character
// Performs a counter attack
Character.prototype.counterAttack = function(Obj) {
	Obj.healthPoints -= this.counterAttackPower;
	// this message will display in screen and the counterattack + loss of healthpoints
	$('#msg').append('<br>' + this.name + ' counter attacked you for ' + this.counterAttackPower + ' damage points.');
};

// this sets the base attacke value based on the character selected
function setBaseAttack(Obj) {
	baseAttack = Obj.attackPower;
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

// here down is where i started t struggle

// Create the character cards onscreen
function characterCards(divID) {
	$(divID).children().remove();
	for (var i = 0; i < characterArray.length; i++) {
		$(divID).append('<div />');
		$(divID + ' div:last-child').addClass('card');
		$(divID + ' div:last-child').append('<img />');
		$(divID + ' img:last-child').attr('id', characterArray[i].name);
		$(divID + ' img:last-child').attr('class', 'image');
		$(divID + ' img:last-child').attr('src', characterArray[i].pic);
		$(divID + ' img:last-child').attr('width', 150);
		// $(divID + ' img:last-child').addClass('img-thumbnail');
		$(divID + ' div:last-child').append(characterArray[i].name + '<br>');
		$(divID + ' div:last-child').append('HP: ' + characterArray[i].healthPoints);
		$(divID + ' div:last-child').append();
	}
}

// Update the characters pictures location on the screen (move them between divs)
function updatePics(fromDivID, toDivID) {
	$(fromDivID).children().remove();
	for (var i = 0; i < characterArray.length; i++) {
		$(toDivID).append('<img />');
		$(toDivID + ' img:last-child').attr('id', characterArray[i].name);
		$(toDivID + ' img:last-child').attr('src', characterArray[i].pic);
		$(toDivID + ' img:last-child').addClass('img-thumbnail image');
	}
}

// Change the view from the first screen to the second screen
function changeView() {
	$('#firstScreen').empty();
	$('#secondScreen').show();
}

$(document).on('click', 'img', function() {
	// Stores the enemy the user has clicked on in the enemy variable and removes it from the characterArray
	if (playerSelected && !EnemySelected && this.id != player.name) {
		for (var j = 0; j < characterArray.length; j++) {
			if (characterArray[j].name == this.id) {
				enemy = characterArray[j]; // sets enemy
				characterArray.splice(j, 1);
				EnemySelected = true;
				$('#msg').html('Click the button to attack!');
			}
		}
		$('#enemyDiv').append(this); // appends the selected enemy to the div
		$('#enemyDiv').append(`<p>${enemy.name}</p>`);
		$('#enemyHealthDiv').append('HP: ' + enemy.healthPoints);
	}
	// Stores the character the user has clicked on in the player variable and removes it from characterArray
	if (!playerSelected) {
		for (var i = 0; i < characterArray.length; i++) {
			if (characterArray[i].name == this.id) {
				player = characterArray[i]; // sets current player
				setBaseAttack(player);
				characterArray.splice(i, 1);
				playerSelected = true;
				changeView();
				$('#msg').html('Pick an enemy to fight!');
			}
		}
		updatePics('#pickPlayerRow', '#enemiesLeft');
		$('#playerDiv').append(this); // appends the selected player to the div
		$('#playerDiv').append(`<p>${player.name}</p>`);
		$('#playerHealthDiv').append('HP: ' + player.healthPoints);
	}
});

// The attack button functionality
$(document).on('click', '#attackbtn', function() {
	if (playerSelected && EnemySelected) {
		if (isAlive(player) && isAlive(enemy)) {
			player.attack(enemy);
			enemy.counterAttack(player);
			$('#playerHealthDiv').html('HP: ' + player.healthPoints);
			$('#enemyHealthDiv').html('HP: ' + enemy.healthPoints);
			if (!isAlive(enemy)) {
				$('#enemyHealthDiv').html('DEFETED!');
				$('#playerHealthDiv').html('Enemy defeated!');
				$('#msg').html('Pick another enemy to battle...');
			}
			if (!isAlive(player)) {
				$('#playerHealthDiv').html('YOU LOST!');
				$('#msg').html('Try again...');
				$('#attackbtn').html('Restart Game');
				$(document).on('click', '#attackbtn', function() {
					// restarts game
					location.reload();
				});
			}
		}
		if (!isAlive(enemy)) {
			$('#enemyDiv').children().remove();
			// $('#enemiesLeft').html('');
			$('#enemyHealthDiv').html('');
			EnemySelected = false;
			if (isWinner()) {
				// restarts game
				location.reload();
				$('#msg').html('Killer Round! Wanna Play Again?');
			}
		}
	}
});

// EXECUTE
$(document).ready(function() {
	$('#secondScreen').hide();
	$('#globalMsg').hide();
	initCharacters();
	characterCards('#pickPlayerRow');
});
