import styled from "styled-components";

export const FooterElement = styled.footer`
  width: 100%;
  min-height: 34px;
  background: var(--darkGray);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
  @media (max-width: 768px) {
    /* position: absolute;
    bottom: 0; */
  }
`;
