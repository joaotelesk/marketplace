/* Styles */
import { MenuElement, MenuFooterElement } from "./styled";

/* Components */
import Button from "../Button/Button";
import List from "./List/List";

/*  utilities */
import { selectIsVisible, toggleCart } from "@/src/redux/slices/cartSlice";
import { HelpDispatch, HelpSelector } from "@/src/helpers/redux";

export default function Menu() {
  const dispatch = HelpDispatch();
  const isOpen = HelpSelector(selectIsVisible);
  return (
    <>
      <MenuElement menuOpen={isOpen ? true : false}>
        <article>
          <h2>
            Carrinho <p>de compras</p>
          </h2>
          <Button icon="./close.svg" onClick={() => dispatch(toggleCart())} />
        </article>
        <List />
        <MenuFooterElement>
          <p>Finalizar Compra</p>
        </MenuFooterElement>
      </MenuElement>
    </>
  );
}
