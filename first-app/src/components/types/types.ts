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

export interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IResultsCard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IRMApi {
  info: IInfo;
  results: IResultsCard[];
}
