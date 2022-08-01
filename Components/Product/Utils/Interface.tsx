// Product sort details
export interface ProductInterface {
  id: number;
  name: string;
  title: string;
  thumbnailUrl: string;
  albumId: string;
}

export interface FilterInterface {
  _limit?: number;
}
