export type ListOfItemsParams = {
  pageNumber: number;
  rowCount: number;
};

export type ProductItemType = {
  discountedPrice: number;
  grade: number;
  id: number;
  imageUrl: string;
  isEnabled: boolean;
  isSpecial: boolean;
  price: number;
  stock: number;
  title: string;
  unit: number;
  unitType: number;
};
