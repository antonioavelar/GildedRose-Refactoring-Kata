import { AbstractItem } from "./AbstractItem";
import {
  COMMON_EXPIRED_QUALITY_INCREMENT,
  COMMON_NORMAL_QUALITY_INCREMENT,
  CONJURED_ITEM_NAME,
} from "../utils/constants";

export class ConjuredItem extends AbstractItem {
  protected readonly NORMAL_QUALITY_INCREMENT =
    COMMON_NORMAL_QUALITY_INCREMENT * 2;
  protected readonly EXPIRED_QUALITY_INCREMENT =
    COMMON_EXPIRED_QUALITY_INCREMENT * 2;

  constructor(
    name: typeof CONJURED_ITEM_NAME,
    sellIn: number,
    quality: number
  ) {
    super(name, sellIn, quality);
  }
}
