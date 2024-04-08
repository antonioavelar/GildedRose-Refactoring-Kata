import { ConjuredItem } from "../../../app/categories/ConjuredItem";
import { CONJURED_ITEM_NAME } from "../../../app/utils/constants";

describe("Testing ConjuredItem class", () => {
  describe("Testing .update() method", () => {
    it("should decrement (-1) both sellIn and quality properties", () => {
      const item = new ConjuredItem(CONJURED_ITEM_NAME, 10, 10);

      const result = item.update();

      expect(result.name).toBe(result.name);
      expect(result.sellIn).toBe(9);
      expect(result.quality).toBe(8);
    });

    it("should decrement quality twice (-2) as fast once the sell by date has passed", () => {
      const item = new ConjuredItem(CONJURED_ITEM_NAME, 0, 10);

      const result = item.update();

      expect(result.name).toBe(item.name);
      expect(result.sellIn).toBe(-1);
      expect(result.quality).toBe(6);
    });

    it.each([
      new ConjuredItem(CONJURED_ITEM_NAME, 10, 0),
      new ConjuredItem(CONJURED_ITEM_NAME, -1, 1),
      new ConjuredItem(CONJURED_ITEM_NAME, -2, 2),
      new ConjuredItem(CONJURED_ITEM_NAME, -3, 3),
    ])("should not descrease quality bellow 0", (item: ConjuredItem) => {
      const EXPECTED_SELL_IN = item.sellIn - 1;

      const result = item.update();

      expect(result.name).toBe(item.name);
      expect(result.sellIn).toBe(EXPECTED_SELL_IN);
      expect(result.quality).toBe(0);
    });
  });
});
