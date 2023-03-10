import styled from "styled-components";

export const CardElement = styled.div`
  max-width: 218px;
  max-height: 285px;
  border-radius: 8px;
  background: var(--white);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  box-sizing: border-box;
  align-items: flex-end;
  gap: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  img {
    max-width: 120px;
    max-height: 140px;
    grid-column: 1 / span 2;
    justify-self: center;
  }
  p {
    color: #2c2c2c;
    font-weight: 400;
    font-size: 16px;
    padding: 0 10px;
    align-self: baseline;
    &:nth-child(3) {
      min-width: 80px;
      height: 26px;
      background: #373737;
      color: var(--white);
      border-radius: 5px;
      font-weight: 700;
      font-size: 15px;
      text-align: center;
      justify-self: end;
      align-self: baseline;
      padding: 3px 2px;
      margin-right: 12px;
    }
    &:nth-child(4) {
      font-size: 10px;
      font-weight: 300;
      grid-column: 1 / span 2;
    }
  }
  button {
    grid-column: 1 / span 2;
    background: var(--blue);
    width: inherit;
    height: 32px;
    border-radius: 0px 0px 8px 8px;
    p {
      color: var(--white);
      font-weight: 600;
      padding: 0;
      text-transform: uppercase;
    }
  }
`;
