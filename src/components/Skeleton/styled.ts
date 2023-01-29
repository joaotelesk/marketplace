import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(
    -90deg,
    var(--lightGray) 0%,
    var(--black) 50%,
    var(--darkGray) 100%
  );
  border-radius: 8px;

  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
