/* Styles */
import { ProductsContainer } from "./styled";

/* Components */
import Card from "./Card/Card";

import { IProduct } from "@/src/types/IProduct";
import { Skeleton } from "../Skeleton/Skeleton";
type ProductsProps = {
  products: IProduct[];
};
export function Products({ products }: ProductsProps) {
  return (
    <>
      {!products ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <ProductsContainer>
          {products.map((item) => (
            <div key={item.id}>
              <Card
                id={item.id}
                photo={item.photo}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            </div>
          ))}
        </ProductsContainer>
      )}
    </>
  );
}
