// Set up a players starting hand
// Place the cards in the correct spot

var theDeck = [];
var placeInDeck = 0;
$(document).ready(function(){

	$('button').click(function(){
		var clickedButton = ($(this).attr('id'));
		if(clickedButton == 'deal-button'){
			deal();
		}else if(clickedButton == 'hit-button'){
			hit();
		}else if(clickedButton == 'stand-button'){
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

function calculateTotal(hand, whosTurn){
	var total = 0;
	var cardValue = 0;
	for(i=0; i<hand.length; i++){
		//Purposely NOT fixing 11, 12, or 13, or 1 =11
		cardValue = Number(hand[i].slice(0,-1));
		total += cardValue;
	}
	//update the HTML
	var idToGet = '.' + whosTurn + '-total';
	$(idToGet).html(total);

	//What if the total is over 21? This is a good place to check for bust.
}

function placeCard(card, who, slot){
	var currId = '#' + who + '-card-' + slot;
	$(currId).removeClass('empty');
	if(card[1] == 'r' ){}
	$(currId).html(card);

}



function shuffleDeck(){
	// fill the deck, in order, for now.
	// Deck is made up of...
	// - 52 cards
	// - 4 suits
	// -- h, s, d, c

	// s1 = hearts, s2= spades, s3= diamonds, s4= clubs
	for(s=1; s<=5; s++){

		var suit = "";
		if(s === 1){
			suit = 'h';
			length = 13;
		}else if(s === 2){
			suit = 's';
			length = 13;
		}else if(s === 3){
			suit = 'd';
			length = 13;
		}else if(s === 4){
			suit = 'c';
			length = 13;
		}else if(s === 5){
			suit = 'r';
			length = 5;
		}
		for(i=1; i<=length; i++){
			theDeck.push(i+suit);
		}
	}
	// console.log(theDeck); We have a deck, in order!! Mini-steps...

	//Now, let's shuffle the deck.
	var numberOfTimesToShuffle = 500;
	for(i=1; i<numberOfTimesToShuffle; i++){
		card1 = Math.floor(Math.random()*theDeck.length);
		card2 = Math.floor(Math.random()*theDeck.length);
		if(card1 != card2){
			temp = theDeck[card1];
			theDeck[card1] = theDeck[card2];
			theDeck[card2] = temp;
		}
	}
}




