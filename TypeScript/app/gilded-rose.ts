import { ItemFactory } from "./item-factory";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      const itemInstance = ItemFactory.createItem(item);

      itemInstance.update();
      item.name = itemInstance.name;
      item.sellIn = itemInstance.sellIn;
      item.quality = itemInstance.quality;
    });

    return this.items;
  }
}
