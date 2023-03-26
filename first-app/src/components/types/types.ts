export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICards {
  name: string;
  date: string;
  price: string;
  select: string;
  radio1: boolean;
  radio2: boolean;
  checkbox: boolean;
  img: Blob | MediaSource;
  id: string;
}
