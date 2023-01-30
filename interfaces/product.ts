export interface IProduct {
  _id: string;
  name: string;
  price: number;
  author: string;
  category: string;
  description: string;
  imgUrl: string;
  seller: string;
}

export interface ICreateProduct {
  name: string;
  description: string;
  inStock: number;
  seller: string;
  tags: string[];
  price: number;
  author: string;
  category: string;
  imgUrl: string;
}
