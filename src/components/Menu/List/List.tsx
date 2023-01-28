/* Styles */
import { Fechar, ListaItens, Total } from "./styled";

/* Components */
import Button from "../../Button/Button";

/*  utilities */
import { convert } from "@/src/helpers/convert";
import { HelpDispatch, HelpSelector } from "@/src/helpers/redux";
import { selectProductsTotalPrice } from "@/src/redux/reducer/cartSelectors";
import {
  decrement,
  increment,
  removeFromCart,
  selectItem,
} from "@/src/redux/slices/cartSlice";

export default function List() {
  const dispatch = HelpDispatch();
  const products = HelpSelector(selectItem);
  let total = HelpSelector(selectProductsTotalPrice);

  return (
    <>
      <ListaItens size={products.length}>
        <ul>
          {products.map((product: any) => {
            return (
              <li key={product.id}>
                <img src={product.photo} alt={product.title} />
                <p className="title">{product.name}</p>

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
                  <p className="price">R${convert(product.price)}</p>
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
        <p>R${total}</p>
      </Total>
    </>
  );
}
