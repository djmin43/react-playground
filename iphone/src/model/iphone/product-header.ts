export class ProductHeader {
  public readonly isNew: boolean;
  public readonly title: string;

  constructor({ isNew, title }: ProductHeaderType) {
    this.isNew = isNew;
    this.title = title;
  }
}

type ProductHeaderType = {
  isNew: boolean;
  title: string;
};
