let Card = function(suit, value, name){
  this.suit = suit
  this.value = value
  this.name = name

  Card.prototype.showCard = function(){
    console.log(`This is the ${name} of ${suit}`)
  }
}

let Deck = function(){
  this.cards = []

  function createCardsForDeck(deck){
    let counter = 0
    
    while(counter < 4){
      let name
      if (counter == 0){
        let suit = 'Spades'
        
        for(let i = 1; i <= 13; i++){
          if (i == 1){
            name = "Ace"
          }
          else if (i == 11){
             name = "Jack"
          } else if (i == 12){
             name = "Queen"
          } else if (i == 13){
             name = "King"
          } else {
             name = i.toString()
          }
          card = new Card(suit, i, name)
          deck.cards.push(card)
        }
        counter ++
      }
      if (counter = 1) {
        let suit = 'Clubs'

        for (let i = 1; i <= 13; i++) {
          if (i == 1) {
            name = "Ace"
          }
          else if (i == 11) {
            name = "Jack"
          } else if (i == 12) {
            name = "Queen"
          } else if (i == 13) {
            name = "King"
          } else {
            name = i.toString()
          }
          card = new Card(suit, i, name)
          deck.cards.push(card)
        }
        counter ++
      }
      if (counter = 2) {
        let suit = 'Hearts'

        for (let i = 1; i <= 13; i++) {
          if (i == 1) {
            name = "Ace"
          }
          else if (i == 11) {
            name = "Jack"
          } else if (i == 12) {
            name = "Queen"
          } else if (i == 13) {
            name = "King"
          } else {
            name = i.toString()
          }
          card = new Card(suit, i, name)
          deck.cards.push(card)
        }
        counter ++
      }
        if (counter = 3) {
          let suit = 'Diamonds'

          for (let i = 1; i <= 13; i++) {
            if (i == 1) {
              name = "Ace"
            }
            else if (i == 11) {
              name = "Jack"
            } else if (i == 12) {
              name = "Queen"
            } else if (i == 13) {
              name = "King"
            } else {
              name = i.toString()
            }
            card = new Card(suit, i, name)
            deck.cards.push(card)
          }
          counter ++
        }
    }
  }

  createCardsForDeck(this)

  Deck.prototype.shuffle = function(){
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this;
  }

  Deck.prototype.reset = function(){
    this.deck = []
    createCardsForDeck(obj)
    return this
  }

  Deck.prototype.deal = function(){
    let dealtCard = this.cards.shift()
    return dealtCard
  }
}

let Player = function(name){
  this.name = name
  this.hand = []
  
  Player.prototype.drawCard = function(deck){
    this.hand.push(deck.deal())
    return this
  }

  Player.prototype.discard = function(name, suit){
    for (let i = 0; i < this.hand.length; i++){
  
      if (this.hand[i].name == name && this.hand[i].suit == suit){
        
        this.hand.splice(i, 1)
      }
    }
  }
}

player1 = new Player('Greg')
deck = new Deck()
deck.shuffle()
player1.drawCard(deck)
console.log(player1.hand[0])

console.log(deck.cards.length)