import styled from "styled-components";

export const MenuElement = styled.aside<{ menuOpen?: boolean }>`
  transform: ${(props) =>
    props.menuOpen ? `translateX(0)` : `translateX(100%)`};

  right: ${(props) => (props.menuOpen ? "0" : "-100%")};
  position: fixed;
  top: 0;
  z-index: 200;
  height: 100vh;
  background: var(--blue);
  z-index: 200;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 35%;
  transition: 0.5s;

  /* tablet */
  @media (max-width: 800px) {
    width: 50%;
  }

  /* mobile */
  @media (max-width: 570px) {
    width: 85%;
  }
`;

export const MenuElementHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1px;
  padding: 20px;
`;
export const HeaderTitle = styled.p`
  max-width: 160px;
  font-weight: 700;
  font-size: 27px;
  color: var(--white);
`;
export const HeaderButton = styled.button`
  border: none;
  background-color: black;
  color: var(--white);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: 400;
  font-size: 20px;
  position: absolute;

  right: 20px;
`;

export const MenuElementMain = styled.div`
  height: 55%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 100%;
    height: 100%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0);
  }
`;
export const MenuElementFooter = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
export const FooterTitle = styled.div`
  padding: 0 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    padding: 0 32px;
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
export const FooterButton = styled.button`
  border: none;
  background-color: #000;
  font-weight: 700;
  font-size: 28px;
  display: inline-block;
  height: 100px;
  color: var(--white);
  width: 100%;

  @media (max-width: 570px) {
    font-size: 20px;
    height: 65px;
  }
`;
