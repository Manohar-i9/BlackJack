let cards = []
let specials = []
let sum = 0
let winState = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1
    if (card === 1) {
        card = 'A' 
    } else if (card == 11) {
        card = 'J'
    } else if (card == 12) {
        card = 'Q'
    } else if (card == 13) {
        card = 'K'
    } 
    return card
}
function check(card){
    if (card == 'A') {
        return  11 
    } else if (card == 'J' || card == 'Q' || card == 'K') {
        return 10
    } else {
    return card
    }
}
function startgame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    specials = [firstCard, secondCard]
    firstCard = check(firstCard)
    secondCard = check(secondCard)
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    isAlive = true
    winState = false
    rungame()
}
function rungame() {
    cardsEl.textContent =  "Cards: " 

    for (let i = 0; i < specials.length; i += 1) {
        cardsEl.textContent += specials[i] + " "
    }


    sumEl.textContent = "Score: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum == 21) {
        message = "HURRAY! You've got Blackjack!"
        winState = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newcard() {
    let card = getRandomCard()
    specials.push(card)
    card = check(card)
    cards.push(card)
    sum += card
    if (isAlive && !winState)
        rungame()
}
