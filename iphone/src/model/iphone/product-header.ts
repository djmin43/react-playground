import { IphoneModel } from "@/types/iphone";

export class ProductHeader {
  private readonly model;

  constructor(model: IphoneModel) {
    this.model = model;
  }
}
