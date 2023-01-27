/* Styles */
import { MenuElement, MenuFooterElement } from "./styled";

/* Hooks */
import { useDispatch, useSelector } from "react-redux";

/* Components */
import { toggleCart } from "@/src/store/reducer/cartSlice";

import Button from "../Button/Button";
import List from "./List/List";

export default function Menu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.cart.isOpen);
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
