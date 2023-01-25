import { Data, useGetData } from "../../services/Http";

export function Products() {
  const { data, loading } = useGetData();
  return (
    <>
      <h1>Lista de produtos</h1>
      {data?.products.map((item) => (
        <div key={item.id}>
          <img src={item.photo} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
}
