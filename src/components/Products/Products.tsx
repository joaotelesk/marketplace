/* Styles */
import { ProductsContainer } from "./styled";

/* Components */
import { useGetData } from "../../services/useGete";
import Card from "./Card/Card";

export function Products() {
  const { data, loading } = useGetData();

  return (
    <>
      <ProductsContainer>
        {!loading
          ? data?.products.map((item) => (
              <div key={item.id}>
                <Card
                  id={item.id}
                  photo={item.photo}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                />
              </div>
            ))
          : "Carregando..."}
      </ProductsContainer>
    </>
  );
}
