import { IphoneModel } from "@/types/iphone";
import { ProductHeader } from "@/model/iphone/product-header";
import { iphoneModel } from "@/components/home/menu";

export class Iphone {
  private readonly model;
  constructor(model: IphoneModel) {
    this.model = model;
  }

  get header() {
    return new ProductHeader(this.model);
  }
}
