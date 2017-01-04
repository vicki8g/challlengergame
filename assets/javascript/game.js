$( document ).ready(function() { 
	
	var goku = {
				name: 'goku',
				healthpoints : 180,
				attackpower : 7,
				counterattack : 20,
			};  
	
	var frieza = {
				name: 'frieza',
				healthpoints : 120,
				attackpower : 9,
				counterattack : 5,
			};
	
	var cell = {
				name: 'cell',
				healthpoints : 200,
				attackpower : 4,
				counterattack : 7,
			};
	
	var gohan = {
				name: 'gohan',
				healthpoints : 160,
				attackpower : 8,
				counterattack : 10,
			};

	var characters = [goku, frieza, cell, gohan];

	
	for (i = 0; i < characters.length; i++) {

		// debugger;

		$('#'+characters[i].name+'-health-points').text(characters[i].healthpoints);

		$('#'+characters[i].name+'-attack-power').text(characters[i].attackpower);

		$('#'+characters[i].name+'-counter-attack-power').text(characters[i].counterattack);

		

		console.log();

	}



	// function( {

	// 	$('#battle p').text('A long time ago in a galaxy far, far, away...').css({

	// 	color: 'yellow',

	// 	'text-align': 'center',

	// 	'font-size': '36px',

	// 	'font-family': 'starwars'



	// });

	// )};

	 







	$('#battle p').text('Select your player to begin!').css({

		color: 'yellow',

		'text-align': 'center',

		'font-size': '36px',

		'font-family': 'sf distant galaxy outline',

		'font-style': 'outline'



	});

	





	// $(function () {

	//     setInterval(function () {

	//         $('#battle p').fadeIn(500).delay(0).fadeOut(500).delay(0).fadeIn(500);

	//     }, 100);



	// });







	$('.good, .bad').one('click', function() { //choosing your player1

		// debugger;

		var chosen = $(this);

		var indexOfChosen = chosen.data('char'); /// this is the index value of chosen 

		console.log(characters[indexOfChosen]);



		if (chosen.hasClass('good')) {

			// debugger;

			for (i = 0; i < characters.length; i++) {

				$('#'+characters[i].name).removeClass('good');

				$('#'+characters[i].name).addClass('bad');

				// $('.bad').css('clear','both')

				chosen.removeClass('bad');

				chosen.addClass('good player1');

				$('.bad').css('float', 'right');

				chosen.css('float', 'left');

			}

		var button = $('<div class=attack>').text('Player1');

		chosen.append(button)

				

		} else if (chosen.hasClass('bad')) {

			for (i = 0; i < characters.length; i++) {

				$('#'+characters[i].name).removeClass('good');

				$('#'+characters[i].name).addClass('bad');

				chosen.removeClass('bad');

				chosen.addClass('good player1');

				$('.good').css('float', 'right');

				chosen.css('float', 'left');

			}

		var button = $('<div class=attack>').text('Press to Attack');

		chosen.append(button)

		// $(function () {

		//     setInterval(function () {

		//         $('<div class=attack>').fadeIn(500).delay(0).fadeOut(500).delay(0).fadeIn(500);

		//     }, 100);



		// });

		// button.text('attack');

		}

		// debugger;

		$('.good, .bad').off('click');

		$('#battle p').text('Select your opponent!').css('color', 'red');

		if (characters[$('.player1').data('char')].healthpoints !== 0) {

			$('.bad').on('click', function(){

			 	opponent = $(this)

			 	opponent.addClass('opponent')

			 	$('.bad').addClass('hold')

			 	$('.hold').removeClass('bad')

			 	opponent.addClass('bad')

			 	opponent.removeClass('hold')

			 	$('.attack').text('Press to Attack!');

				$('.attack').hover(function(){

				}, function() {

				 	$(this).css('background-color', '#444').css('color', 'yellow')

				});



				var enemy = $('<div class=enemy>').text('enemy');

				opponent.append(enemy)

				$('#battle p').text('Fight!');

				$('.bad').off('click');

		

			});

			

			$('.attack').on('click', function(){



					debugger;

					indexOfPlayer = $('.player1').data('char');

					indexOfOpponent = opponent.data('char');



					var baseAttack = $('#'+characters[indexOfPlayer].name+'-attack-power').text()

					

					// characters[indexOfPlayer].attackpower = characters[indexOfPlayer].attackpower + baseAttack;

					var higherAttack = parseInt(baseAttack) + characters[indexOfPlayer].attackpower;

					$('#'+characters[indexOfPlayer].name+'-attack-power').text(higherAttack).css('color', '#ff9900');

					

					player1Health = $('#'+characters[indexOfPlayer].name+'-health-points').text()

					enemyHealth = $('#'+characters[indexOfOpponent].name+'-health-points').text()

					enemyHealth = enemyHealth - higherAttack;

					

					

					$('#battle').append('<div id=battleStats>')



					$('#'+characters[opponent.data('char')].name+'-health-points').text(enemyHealth).css('color', '#990033');

					$('#battleStats').append($('<div id= youHit>').text(characters[indexOfPlayer].name+' just hit '+characters[indexOfOpponent].name+' for '+higherAttack+' points!'));

					player1Health = player1Health - characters[indexOfOpponent].counterattack;

					$('#'+characters[indexOfPlayer].name+'-health-points').text(player1Health).css('color', '#006600');

					$('#battleStats').append($('<div id= gotHit>').text(characters[indexOfOpponent].name+' just hit '+characters[indexOfPlayer].name+' for '+characters[indexOfOpponent].attackpower+' points!'));

					// debugger;

					$('#youHit, #gotHit').animate(

						{backgroundPositionY:"+=500px"}, 

						700, 

						"swing"

					);

					// debugger;

					

					// $('#'+characters[indexOfOpponent].name+'-attack-points').text(characters[indexOfOpponent].attackpower);

					

				if (enemyHealth < 0) {

					// debugger;

					// $('#'+characters[$('.opponent').data('char')].name).empty();

					$('#'+characters[$('.opponent').data('char')].name).addClass('defeated');

					$('.defeated').children('img').attr('src', 'assets/Images/dead.jpg');

					$('#'+characters[indexOfOpponent].name+'-health-points').text('-DEAD-').css('color', 'red')

					$('#'+characters[indexOfOpponent].name).removeClass('bad opponent');

					$('.hold').addClass('bad');

					$('.bad').removeClass('hold');

				};



			});

			$(function () {

				$('#youHit').fadeOut(500);

			});



		};

	});

	 

	// && characters[$('.opponent').data('char')].healthpoints != 0



});






