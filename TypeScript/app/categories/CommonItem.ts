import {
  COMMON_EXPIRED_QUALITY_INCREMENT,
  COMMON_NORMAL_QUALITY_INCREMENT,
} from "@/utils/constants";
import { AbstractItem } from "./AbstractItem";

export class CommonItem extends AbstractItem {
  protected readonly NORMAL_QUALITY_INCREMENT = COMMON_NORMAL_QUALITY_INCREMENT;
  protected readonly EXPIRED_QUALITY_INCREMENT =
    COMMON_EXPIRED_QUALITY_INCREMENT;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }
}
