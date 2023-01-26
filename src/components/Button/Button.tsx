/* Styles */
import { ButtonElement } from "./styled";

/* Interfaces */
interface ButtonProps {
  icon?: string;
  text?: string;
  onClick?: () => void;
}

export default function Button({ icon, text, onClick }: ButtonProps) {
  return (
    <>
      <ButtonElement onClick={onClick}>
        <div>
          <img src={icon} alt="icone" />
          <p>{text}</p>
        </div>
      </ButtonElement>
    </>
  );
}
