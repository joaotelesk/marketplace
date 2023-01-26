import styled from "styled-components";

export const ProductsContainer = styled.section`
  max-width: 980px;
  max-height: 650px;
  margin: 0 auto;
  padding: 0 10px;
  display: grid;
  gap: 31px 15px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(285px, 1fr));

  div {
    max-width: 218px;
    max-height: 285px;
  }
  @media (max-width: 960px) {
    max-height: none;
    justify-items: center;
  }
`;
