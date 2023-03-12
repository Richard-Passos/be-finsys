import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 800;
  font-size: ${({ size }) => size || 1.5}em;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;
