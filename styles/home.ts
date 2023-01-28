import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;
export const Main = styled.main`
  padding: 110px 0;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;
