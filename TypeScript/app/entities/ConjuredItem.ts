import { AbstractItem } from "./AbstractItem";
import { CONJURED_ITEM_NAME } from "../utils/constants";

export class ConjuredItem extends AbstractItem {
  protected readonly NORMAL_QUALITY_INCREMENT = -2;
  protected readonly EXPIRED_QUALITY_INCREMENT = -4;

  constructor(
    name: typeof CONJURED_ITEM_NAME,
    sellIn: number,
    quality: number
  ) {
    super(name, sellIn, quality);
  }
}
