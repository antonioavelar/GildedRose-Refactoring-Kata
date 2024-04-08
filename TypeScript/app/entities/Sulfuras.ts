import { Item } from "@/gilded-rose";
import { AbstractItem } from "./AbstractItem";
import { SULFURAS_ITEM_NAME } from "@/utils/constants";

export class Sulfuras extends AbstractItem {
  protected readonly NORMAL_QUALITY_INCREMENT = 0;
  protected readonly EXPIRED_QUALITY_INCREMENT = 0;

  constructor(
    name: typeof SULFURAS_ITEM_NAME,
    sellIn: number,
    quality: number
  ) {
    super(name, sellIn, 80);
    if (quality != 80) {
      throw new Error("Sulfuras quality must be 80");
    }
  }

  update(): Item {
    return {
      name: this.name,
      quality: this.quality,
      sellIn: this.sellIn,
    };
  }
}
