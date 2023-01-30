export interface ISeries {
  imgUrl: ImgURL;
  _id: string;
  name: string;
  title: string;
  __v: number;
}

export interface ImgURL {
  public_id: string;
  secure_url: string;
}

export interface IFormatSeries {
  _id: string;
  name: string;
  title: string;
  imgUrl: string;
}
