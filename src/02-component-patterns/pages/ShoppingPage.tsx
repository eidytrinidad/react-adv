import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  img: "./coffee-mug.png",
  title: "Coffee Mug - Card",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark text-white ">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Buttons className="custom-buttons" />
          <ProductCard.Title className="text-bold" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white ">
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductButtons className="custom-buttons" />
          <ProductTitle title="Cafe la famosa" className="text-bold" />
        </ProductCard>

        <ProductCard product={product} style={{ background: "#70d1f8" }}>
          <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,1)" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
          <ProductTitle title="Cafe la famosa" style={{ fontWeight: "bold" }} />
        </ProductCard>
      </div>
    </div>
  );
};
