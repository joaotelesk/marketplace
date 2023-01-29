import styled from "styled-components";

export const ListItens = styled.ul<{ size: number }>`
  min-height: ${(props) => (props.size > 5 ? `none` : `500px`)};
  margin: 0 25px;
`;

export const ListCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 95px;
  background: var(--white);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  justify-content: space-between;
  padding:14px 20px;
  position: relative;
  margin-top: 10px;
  
 

  div {
    display:flex; 
    justify-content:space-around;
    alignItems:center; 
    padding:0 auto;
  }

  @media (max-width:1250px) {

    flex-direction:column;
    height:200px;
`;

export const ListCardRemove = styled.div`
  cursor: pointer;
  background-color: #000000;
  color: var(--white);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  font-weight: 400;
  position: absolute;
  right: -2.55%;
  bottom: 85%;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1250px) {
    right: -1%;
    bottom: 92%;
    font-size: 20px;
  }
`;

export const ListCardImg = styled.div<{ url: string }>`
  width: 45px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  /* desktop */
  @media (max-width: 1250px) {
    height: 95px;
    width: 80px;
  }
`;

export const ListCardTitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  max-width: 110px;
  margin: 0 20px;

  /* desktop */
  @media (max-width: 1250px) {
    margin-bottom: 10px;
    max-width: 200px;
  }
`;

export const LstCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;

  p {
    font-weight: 400;
    font-size: 10px;
    text-align: left;

    /* desktop */
    @media (max-width: 1250px) {
      display: none;
    }
  }
`;

export const ContainerItems = styled.div`
  width: 65px;
  height: 22px;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  margin-top: 4px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* desktop */
  @media (max-width: 1250px) {
    margin: 0 10px 0 0;
    height: 26px;
  }

  /* mobile */
  @media (max-width: 570px) {
    width: 97px;
    height: 34px;
    border-radius: 4px;
    margin-right: 29px;
  }
`;

export const Action = styled.button`
  border: none;
  background: none;
  font-weight: 400;
  font-size: 12px;
  color: var(--black);

  /* mobile */
  @media (max-width: 570px) {
    font-size: 24px;
  }
`;
export const Result = styled.span`
  font-weight: 400;
  font-size: 10px;
  border-left: 1px solid #bfbfbf;
  border-right: 1px solid #bfbfbf;
  padding: 0 8px;

  /* desktop */
  @media (max-width: 1250px) {
    font-size: 14px;
  }

  /* mobile */
  @media (max-width: 570px) {
    font-size: 20px;
    padding: 0 12px;
  }
`;

export const ListCardPrice = styled.span`
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;

  /* desktop */
  @media (max-width: 1250px) {
    background-color: var(--black);
    color: var(--white);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 15px;
    padding: 4px 6px;
  }

  /* mobile */
  @media (max-width: 570px) {
    height: 35px;
    width: 84px;
    font-size: 15px;
  }
`;
