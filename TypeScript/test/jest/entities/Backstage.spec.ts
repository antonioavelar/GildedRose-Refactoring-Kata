import { BACKSTAGE_ITEM_NAME } from "@/utils/constants";
import { Backstage } from "@/entities/Backstage";

describe("Testing Backstage class", () => {
  describe("Testing .update() method", () => {
    it("should increment quality (+1) and decrease sellIn", () => {
      const backstage = new Backstage(BACKSTAGE_ITEM_NAME, 11, 10);

      const result = backstage.update();

      expect(result.sellIn).toBe(10);
      expect(result.quality).toBe(11);
    });

    it("should increment twice the quality (+2) quality and descrease (-1) sellIn if sellIn <= 10 day & sellIn >= 6", () => {
      const backstage = new Backstage(BACKSTAGE_ITEM_NAME, 10, 10);

      const result = backstage.update();

      expect(result.sellIn).toBe(9);
      expect(result.quality).toBe(12);
    });

    it("should increment quality (+3) if sellIn <= 5 & sellIn >= 0", () => {
      const backstage = new Backstage(BACKSTAGE_ITEM_NAME, 5, 10);

      const result = backstage.update();

      expect(result.sellIn).toBe(4);
      expect(result.quality).toBe(13);
    });

    it("should drop quality to 0 if sellIn <= 0", () => {
      const backstage = new Backstage(BACKSTAGE_ITEM_NAME, 0, 50);

      const result = backstage.update();

      expect(result.sellIn).toBe(-1);
      expect(result.quality).toBe(0);
    });

    it("should not increase quality above 50", () => {
      const backstage = new Backstage(BACKSTAGE_ITEM_NAME, 8, 50);

      const result = backstage.update();

      expect(result.sellIn).toBe(7);
      expect(result.quality).toBe(50);
    });
  });
});
