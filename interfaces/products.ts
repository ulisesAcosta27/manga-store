export interface IProducts {
  imgUrl: ImgURL;
  _id: string;
  name: string;
  category: string;
  price: number;
  inStock: number;
  slug: string;
  description: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  author?: string;
  seller: string;
}

export interface ImgURL {
  public_id: string;
  secure_url: string;
}

export interface IFormatProducts {
  _id: string;
  name: string;
  price: number;
  seller: string;
  imgUrl: string;
  category: string;
}