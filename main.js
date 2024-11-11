let cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

let player1_Cards = [];
let player2_Cards = [];

function newGame(array){
    player1_Cards = [];
    player2_Cards = [];
    
    for(let i = 26; i < 52; i ++){
         player1_Cards.push(array[i]);
     };
    
    for(let i = 0; i < 26; i++){
        player2_Cards.push(array[i]);
    }

    
    for(let i = cards.length - 1; i > 0; i--){
         const randomizer = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomizer]] = [array[randomizer], array[i]]
    }

    console.log(player1_Cards);
    console.log(player2_Cards);
    console.log(cards);
};
