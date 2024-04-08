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
    it.each([
      new Item("a-dummy-random-item", 1, 1),
      new Item(AGED_BRIE_ITEM_NAME, 1, 1),
      new Item(BACKSTAGE_ITEM_NAME, 1, 1),
      new Item(CONJURED_ITEM_NAME, 1, 4),
      new Item(SULFURAS_ITEM_NAME, 80, 80),
    ])("should create an item", (item) => {
      const result = ItemFactory.createItem(item);

      expect(result).toBeInstanceOf(Item);

      expect(result.name).toBeDefined;
      expect(result.sellIn).toBeDefined;
      expect(result.quality).toBeDefined;
    });
  });
});
