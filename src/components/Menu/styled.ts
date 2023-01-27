import styled from "styled-components";

export const MenuElement = styled.aside<{ menuOpen?: boolean }>`
  background: var(--blue);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 486px;
  flex-basis: auto;
  height: 100vh;
  right: 0;
  overflow-y: auto;
  align-content: center;
  z-index: 2;
  transform: ${(props) =>
    props.menuOpen ? `translateX(0)` : `translateX(100%)`};

  transition: 0.5s;

  article {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    gap: 0px 5px;
    padding-top: 15px;

    h2 {
      width: 160px;
      font-weight: 700;
      font-size: 27px;
      line-height: 33px;
      color: var(--white);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000000;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      padding-left: 10px;
    }
  }
  @media (max-width: 768px) {
    min-width: 90%;
  }
`;

export const MenuFooterElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  min-height: 97px;
  p {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: var(--white);
  }
`;
