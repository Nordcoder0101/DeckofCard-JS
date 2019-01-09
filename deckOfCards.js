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

  function createCardsForDeck(deck) {
    let counter = 0

    let name = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
    let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    while (counter < 4) {
      let suit
      if (counter == 0) {
        suit = "Spades"
      } else if (counter == 1) {
        suit = "Clubs"
      } else if (counter == 2) {
        suit = "Hearts"
      } else {
        suit = "Diamonds"
      }
      for (let i = 0; i < name.length; i++) {
        deck.cards.push(card = new Card(suit, value[i], name[i]))
      }
      counter++
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