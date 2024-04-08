import { AbstractItem } from "./AbstractItem";
import { BACKSTAGE_ITEM_NAME } from "../utils/constants";

export class Backstage extends AbstractItem {
  protected NORMAL_QUALITY_INCREMENT = 1;
  protected readonly EXPIRED_QUALITY_INCREMENT = 0;

  private readonly ClOSE_SELL_IN_QUALITY_INCREMENT = 2;
  private readonly SUPPER_ClOSE_SELL_IN_QUALITY_INCREMENT = 3;

  constructor(
    name: typeof BACKSTAGE_ITEM_NAME,
    sellIn: number,
    quality: number
  ) {
    super(name, sellIn, quality);

    if (this.isConcertClose()) {
      this.NORMAL_QUALITY_INCREMENT = this.ClOSE_SELL_IN_QUALITY_INCREMENT;
    }
    if (this.isConcertSuperClose()) {
      this.NORMAL_QUALITY_INCREMENT =
        this.SUPPER_ClOSE_SELL_IN_QUALITY_INCREMENT;
    }

    if (this.isAfterConcert()) {
      this.quality = 0;
    }
  }

  private isConcertClose(): boolean {
    return this.sellIn <= 10 && this.sellIn >= 6;
  }

  private isConcertSuperClose(): boolean {
    return this.sellIn <= 5 && this.sellIn >= 1;
  }

  private isAfterConcert(): boolean {
    return this.sellIn <= 0;
  }
}
