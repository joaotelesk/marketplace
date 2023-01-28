import styled from "styled-components";
export const ButtonElement = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: var(--white);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
      width: 19px;
    }
    p {
      font-size: 18px;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    width: 52px;
    height: 26px;
    div {
      img {
        height: 12px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;
