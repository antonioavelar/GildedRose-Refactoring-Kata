import { SULFURAS_ITEM_NAME } from "@/utils/constants";
import { Sulfuras } from "@/categories/Sulfuras";

describe("Testing Sulfuras item class", () => {
  describe("Testing class constructor()", () => {
    it("should instanciate the class", () => {
      const sulfuras = new Sulfuras(SULFURAS_ITEM_NAME, 0, 80);

      expect(sulfuras.name).toEqual(SULFURAS_ITEM_NAME);
      expect(sulfuras.quality).toBeDefined();
      expect(sulfuras.sellIn).toBeDefined();
      expect(sulfuras.update).toBeInstanceOf(Function);
    });

    it("should throw when quality is different from 80", () => {
      expect(() => new Sulfuras(SULFURAS_ITEM_NAME, 0, 90)).toThrow(
        Error("Sulfuras quality must be 80")
      );
    });
  });

  describe("Testing .update() method", () => {
    it("should not increment or decrement quality & sellIn", () => {
      const sulfuras = new Sulfuras(SULFURAS_ITEM_NAME, 80, 80);

      const result = sulfuras.update();

      expect(result.sellIn).toBe(80);
      expect(result.quality).toBe(80);
    });
  });
});
