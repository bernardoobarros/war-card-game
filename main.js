const p1_amount = document.getElementById("player1-cards");
const p2_amount = document.getElementById("player2-cards");

const winner = document.getElementById("winner");

const card = document.getElementById("card");
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const cards_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const p1_Throw_Btn = document.getElementById("player1-btn");
const p2_Throw_Btn = document.getElementById("player2-btn");

const display = document.getElementById("display-counter");

let deck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K',
             'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 
             'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 
             'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];


let p1 = "p1";
let p2 = "p2";
let player1_Cards = [];
let player2_Cards = [];

let win_counter1 = 0
let win_counter2 = 0

let current_player = p1;

let last_cards = [];


let timer = null;
let minutes = 9;
let seconds = 59;

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
    
    winner.textContent = "";

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

    card.textContent = player_Cards[0];
    last_cards.push(player_Cards[0]);
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
        winner.textContent = "Player 1 Wins!";
        win_counter1 ++;
        player1_Cards.push(...last_cards);
        document.getElementById("win-counter1").textContent = win_counter1;
        p1_amount.textContent = player1_Cards.length;
        last_cards = [];
    }
    else if(card2value > card1value){
        winner.textContent = "Player 2 Wins!";
        win_counter2 ++;
        player2_Cards.push(...last_cards);
        document.getElementById("win-counter2").textContent = win_counter2;
        p2_amount.textContent = player2_Cards.length;
        last_cards = [];
    }
    else{
        setTimeout(() => {
            winner.textContent = "War!"
        }, 1500);
        winner.textContent = "Throw another card";
    }
}

timer = setInterval(updateTime, 1000);

function updateTime(){

    if(seconds > 0 && minutes >= 0){
        seconds --;
    }
    else if(minutes == 0 && seconds == 0){
        window.alert("O tempo acabou, jogo encerrado!");
        clearInterval(timer);
    }
    else if(seconds == 0 && minutes > 0){
        minutes --;
        seconds = 60
    }

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    
    display.textContent = `${minutes}:${seconds}`
}