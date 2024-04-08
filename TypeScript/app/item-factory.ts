import { Item } from "@/gilded-rose";
import {
  AgedBrie,
  Backstage,
  CommonItem,
  ConjuredItem,
  Sulfuras,
} from "./entities";
import {
  AGED_BRIE_ITEM_NAME,
  BACKSTAGE_ITEM_NAME,
  CONJURED_ITEM_NAME,
  SULFURAS_ITEM_NAME,
} from "./utils/constants";

type ItemFactoryReturn =
  | CommonItem
  | AgedBrie
  | Backstage
  | ConjuredItem
  | Sulfuras;

export class ItemFactory {
  static createItem(item: Item): ItemFactoryReturn {
    switch (item.name) {
      case AGED_BRIE_ITEM_NAME:
        return new AgedBrie(item.name, item.sellIn, item.quality);
      case BACKSTAGE_ITEM_NAME:
        return new Backstage(item.name, item.sellIn, item.quality);
      case CONJURED_ITEM_NAME:
        return new ConjuredItem(item.name, item.sellIn, item.quality);
      case SULFURAS_ITEM_NAME:
        return new Sulfuras(item.name, item.sellIn, item.quality);
      default:
        return new CommonItem(item.name, item.sellIn, item.quality);
    }
  }
}
