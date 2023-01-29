/* Styles */
import { CardElement } from "./styled";

/* Components */
import Button from "../../Button/Button";

/*  utilities */
import { HelpDispatch } from "@/src/helpers/redux";
import { convert } from "@/src/helpers/convert";
import { addToCart } from "../../../redux/slices/cartSlice";

/* Interfaces */
import { IProduct } from "@/src/types/IProduct";

export default function Card({
  id,
  photo,
  name,
  description,
  price,
}: IProduct) {
  const dispatch = HelpDispatch();
  const product = { id, name, photo, price, count: 1, quantity: 1 };
  return (
    <>
      <CardElement>
        <img src={photo} alt={`Photo this ${name}`} />
        <p>{name}</p>
        <p>R$ {convert(price).toLocaleString("pt-br")}</p>
        <p>{description}</p>
        <Button
          icon="./bag.svg"
          text="comprar"
          onClick={() => dispatch(addToCart(product))}
        />
      </CardElement>
    </>
  );
}
