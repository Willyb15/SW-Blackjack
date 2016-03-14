
var theDeck =[];
var placeInDeck = 4;

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
	theDeck = shuffleDeck();
	playerHand = [ theDeck[0], theDeck[2] ];
	dealerHand = [ theDeck[1], theDeck[3] ];
	placeInDeck = 4
	placeCard(playerHand[0], 'player', 'one');
	placeCard(dealerHand[0], 'dealer', 'one');
	placeCard(playerHand[1], 'player', 'two');
	placeCard(dealerHand[1], 'dealer', 'two');
	calculateTotal(playerHand, 'player');
	calculateTotal(dealerHand, 'dealer');
}

function playerCard(card, who, slot){
	var currentId = '#' + who + '-card-' + slot;
	$(currentId).removeClass('empty');
	$(currentId).html(card);
}

function calculateTotal(hand, who){
	var total = 0;
	for(i=0; i<hand.length; i++){
		// purposely NOT fixing 11, 12, or 13, or 1 = 11
		var cardValue = Number(hand[i].slice(0, -1));
		conole.log(cardValue);
		total += cardValue;
	}
	var idToGet ='.' + who + '-total';
	$(idToGet).html(total);
}

function shuffleDeck(){
	
	for(s = 1; s <= 5; s++){
		var suit ="";
		if (s === 1){
			suit = 'h';
		}else if (s === 2){
			suit = 's';
		}else if (s === 3){
			suit = 'd';
		}else if (s=== 4){
			suit = 'c';
		} else if( s === 5)
		 suit = 'r';
		 length = 5;
		for(i=1; i<=length; i++){
			theDeck.push(i+suit);
		}
	}

	var numberofTimesToShuffle = 500;
	for(i=1; i<numberofTimesToShuffle; i++){
		card1 = Math.floor(Math.random()*theDeck.length);
		card2 = Math.floor(Math.random()*theDeck.length);
		if(card1 != card2){
			temp = theDeck[card1];
			theDeck[card1] = theDeck[card2]
			theDeck[card2] = temp;
		}
	}
	return theDeck;
}



