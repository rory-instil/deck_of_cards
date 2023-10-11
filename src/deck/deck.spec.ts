import {dealCard, shuffle} from "@/deck/deck";
import {Card, EmptyCard, Rank, Suit} from "@/deck/card";

beforeEach(() => {
  // To ensure the tests have fresh state from the import between runs
  vi.resetModules()
});

const nonShuffledDefaultCard = {
  suit: Suit.Clubs,
  rank: Rank.Ace
}

describe('shuffle', () => {
  test('should shuffle cards', () => {
    shuffle();
    expect(dealCard()).not.toStrictEqual(nonShuffledDefaultCard)
  })
})

describe('deal_card', () => {
  const emptyCard = (card: Card): card is EmptyCard => true;

  test('should get default card', () => {
    expect(dealCard()).toStrictEqual(nonShuffledDefaultCard)
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

    const allCardsDealt = Array.from({ length: 52 }, () => dealCard());
    const anyCardsAreEmpty = allCardsDealt.find(emptyCard);

    expect(anyCardsAreEmpty).toBe(false);
    expect(new Set(allCardsDealt)).toStrictEqual(everyCard);
  })

  test('should have 8 empty cards when dealing 8 more cards than the size of the deck', () => {
    const allCardsDealt: Array<Card> = Array.from({ length: 60 }, () => dealCard());

    expect(allCardsDealt.filter(emptyCard).length).toBe(8);
  })
})