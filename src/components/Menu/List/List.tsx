/* Styles */
import {
  ListaItens,
  Total,
  ListaCard,
  ListaCardRemove,
  ListaCardImg,
  ListaCardTitle,
  LstaCardContainer,
  ContainerItems,
  Action,
  Result,
  ListaCardPrice,
} from "./styled";

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
        {products.map((product) => {
          return (
            <ListaCard key={product.id}>
              <ListaCardRemove
                onClick={() => dispatch(removeFromCart(product))}
              >
                x
              </ListaCardRemove>
              <ListaCardImg url={product.photo} />
              <ListaCardTitle>{product.name}</ListaCardTitle>
              <div>
                <LstaCardContainer>
                  <p>Qtd: </p>
                  <ContainerItems>
                    <Action onClick={() => dispatch(decrement(product))}>
                      -
                    </Action>
                    <Result>{product.count}</Result>
                    <Action onClick={() => dispatch(increment(product))}>
                      +
                    </Action>
                  </ContainerItems>
                </LstaCardContainer>
                <ListaCardPrice>R$: {convert(product.price)}</ListaCardPrice>
              </div>
            </ListaCard>
          );
        })}
      </ListaItens>
      <Total>
        <p>Total: </p>
        <p>R${total}</p>
      </Total>
    </>
  );
}
