export interface IProductDataProps {
  id: number;
  name: string;
  nutritions: {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
  };
}
export interface IShoppingCartProps {
  id: number;
  name: string;
  qty: number;
  price: number;
}

export interface INutritionsProps {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}

export interface IDeleteItemProps {
  id: number;
}

export interface IDetailsProps {
  nutritions: INutritionsProps;
}
