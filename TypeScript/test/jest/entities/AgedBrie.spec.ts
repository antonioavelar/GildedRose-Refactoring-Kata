import { AGED_BRIE_ITEM_NAME } from "../../../app/utils/constants";
import { AgedBrie } from "../../../app/categories/AgedBrie";

describe("Testing AgedBrie item class", () => {
  describe("Testing .update() method", () => {
    it("should increment (+1) quality and descrease (-1) sellIn", () => {
      const brie = new AgedBrie(AGED_BRIE_ITEM_NAME, 10, 10);

      const result = brie.update();

      expect(result.sellIn).toBe(9);
      expect(result.quality).toBe(11);
    });

    /**
     * It's not explicit in the requirement, but we can infer that aged brie improves twice in quality when sell by date has passed
     */
    it("should increment quality (+2) twice as fast once the sell by date has passed", () => {
      const brie = new AgedBrie(AGED_BRIE_ITEM_NAME, 0, 10);

      const result = brie.update();

      expect(result.sellIn).toBe(-1);
      expect(result.quality).toBe(12);
    });

    it("should not increase quality above 50", () => {
      const brie = new AgedBrie(AGED_BRIE_ITEM_NAME, 10, 50);

      const result = brie.update();

      expect(result.quality).toBe(50);
    });
  });
});
