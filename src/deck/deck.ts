import {Card, Rank, Suit} from "@/deck/card";

export default class Deck {
  private deck: Card[] = Object.values(Rank).flatMap(rank => {
    return Object.values(Suit).map(suit => {
      return {
        rank,
        suit
      }
    })
  })

  shuffle(): void {
    const indexStore = Array.from({ length: this.deck.length }, (() => {
      let index = 0;
      return () => index++;
    })());

    let shuffledDeck = Array(this.deck.length);

    const getRandomIndex = () => {
      return Math.floor(Math.random() * (indexStore.length - 1));
    }
    this.deck.forEach(card => {
      const randomIndex = getRandomIndex();
      shuffledDeck[randomIndex] = card;
    });

    this.deck = shuffledDeck;
  }

  dealCard(): Card {
    if (this.deck.length === 0) {
      return {};
    }
    return this.deck.pop() as Card;
  }
}