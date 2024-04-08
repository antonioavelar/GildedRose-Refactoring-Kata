import { AbstractItem } from "./AbstractItem";
import { AGED_BRIE_ITEM_NAME } from "@/utils/constants";

export class AgedBrie extends AbstractItem {
  protected readonly NORMAL_QUALITY_INCREMENT = 1;
  protected readonly EXPIRED_QUALITY_INCREMENT = 2;

  constructor(
    name: typeof AGED_BRIE_ITEM_NAME,
    sellIn: number,
    quality: number
  ) {
    super(name, sellIn, quality);
  }
}
