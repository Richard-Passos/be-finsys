/* Style */
import colors from "@/styles/colors";

/* Logic */
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${colors.secondary};
`;

export const Content = styled.div`
  width: 95%;
  max-width: 80rem;
  min-height: 84vh;
  margin: 0 auto;
`;
