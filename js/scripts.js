
var theDeck = [];
var placeInDeck = 4;
var playerTotalCards = 2;
var playerTotalCards = 2;

$(document).ready(function(){
	$('button').click(function(){
		var clickedButton = ($(this).attr('id'));
		if(clickedButton === 'deal-button'){
			deal();
		}else if(clickedButton==='hit-button'){
			hit();
		}else if(clickedButton=== 'stand-button'){
			stand();
		}
	});
});

	
function deal(){
	shuffleDeck();
	playerHand = [ theDeck[0], theDeck[2] ];
	dealerHand = [ theDeck[1], theDeck[3] ];
	placeInDeck = 4;
	placeCard(playerHand[0], 'player', 'one');
	placeCard(dealerHand[0], 'dealer', 'one');
	placeCard(playerHand[1], 'player', 'two');
	placeCard(dealerHand[1], 'dealer', 'two');
	calculateTotal(playerHand, 'player');
	calculateTotal(dealerHand, 'dealer');
}

function placeCard(card, who, slot){
	var currentId = '#' + who + '-card-' + slot;
	$(currentId).removeClass('empty');
	$(currentId).html(card);

	// what if the total is over 21? This is a good place to check for 21

}

function calculateTotal(hand, who){
	var total = 0;
	for(i=0; i<hand.length; i++){
		// purposely NOT fixing 11, 12, or 13, or 1 = 11
		var cardValue = Number(hand[i].slice(0, -1));
		console.log(cardValue);
		total += cardValue;
	}
	var idToGet ='.' + who + '-total';
	$(idToGet).html(total);
	return total;
}

function shuffleDeck(){
	
	var suit = "";
	for(s = 1; s <= 4; s++){
		if(s===1){
			suit = "h";
		}else if(s === 2){
			suit = "s";
		}else if(s === 3){
			suit = "d";
		}else if(s === 4){
			suit = "c";
		}
		//card number
		for(i=1; i <= 13; i++){
			theDeck.push(i+suit);
		}
	}
	var numberofTimesToShuffle = 500;
	for(i=1; i<numberofTimesToShuffle; i++){
		card1 = Math.floor(Math.random()*52);
		card2 = Math.floor(Math.random()*52);
		if(card1 != card2){
			temp = theDeck[card1];
			theDeck[card1] = theDeck[card2]
			theDeck[card2] = temp;
		}	
	}
	return (theDeck);
}
console.log(theDeck);

function hit(){
	var slot = '';
	if(playerTotalCards === 2){ 
		slot = "three";
	}else if (playerTotalCards === 3){ 
		slot = 'four';
	}else if (playerTotalCards === 4){ 
		slot = 'five';
	}else if (playerTotalCards === 5){ 
		slot = 'six';
	}

	placeCard(theDeck[placeInDeck],'player',slot);
	playerHand.push(theDeck[placeInDeck]);
	placeInDeck ++;
	playerTotalCards++;
	calculateTotal(playerHand, 'player');
	if (calculateTotal(playerHand, 'player') > 21){
	
	}

checkWin();
}

function stand(){
	var dealerTotal = $('dealer-total').html
	
	while(dealerTotal<17){
	if(dealerTotalCards == 2){
		slot = 'three';
	}else if (dealerTotalCards === 3){ 
		slot = 'four';
	}else if (dealerTotalCards === 4){ 
		slot = 'five';
	}else if (dealerTotalCards === 5){ 
		slot = 'six';
	}


	placeCard(theDeck[placeInDeck],'dealer',slot);
	dealerHand.push(theDeck[placeInDeck]);
	playerTotalCards++;
	placeInDeck ++;
	calculateTotal(dealerHand, 'dealer');
	dealerTotal = $('.dealer-total').html();
	}
	//We now know the dealer has at least 17. Check to see who is higher.
	checkWin();
}

function checkWin(){
	var playerHas = Number($('.player-total').html());
	var dealerHas = Number($('.dealer-total').html());
	
	if(dealerHas >21){
		// dealer busted
		bust('dealer');
	}else{
		// Neither player has busted
		if(playerHas > dealerHas){
			//playerwon
			$('#message').html('You have beaten the dealer!');
		}else if(dealerHas > playerHas){
			//dealer won
			$('#message').html('Sorry the dealer has beaten you!');			
		}else
		//tie
			$('#message').html('It\'s a push!');		
		}
	
	
}

function bust(who){

	if (who === 'player'){
		$('#message').html('You have busted!');
	}else{
		$('#message').html('The Dealer has busted!');
	}
}



































