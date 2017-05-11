export class Book {
  constructor(
    public sku: string,
    public name: string,
    public author: string,
    public description: string,
    public price: string
  ) {
  }

  imageSrc(): string {
    return `/api/book/image/${this.sku}.jpg`;
  }
}
