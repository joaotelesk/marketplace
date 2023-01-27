import {
  decrement,
  increment,
  removeFromCart,
} from "@/src/store/reducer/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button/Button";
import { Fechar, ListaItens, Total } from "./styled";

export default function List() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart.items);
  let total = 0;
  return (
    <>
      <ListaItens size={products.length}>
        <ul>
          {products.map((product: any) => {
            {
              total += parseInt(product.price) * product.count;
            }

            return (
              <li key={product.id}>
                <img src={product.photo} alt={product.title} />
                <p className="title">{product.title}</p>

                <section>
                  <div>
                    <p>Qtd:</p>
                    <div>
                      <button onClick={() => dispatch(decrement(product))}>
                        -
                      </button>
                      <p>{product.count}</p>
                      <button onClick={() => dispatch(increment(product))}>
                        +
                      </button>
                    </div>
                  </div>
                  <p className="price">
                    R${parseInt(product.price).toLocaleString("pt-BR")}
                  </p>
                </section>

                <Fechar>
                  <Button
                    icon="./close.svg"
                    onClick={() => dispatch(removeFromCart(product))}
                  />
                </Fechar>
              </li>
            );
          })}
        </ul>
      </ListaItens>
      <Total>
        <p>Total: </p>
        <p>R${total.toLocaleString("pt-BR")}</p>
      </Total>
    </>
  );
}
