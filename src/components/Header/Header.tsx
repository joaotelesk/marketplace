/* Styles */
import { HeaderElement, LogoElement } from "./styled";

/* Hooks */
import { useDispatch, useSelector } from "react-redux";

/* Components */
import Button from "../Button/Button";

import { toggleCart } from "@/src/store/reducer/cartSlice";
import Menu from "../Menu/Menu";
export default function Header() {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);
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
          text={items.length}
          onClick={() => dispatch(toggleCart())}
        />
      </HeaderElement>
    </>
  );
}
