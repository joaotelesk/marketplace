import styled from "styled-components";

export const ListaItens = styled.ul<{ size: number }>`
  min-height: ${(props) => (props.size > 5 ? `none` : `615px`)};
  margin-top: 64px;

  li {
    width: 80%;
    min-height: 95px;
    background: var(--white);
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 0 auto 22px;
    padding: 10px 10px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 10px;
    position: relative;

    img {
      width: 50px;
      height: 50px;
    }
    p {
      width: auto;
      font-weight: 400;
      font-size: 13px;

      &:nth-child(1) {
        font-size: 8px;
        font-weight: 400;
      }
    }

    section {
      display: flex;
      gap: 20px;
      align-items: center;
      background: var(--white);
      width: 85px;
      margin: 0 0 10px 20px;
      div {
        div {
          border: 0.3px solid #bfbfbf;
          margin-top: 4px;
          border-radius: 4px;
          max-width: 50px;
          max-height: 20px;
          display: flex;
          align-items: center;

          p {
            text-align: center;
            border-right: 0.2px solid #bfbfbf;
            border-left: 0.2px solid #bfbfbf;
            height: 12px;
            line-height: 12px;
          }

          button {
            padding: 2px 5px;
            font-weight: 400;
            border: none;
            background: none;
            text-align: center;
          }
        }
      }
      .price {
        padding-top: 10px;
        font-size: 30px;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  @media (max-width: 767px) {
    li {
      width: 80%;
      flex-direction: column;

      img {
        width: auto;
        height: 150px;
      }
      .title {
        font-size: 18px;
      }
      p {
        font-weight: 400;
        font-size: 10px;

        &:nth-child(1) {
          display: none;
        }
      }
      section {
        width: 80%;
        align-items: baseline;
        justify-content: space-around;
        .price {
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
        div {
          div {
           
            }
          }
        }
      }
    }
  }
`;

export const Fechar = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
    max-width: 18px;
    max-height: 18px;
    border-radius: 50%;
    padding-left: 11px;
    position: absolute;
    top: -5%;
    right: -2%;
    p {
      width: 1px;
    }
    img {
      width: 8px;
      height: 17px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0 120px;
  margin-bottom: 45px;
  p {
    color: var(--white);
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
  }
`;
