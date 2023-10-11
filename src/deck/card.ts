enum Suit {
  Spades = 'SPADES',
  Hearts = 'HEARTS',
  Clubs = 'Clubs',
  Diamonds = 'Diamonds'
}

enum Rank {
  Ace = 'ACE',
  Two = 'TWO',
  Three = 'THREE',
  Four = 'FOUR',
  Five = 'FIVE',
  Six = 'SIX',
  Seven = 'SEVEN',
  Eight = 'EIGHT',
  Nine = 'NINE',
  Ten = 'TEN',
  Jack = 'JACK',
  Queen = 'QUEEN',
  King = 'KING'
}

interface DealtCard {
  rank: Rank,
  suit: Suit
}
type EmptyCard = {};
type Card = EmptyCard | DealtCard

export {
  Suit,
  Rank
};
export type {
  DealtCard,
  EmptyCard,
  Card
};
