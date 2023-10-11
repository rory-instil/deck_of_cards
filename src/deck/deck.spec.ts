import {Card, Rank, Suit} from "@/deck/card";
import Deck from "@/deck/deck";

let deck: Deck;

beforeEach(() => {
  deck = new Deck();
});

const nonShuffledDefaultCard = {
  suit: Suit.Diamonds,
  rank: Rank.King
}

describe('shuffle', () => {
  test('should shuffle cards', () => {
    deck.shuffle();
    expect(deck.dealCard()).not.toStrictEqual(nonShuffledDefaultCard)
  })
})

describe('deal_card', () => {
  const emptyCard = (card: Card) => typeof card === 'object' && Object.keys(card).length === 0;

  test('should get default card', () => {
    expect(deck.dealCard()).toStrictEqual(nonShuffledDefaultCard)
  })

  test('should get one of every card from a 52 deck', () => {
    const everyCard: Set<Card> = new Set(Object.values(Rank).flatMap(rank => {
      return Object.values(Suit).map(suit => {
        return {
          rank,
          suit
        }
      })
    }))

    const allCardsDealt = Array.from({ length: 52 }, () => deck.dealCard());
    const anyCardsAreEmpty = allCardsDealt.find(emptyCard);

    expect(anyCardsAreEmpty).toBeUndefined();
    expect(new Set(allCardsDealt)).toStrictEqual(everyCard);
  })

  test('should have 8 empty cards when dealing 8 more cards than the size of the deck', () => {
    const allCardsDealt: Array<Card> = Array.from({ length: 60 }, () => deck.dealCard());

    expect(allCardsDealt.filter(emptyCard).length).toBe(8);
  })
})