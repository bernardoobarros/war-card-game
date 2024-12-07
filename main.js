let game = true;
let deck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K',
             'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 
             'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 
             'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

let p1 = "p1";
let p2 = "p2";
let p1_amount = document.getElementById("player1-cards");
let p2_amount = document.getElementById("player2-cards");
let winner1 = document.getElementById("winner1");
let winner2 = document.getElementById("winner2");

let current_player = p1;

let card = document.getElementById("card");
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let cards_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let last_cards = [];

let player1_Cards = [];
let player2_Cards = [];
let p1_Throw_Btn = document.getElementById("player1-btn");
let p2_Throw_Btn = document.getElementById("player2-btn");

for(let i = deck.length - 1; i > 0; i--){
    const randomizer = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[randomizer]] = [deck[randomizer], deck[i]]
}

for(let i = 26; i < 51; i ++){
    player1_Cards.push(deck[i]);
};

p1_amount.textContent = player1_Cards.length;

for(let i = 0; i < 25; i++){
    player2_Cards.push(deck[i]);
}

p2_amount.textContent = player2_Cards.length;


p1_Throw_Btn.addEventListener("click", () => {
    if (current_player !== p1){
        window.alert("It's not player 1's turn"); 
        return;
    }
    
    winner1.textContent = "";
    winner2.textContent = "";

    throwCards(player1_Cards, p1_amount);
    current_player = switchPlayer(current_player);
})

p2_Throw_Btn.addEventListener("click", () => {
    if(current_player !== p2){
        window.alert("It's not player 2's turn");
        return;
    }

    throwCards(player2_Cards, p2_amount);
    current_player = switchPlayer(current_player);
    compareCards();
})


function switchPlayer (current){
    return current === p1 ? p2 : p1;
}

function throwCards(player_Cards, player_amount){
    if(player_Cards.length === 0){
        window.alert("There are no more cards!");
        return;
    }

    last_cards.push(player_Cards[0]);
    card.textContent = player_Cards[0];
    player_Cards.splice(0, 1);
    player_amount.textContent = player_Cards.length;
}

function compareCards (){
    let card1 = 0;
    let card2 = 0;
    let card1value = 0;
    let card2value = 0;

    card1 = cards.indexOf(last_cards[last_cards.length - 2]);
    card2 = cards.indexOf(last_cards[last_cards.length -1]);

    card1value = cards_values.indexOf(card1);
    card2value = cards_values.indexOf(card2);

    if(card1value > card2value){
        winner1.textContent = "Winner!"
    }
    else if(card2value > card1value){
        winner2.textContent = "Winner!"
    }
    else{
        winner1.textContent = "Draw!"
        winner2.textContent = "Draw!"
    }
    console.log(card1);
    console.log(card2);
}


console.log(last_cards);