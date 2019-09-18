let myGame = {
baseAttack: 0, // original attack strength
// here we store the current character being played as an object
player, 
// here we store the current enemy selected as an object
Enemy,
// array that will store the character objects
characterArray: [],
// i'm going to use this to mark if we selected a player character yet or nah
playerSelected: false,
// use to mark if we selected a player character yet or nah
enemySelected: false, 
// function to create characters (this I barrowed conceptually, but I do know how this function ... functions )
// character creation template
// we're using this function to create objects
// later they're going to be put into my characterArray
Character:function (name, hp, ap, counter, skill, pic) {
	this.name = name;
	this.healthPoints = hp;
	this.attackPower = ap;
	this.counterAttackPower = counter;
	this.skill = skill;
	this.pic = pic;
},
// this function is an expansion of the hcharacter function above
// healthpoints decrease by the amount of attack power a character has
Character.prototype.attack: function(Obj) {
	Obj.healthPoints -= this.attackPower;
	// this message will display in screen and the attack power and loss of health points
	$('#msg').html('You attacked ' + Obj.name + 'for ' + this.attackPower + ' damage points.');
	this.increaseAttack();
}, 
// initializing new character ... they will follow the temlate of the character function above
initCharacters: function () {
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
}, 
// Increase the attack strength (this attack strength + original attack strength)
// this function is an expansion of the function set above
// my base attack variable has a value of 0
// my attack power will vary based on the characters that I create off of the Character function above
Character.prototype.increaseAttack : function() {
	this.attackPower += baseAttack;
}, 
// this is the 'enemies' attack on the main character
// Performs a counter attack
Character.prototype.counterAttack = function(Obj) {
	Obj.healthPoints -= this.counterAttackPower;
	// this message will display in screen and the counterattack + loss of healthpoints
	$('#msg').append('<br>' + this.name + ' counter attacked you for ' + this.counterAttackPower + ' damage points.');
},

// this sets the base attacke value based on the character selected
setBaseAttack: function (Obj) {
	baseAttack = Obj.attackPower;
},

// function to check is the character is alive
isAlive: function (Obj) {
	// if my characters health points are greater than zero log true
	if (Obj.healthPoints > 0) {
		return true;
	}
	// if less then 0 log false (she dead )
	return false;
}, 

// Checks if the player has won
isWinner: function () {
	// if there are no more characters left to battle in the character array and player heathpoints are greater than zero return true (they won!)
	if (characterArray.length == 0 && player.healthPoints > 0) return true;
	else
		// else they died (lame )
		return false;
},

// here down is where i started to struggle

// the function below will be what I use to put my cards into my player div
// this function takes a parapeter of divID (a div's ID)
characterCards: function (divID) {
	// this clears out what is in the div
	$(divID).children().remove();
	// this loops through my array and adds components to my div for the ammount of characters that I have
	for (var i = 0; i < characterArray.length; i++) {
		// adds div element to the div
		$(divID).append('<div />');
		// adds a bootstrap card class to the characters
		$(divID + ' div:last-child').addClass('card animated zoomInRight');
		// appends an image tag to each of the new divs
		$(divID + ' div:last-child').append('<img />');
		//adds the characters name from the array as an id
		$(divID + ' img:last-child').attr('id', characterArray[i].name);
		// adds a class of image to control the sizing
		$(divID + ' img:last-child').attr('class', 'image');
		// adds a picture of the character to the card from m array (object)
		$(divID + ' img:last-child').attr('src', characterArray[i].pic);
		// adds my character name via my array of objects
		$(divID + ' div:last-child').append(characterArray[i].name + '<br>');
		//adds my characters health points to the card
		$(divID + ' div:last-child').append('HP: ' + characterArray[i].healthPoints);
	}
}, 

// this function is simialr to the one above and depends on it
// i use this function to move picture from my array of objects to my enemy and player divs
// takes the parameter of two divs
updatePics: function (fromDivID, toDivID) {
	//clear the div that we are "moving" from
	$(fromDivID).children().remove();
	// loop through the character array and snap some picture
	for (var i = 0; i < characterArray.length; i++) {
		// in the div the picutres are "moving" to i'm going to append an image tag
		$(toDivID).append('<img />');
		// then add the character name
		$(toDivID + ' img:last-child').attr('id', characterArray[i].name);
		//then add their picture
		$(toDivID + ' img:last-child').attr('src', characterArray[i].pic);
		// add class of image
		$(toDivID + ' img:last-child').addClass('image animated zoomInLeft card');
	}
},

//this function allows me to flop from my first big div to my decond div
// i literally couldn't figure out a cleaner way to do this because I don't know animation super well so my other versions were rough!
switchPlayerScreen: function () {
	$('#divOne').empty();
	$('#divTwo').show();
},

$(document).on('click', 'img', function() {
	// Stores the enemy the user has clicked on in the enemy variable and removes it from the characterArray
	// if plauer is selected and the enemey is no selected and the enemy is not the character in play
	if (playerSelected && !enemySelected && this.id != player.name) {
		// for loop through the good ole character array
		for (var j = 0; j < characterArray.length; j++) {
			// if the enemy selected equals their id
			if (characterArray[j].name == this.id) {
				// set the selected character to the enemy variable
				enemy = characterArray[j]; // sets enemy
				// rip it out of the array
				characterArray.splice(j, 1);
				// if enemy selected = true
				enemySelected = true;
				// update the message give to say click the button to attack
				$('#msg').html('Click the button to attack!');
			}
		}
		// append the selected enemy to the enemyDiv
		$('#enemyDiv').append(this);
		// add the enemies name
		$('#enemyDiv').append(`<p>${enemy.name}</p>`);
		// ass the health points
		$('#enemyHealthDiv').append(`HP: ${enemy.healthPoints}`);
	}
	// Stores the character the user has clicked on in the player variable and removes it from characterArray
	if (!playerSelected) {
		for (var i = 0; i < characterArray.length; i++) {
			if (characterArray[i].name == this.id) {
				player = characterArray[i]; // sets current player
				setBaseAttack(player);
				characterArray.splice(i, 1);
				playerSelected = true;
				switchPlayerScreen();
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
	if (playerSelected && enemySelected) {
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
					// this is the greatest thing ever ecause it just reloads the document.. i see no downsides to this yet
					location.reload();
				});
			}
		}
		if (!isAlive(enemy)) {
			$('#enemyDiv').children().remove();
			// $('#enemiesLeft').html('');
			$('#enemyHealthDiv').html('');
			enemySelected = false;
			if (isWinner()) {
				// restarts game
				// this is the greatest thing ever ecause it just reloads the document.. i see no downsides to this yet
				location.reload();
				$('#msg').html('Killer Round! Wanna Play Again?');
			}
		}
	}
});




}