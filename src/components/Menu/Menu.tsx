/* Styles */
import {
  MenuElement,
  MenuElementHeader,
  HeaderTitle,
  HeaderButton,
  MenuElementMain,
  MenuElementFooter,
  FooterTitle,
  FooterButton,
} from "./styled";

/* Components */
import List from "./List/List";

/*  utilities */
import { selectIsOpen, toggleCart } from "@/src/redux/slices/cartSlice";
import { HelpDispatch, HelpSelector } from "@/src/helpers/redux";
import { selectProductsTotalPrice } from "@/src/redux/reducer/cartSelectors";

export default function Menu() {
  const dispatch = HelpDispatch();
  let total = HelpSelector(selectProductsTotalPrice);
  const isOpen = HelpSelector(selectIsOpen);
  return (
    <>
      <MenuElement menuOpen={isOpen}>
        <MenuElementHeader>
          <HeaderTitle>
            Carrinho <br />
            de compras
          </HeaderTitle>
          <HeaderButton onClick={() => dispatch(toggleCart())}>x</HeaderButton>
        </MenuElementHeader>
        <MenuElementMain>
          <List />
        </MenuElementMain>

        <MenuElementFooter>
          <FooterTitle>
            <p>Total: </p>
            <p>R${total.toLocaleString("pt-BR")}</p>
          </FooterTitle>
          <FooterButton>Finalizar Compra</FooterButton>
        </MenuElementFooter>
      </MenuElement>
    </>
  );
}
