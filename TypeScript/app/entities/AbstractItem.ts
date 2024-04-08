export abstract class AbstractItem {
  name: string;
  quality: number;
  sellIn: number;

  protected abstract NORMAL_QUALITY_INCREMENT;
  protected abstract EXPIRED_QUALITY_INCREMENT;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    const qualityIncrement =
      this.sellIn >= 1
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

    // Prevent result from smaller than 0
    if (result < 0) {
      this.quality = 0;
      // Prevent result from being bigger than 0
    } else if (result > 50) {
      this.quality = 50;
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
