/* Styles */
import { CardElement } from "./styled";

/* Components */
import Button from "../../Button/Button";
import { addToCart } from "../../../store/reducer/cartSlice";

/* Hooks */
import { useDispatch } from "react-redux";

/* Interfaces */
interface CardProps {
  id: number;
  title: string;
  photo: string;
  price: string;
  description: string;
}

export default function Card({
  id,
  photo,
  title,
  description,
  price,
}: CardProps) {
  const dispatch = useDispatch();
  const product = { id, title, photo, price, count: 1 };
  return (
    <>
      <CardElement>
        <img src={photo} alt={`Photo this ${title}`} />
        <p>{title}</p>
        <p>R$ {parseInt(price).toLocaleString("pt-BR")}</p>
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
