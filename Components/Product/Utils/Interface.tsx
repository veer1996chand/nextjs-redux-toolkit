// Product sort details
export interface ProductInterface {
  readonly id: number;
  name: string;
  title: string;
  thumbnailUrl: string;
  albumId: string;
}

export interface FilterInterface {
  _limit?: number;
}
