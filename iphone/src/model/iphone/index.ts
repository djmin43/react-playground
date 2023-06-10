import { IphoneModel } from "@/types/iphone";
import { ProductHeader } from "@/model/iphone/productHeader";
import { iphoneModel } from "@/components/home/menu";

export class Iphone {
  private readonly model;
  constructor(model: IphoneModel) {
    this.model = model;
  }

  public getHeader() {
    if (this.model === iphoneModel["14pro"]) {
      return new ProductHeader({
        isNew: true,
        title: "iPhone 14 Pro 구입하기",
      });
    }
  }
}
