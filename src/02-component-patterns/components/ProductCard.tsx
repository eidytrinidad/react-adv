import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
const initContextState: ProductContextProps = {
  counter: 0,
  increaseBy: (value: number) => {},
  product: {
    id: "",
    title: "",
  },
};

export const ProductContext = createContext(initContextState);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
