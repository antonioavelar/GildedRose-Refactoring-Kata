import {
  AGED_BRIE_ITEM_NAME,
  BACKSTAGE_ITEM_NAME,
  SULFURAS_ITEM_NAME,
} from "@/utils/constants";
import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("Testing contructor", () => {
    const gildedRose = new GildedRose();

    expect(gildedRose).toBeInstanceOf(GildedRose);
    expect(gildedRose.items).toEqual([]);
    expect(gildedRose.updateQuality).toBeInstanceOf(Function);
  });

  describe("Testing updateQuality()", () => {
    describe("Testing common items", () => {
      it("should decrement (-1) both sellIn and quality properties", () => {
        const items = [new Item("foo", 10, 10)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].name).toBe(items[0].name);
        expect(result[0].sellIn).toBe(9);
        expect(result[0].quality).toBe(9);
      });

      it("should decrement quality twice (-2) as fast once the sell by date has passed", () => {
        const items = [new Item("foo", 0, 10)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].name).toBe(items[0].name);
        expect(result[0].sellIn).toBe(-1);
        expect(result[0].quality).toBe(8);
      });

      it("should not descrease quality bellow 0", () => {
        const items = [new Item("foo", 10, 0)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].name).toBe(items[0].name);
        expect(result[0].sellIn).toBe(9);
        expect(result[0].quality).toBe(0);
      });
    });

    describe("Testing Aged Brie item", () => {
      it("should increment (+1) quality and descrease (-1) sellIn", () => {
        const items = [new Item(AGED_BRIE_ITEM_NAME, 10, 10)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].sellIn).toBe(9);
        expect(result[0].quality).toBe(11);
      });

      /**
       * It's not explicit in the requirement, but we can infer that aged brie improves twice in quality when sell by date has passed
       */
      it("should increment quality (+2) twice as fast once the sell by date has passed", () => {
        const items = [new Item(AGED_BRIE_ITEM_NAME, 0, 10)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].sellIn).toBe(-1);
        expect(result[0].quality).toBe(12);
      });

      it("should not increase quality above 50", () => {
        const items = [
          new Item(AGED_BRIE_ITEM_NAME, 10, 49),
          new Item(AGED_BRIE_ITEM_NAME, 10, 50),
        ];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].quality).toBe(50);
        expect(result[1].quality).toBe(50);
      });
    });

    describe("Testing Sulfuras item", () => {
      it("should not increment or decrement quality & sellIn", () => {
        const items = [new Item(SULFURAS_ITEM_NAME, 80, 80)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].sellIn).toBe(80);
        expect(result[0].quality).toBe(80);
      });
    });

    describe("Testing Backstage passes item", () => {
      it("should increment quality (+1) and decrease sellIn", () => {
        const items = [new Item(BACKSTAGE_ITEM_NAME, 11, 10)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].sellIn).toBe(10);
        expect(result[0].quality).toBe(11);
      });

      it("should increment twice the quality (+2) quality and descrease (-1) sellIn if sellIn <= 10 day & sellIn >= 6", () => {
        const items = [new Item(BACKSTAGE_ITEM_NAME, 10, 10)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].sellIn).toBe(9);
        expect(result[0].quality).toBe(12);
      });

      it("should increment quality (+3) if sellIn <= 5 & sellIn >= 0", () => {
        const items = [new Item(BACKSTAGE_ITEM_NAME, 5, 10)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].sellIn).toBe(4);
        expect(result[0].quality).toBe(13);
      });

      it("should drop quality to 0 if sellIn <= 0", () => {
        const items = [new Item(BACKSTAGE_ITEM_NAME, 0, 50)];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].sellIn).toBe(-1);
        expect(result[0].quality).toBe(0);
      });

      it("should not increase quality above 50", () => {
        const items = [
          new Item(BACKSTAGE_ITEM_NAME, 10, 49),
          new Item(BACKSTAGE_ITEM_NAME, 10, 50),
        ];
        const gildedRose = new GildedRose(items);

        const result = gildedRose.updateQuality();

        expect(result[0].quality).toBe(50);
        expect(result[1].quality).toBe(50);
      });
    });
  });
});
