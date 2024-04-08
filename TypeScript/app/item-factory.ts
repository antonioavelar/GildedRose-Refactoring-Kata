import { Item } from "./gilded-rose";
import {
  AgedBrie,
  Backstage,
  CommonItem,
  ConjuredItem,
  Sulfuras,
} from "./categories";
import {
  AGED_BRIE_ITEM_NAME,
  BACKSTAGE_ITEM_NAME,
  CONJURED_ITEM_NAME,
  SULFURAS_ITEM_NAME,
} from "./utils/constants";

type ItemProcessor =
  | CommonItem
  | AgedBrie
  | Backstage
  | ConjuredItem
  | Sulfuras;

export class ItemFactory {
  static createItem(item: Item): Item {
    let processor: ItemProcessor;

    switch (item.name) {
      case AGED_BRIE_ITEM_NAME:
        processor = new AgedBrie(item.name, item.sellIn, item.quality);
        break;
      case BACKSTAGE_ITEM_NAME:
        processor = new Backstage(item.name, item.sellIn, item.quality);
        break;
      case CONJURED_ITEM_NAME:
        processor = new ConjuredItem(item.name, item.sellIn, item.quality);
        break;
      case SULFURAS_ITEM_NAME:
        processor = new Sulfuras(item.name, item.sellIn, item.quality);
        break;
      default:
        processor = new CommonItem(item.name, item.sellIn, item.quality);
    }

    const result = processor.update();

    return new Item(result.name, result.sellIn, result.quality);
  }
}
