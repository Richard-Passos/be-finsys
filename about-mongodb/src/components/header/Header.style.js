/* Style */
import colors from "@/styles/colors";

/* Logic */
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 2rem 4rem;
  background-color: ${colors.dark};
  color: ${colors.light};
  font-size: 1rem;
  overflow: hidden;
  transition: 0.5s ease-out;

  position: fixed;
  top: 0;
  z-index: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem 5rem;

  @media screen and (min-width: 815px) {
    justify-content: space-between;
  }

  &.disappear {
    top: -100%;
  }

  .logo {
    font-size: 2.5em;

    span {
      transition: 0.2s;
    }

    :hover {
      & > {
        span {
          color: ${colors.red};
        }

        :first-child {
          margin-right: 1rem;
        }

        :last-child {
          margin-left: 1rem;
        }
      }
    }
  }
`;
