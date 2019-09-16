function clickTheKiller() {
	// micahael's click functions
	$('#michael').on('click', function() {
		$('#freddy').remove();
		$('#ghostFace').remove();
		$('#jason').remove();
		$('#fallInlineEnemies1').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
		$('#freddy').addClass('image');
		$('#fallInlineEnemies2').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
		$('#ghostFace').addClass('image');
		$('#fallInlineEnemies3').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
		$('#jason').addClass('image');

		//michael vs freddy
		$('#freddy').on('click', function() {
			$('#michael').remove();
			$('#DeadInlineEnemies1').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
			$('#michael').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#freddy').remove();
			$('#DeadInlineEnemies3').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
			$('#freddy').addClass('image');
		});
		// michael vs ghostface
		$('#ghostFace').on('click', function() {
			$('#michael').remove();
			$('#DeadInlineEnemies1').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
			$('#michael').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#ghostFace').remove();
			$('#DeadInlineEnemies3').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
			$('#ghostFace').addClass('image');
		});
		// michael vs jason
		$('#jason').on('click', function() {
			$('#michael').remove();
			$('#DeadInlineEnemies1').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
			$('#michael').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#jason').remove();
			$('#DeadInlineEnemies3').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
			$('#jason').addClass('image');
		});
	});

	// jason click functions
	$('#jason').on('click', function() {
		// removes characters from star line
		$('#freddy').remove();
		$('#ghostFace').remove();
		$('#michael').remove();
		// loads characters in enemy line
		$('#fallInlineEnemies1').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
		$('#freddy').addClass('image');
		$('#fallInlineEnemies2').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
		$('#ghostFace').addClass('image');
		$('#fallInlineEnemies3').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
		$('#michael').addClass('image');
		// dead enemies battle secion for jason
		$('#freddy').on('click', function() {
			$('#jason').remove();
			$('#DeadInlineEnemies1').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
			$('#jason').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#freddy').remove();
			$('#DeadInlineEnemies3').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
			$('#freddy').addClass('image');
		});
		$('#ghostFace').on('click', function() {
			$('#jason').remove();
			$('#DeadInlineEnemies1').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
			$('#jason').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#ghostFace').remove();
			$('#DeadInlineEnemies3').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
			$('#ghostFace').addClass('image');
		});
		$('#michael').on('click', function() {
			$('#jason').remove();
			$('#DeadInlineEnemies1').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
			$('#jason').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#michael').remove();
			$('#DeadInlineEnemies3').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
			$('#michael').addClass('image');
		});
	});

	// freddy click functions
	$('#freddy').on('click', function() {
		// removes rpg character from starting line
		$('#michael').remove();
		$('#ghostFace').remove();
		$('#jason').remove();
		// moves them to the enemy line
		$('#fallInlineEnemies1').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
		$('#michael').addClass('image');
		$('#fallInlineEnemies2').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
		$('#ghostFace').addClass('image');
		$('#fallInlineEnemies3').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
		$('#jason').addClass('image');
		// freddy vs michael
		$('#michael').on('click', function() {
			$('#freddy').remove();
			$('#DeadInlineEnemies1').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
			$('#freddy').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#michael').remove();
			$('#DeadInlineEnemies3').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
			$('#michael').addClass('image');
		});
		// freddy vs ghostface
		$('#ghostFace').on('click', function() {
			$('#freddy').remove();
			$('#DeadInlineEnemies1').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
			$('#freddy').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#ghostFace').remove();
			$('#DeadInlineEnemies3').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
			$('#ghostFace').addClass('image');
		});
		// freddy vs jason
		$('#jason').on('click', function() {
			$('#freddy').remove();
			$('#DeadInlineEnemies1').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
			$('#freddy').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#jason').remove();
			$('#DeadInlineEnemies3').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
			$('#jason').addClass('image');
		});
	});

	// ghost face clicking function from chose player to battle
	$('#ghostFace').on('click', function() {
		// removes rpg characters from the star line
		$('#freddy').remove();
		$('#michael').remove();
		$('#jason').remove();
		// moves characters to the enemy line
		$('#fallInlineEnemies1').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
		$('#freddy').addClass('image');
		$('#fallInlineEnemies2').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
		$('#michael').addClass('image');
		$('#fallInlineEnemies3').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
		$('#jason').addClass('image');
		// ghostface vs freddy
		$('#freddy').on('click', function() {
			$('#ghostFace').remove();
			$('#DeadInlineEnemies1').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
			$('#ghostFace').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#freddy').remove();
			$('#DeadInlineEnemies3').append('<img id="freddy" src="assets/images/battle_icons/freddy.jpg">');
			$('#freddy').addClass('image');
		});
		// ghost face vs michael
		$('#michael').on('click', function() {
			$('#ghostFace').remove();
			$('#DeadInlineEnemies1').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
			$('#ghostFace').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#michael').remove();
			$('#DeadInlineEnemies3').append('<img id="michael" src="assets/images/battle_icons/michael.jpg">');
			$('#michael').addClass('image');
		});
		// ghostface vs jason
		$('#jason').on('click', function() {
			$('#ghostFace').remove();
			$('#DeadInlineEnemies1').append('<img id="ghostFace" src="assets/images/battle_icons/ghostface.jpg">');
			$('#ghostFace').addClass('image');
			$('#DeadInlineEnemies2').append('<img id="vs" src="assets/images/battle_icons/vs.jpg">');
			$('#vs').addClass('image');
			$('#jason').remove();
			$('#DeadInlineEnemies3').append('<img id="jason" src="assets/images/battle_icons/jason.jpg">');
			$('#jason').addClass('image');
		});
	});
}

clickTheKiller();
