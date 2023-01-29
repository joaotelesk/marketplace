/* Styles */
import {
  ListItens,
  ListCard,
  ListCardRemove,
  ListCardImg,
  ListCardTitle,
  LstCardContainer,
  ContainerItems,
  Action,
  Result,
  ListCardPrice,
} from "./styled";

/*  utilities */
import { convert } from "@/src/helpers/convert";
import { HelpDispatch, HelpSelector } from "@/src/helpers/redux";
import {
  decrement,
  increment,
  removeFromCart,
  selectItem,
} from "@/src/redux/slices/cartSlice";

export default function List() {
  const dispatch = HelpDispatch();
  const products = HelpSelector(selectItem);

  return (
    <>
      <ListItens size={products.length}>
        {products.map((product) => {
          return (
            <ListCard key={product.id}>
              <ListCardRemove onClick={() => dispatch(removeFromCart(product))}>
                x
              </ListCardRemove>
              <ListCardImg url={product.photo} />
              <ListCardTitle>{product.name}</ListCardTitle>
              <div>
                <LstCardContainer>
                  <p>Qtd: </p>
                  <ContainerItems>
                    <Action onClick={() => dispatch(decrement(product))}>
                      -
                    </Action>
                    <Result>{product.quantity}</Result>
                    <Action onClick={() => dispatch(increment(product))}>
                      +
                    </Action>
                  </ContainerItems>
                </LstCardContainer>
                <ListCardPrice>
                  R$: {convert(product.price).toLocaleString("pt-BR")}
                </ListCardPrice>
              </div>
            </ListCard>
          );
        })}
      </ListItens>
    </>
  );
}
