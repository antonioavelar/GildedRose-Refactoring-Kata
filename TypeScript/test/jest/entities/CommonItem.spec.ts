import { CommonItem } from "../../../app/categories/CommonItem";

describe("Testing CommonItem class", () => {
  describe("Testing .update() method", () => {
    it("should decrement (-1) both sellIn and quality properties", () => {
      const item = new CommonItem("foo", 10, 10);

      const result = item.update();

      expect(result.name).toBe(result.name);
      expect(result.sellIn).toBe(9);
      expect(result.quality).toBe(9);
    });

    it("should decrement quality twice (-2) as fast once the sell by date has passed", () => {
      const item = new CommonItem("foo", 0, 10);

      const result = item.update();

      expect(result.name).toBe(item.name);
      expect(result.sellIn).toBe(-1);
      expect(result.quality).toBe(8);
    });

    it.each([new CommonItem("foo", 10, 0), new CommonItem("foo", 0, 1)])(
      "should not descrease quality bellow 0",
      (item: CommonItem) => {
        const result = item.update();

        expect(result.name).toBe(item.name);
        expect(result.sellIn).toBe(item.sellIn);
        expect(result.quality).toBe(0);
      }
    );
  });
});
