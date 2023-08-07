import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: React.CSSProperties | undefined;
}
export const ProductTitle = ({
  title,
  className,
  style,
}: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  let titleToShow: string | undefined;

  title ? (titleToShow = title) : (titleToShow = product?.title);

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {titleToShow}
    </span>
  );
};
