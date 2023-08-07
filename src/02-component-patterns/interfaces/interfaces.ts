import {
  ProductButtonsProps,
  ProductImageProps,
  ProductTitleProps,
} from "../components";
import { Props as ProductCardProps } from "../components/ProductCard";

export interface Product {
  id: string;
  title: string;
  img?: string;
  
}
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
