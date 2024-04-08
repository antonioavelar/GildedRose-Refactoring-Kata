import { AbstractItem } from "./AbstractItem";

export class CommonItem extends AbstractItem {
  protected readonly NORMAL_QUALITY_INCREMENT = -1;
  protected readonly EXPIRED_QUALITY_INCREMENT = -2;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }
}
