import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

const initContextState: ProductContextProps = {
  counter: 0,
  increaseBy: (value: number) => {},
  product: {
    id: "",
    title: "",
  },
};

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties | undefined;
}
export const ProductContext = createContext(initContextState);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
