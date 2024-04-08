import { Item } from "@/gilded-rose";

export abstract class AbstractItem extends Item {
  protected abstract NORMAL_QUALITY_INCREMENT;
  protected abstract EXPIRED_QUALITY_INCREMENT;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  update(): Item {
    const qualityIncrement =
      this.sellIn > 1
        ? this.NORMAL_QUALITY_INCREMENT
        : this.EXPIRED_QUALITY_INCREMENT;

    this.updateQuality(qualityIncrement);
    this.updateSellIn();

    return {
      name: this.name,
      quality: this.quality,
      sellIn: this.sellIn,
    };
  }

  protected updateQuality(amount: number) {
    if (amount > 0 && this.hasQualityReachedTop()) {
      return; //Already reached the limits to increment
    }
    if (amount < 0 && this.hasQualityReachedBottom()) {
      return; //Already reached the limits to decrement
    }

    const result = this.quality + amount;

    // Prevent result from being below 0
    if (result < 0) {
      this.quality = 0;
    } else {
      this.quality = result;
    }
  }

  private hasQualityReachedTop() {
    return this.quality >= 50;
  }
  private hasQualityReachedBottom() {
    return this.quality <= 0;
  }

  protected updateSellIn() {
    this.sellIn--;
  }
}
