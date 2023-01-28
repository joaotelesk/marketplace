/* Styles */
import { HeaderElement, LogoElement } from "./styled";

/* Hooks */
import { HelpDispatch, HelpSelector } from "../../helpers/redux";

/* Components */
import Menu from "../Menu/Menu";
import Button from "../Button/Button";

/*  utilities */
import { selectItemQuantity } from "@/src/redux/reducer/cartSelectors";
import { toggleCart } from "@/src/redux/slices/cartSlice";

export function Header() {
  const dispatch = HelpDispatch();
  const items = HelpSelector(selectItemQuantity);
  return (
    <>
      <Menu />
      <HeaderElement>
        <LogoElement>
          <h2>MKS</h2>
          <p>Sitemas</p>
        </LogoElement>

        <Button
          icon="./cart.svg"
          text={items}
          onClick={() => dispatch(toggleCart())}
        />
      </HeaderElement>
    </>
  );
}
