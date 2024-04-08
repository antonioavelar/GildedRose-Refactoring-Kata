import {
  AgedBrie,
  Backstage,
  CommonItem,
  ConjuredItem,
  Sulfuras,
} from "@/entities";
import { Item } from "@/gilded-rose";
import { ItemFactory } from "@/item-factory";
import {
  AGED_BRIE_ITEM_NAME,
  BACKSTAGE_ITEM_NAME,
  CONJURED_ITEM_NAME,
  SULFURAS_ITEM_NAME,
} from "@/utils/constants";

describe("ItemFactory", () => {
  describe("Testing createItem()", () => {
    it("should return a common item intance when name doesn't match a special item", () => {
      const item = ItemFactory.createItem(
        new Item("a-dummy-random-item", 1, 1)
      );

      expect(item).toBeInstanceOf(CommonItem);
    });

    it(`should returna an AgedBrie instance when name is ${AGED_BRIE_ITEM_NAME}`, () => {
      const item = ItemFactory.createItem(new Item(AGED_BRIE_ITEM_NAME, 1, 1));

      expect(item).toBeInstanceOf(AgedBrie);
    });

    it(`should returna a Backstage instance when name is ${BACKSTAGE_ITEM_NAME}`, () => {
      const item = ItemFactory.createItem(new Item(BACKSTAGE_ITEM_NAME, 1, 1));

      expect(item).toBeInstanceOf(Backstage);
    });

    it(`should returna a ConjuredItem instance when name is ${CONJURED_ITEM_NAME}`, () => {
      const item = ItemFactory.createItem(new Item(CONJURED_ITEM_NAME, 1, 1));

      expect(item).toBeInstanceOf(ConjuredItem);
    });

    it(`should returna an Sulfuras instance when name is ${SULFURAS_ITEM_NAME}`, () => {
      const item = ItemFactory.createItem(new Item(SULFURAS_ITEM_NAME, 80, 80));

      expect(item).toBeInstanceOf(Sulfuras);
    });
  });
});
