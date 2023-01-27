import styled from "styled-components";

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding: 28px 65px;
  background: var(--blue);

  @media (max-width: 768px) {
    height: 50px;
    padding: 2px 20px;
    button {
    }
  }
`;

export const LogoElement = styled.div`
  display: flex;
  gap: 5px;
  align-items: baseline;
  h2,
  p {
    color: var(--white);
  }
  h2 {
    height: 44px;
    font-weight: 600;
    font-size: 40px;
  }
  p {
    font-weight: 100;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  }
`;
