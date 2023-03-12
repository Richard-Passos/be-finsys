/* Style */
import colors from "@/styles/colors";

/* Logic */
import styled from "styled-components";

export const Container = styled.section`
  padding: 1rem;
  margin-bottom: 3rem;
  font-size: 2rem;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  .invert-colors {
    background-color: ${colors.secondary};
    color: ${colors.primary};
  }

  ::before {
    content: "";
    width: 20%;
    height: 0.1rem;
    background-color: ${colors.secondary};

    position: absolute;
    bottom: -1rem;
    right: 40%;
    z-index: 1;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    padding: 2rem;
    margin-top: 1rem;
    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    text-indent: 1rem;
    line-height: 1.5;
  }

  img {
    margin: 0 auto;
  }

  .list {
    padding-left: 3rem;
    list-style: circle;

    .item {
      font-size: 0.8em;
      line-height: 1.2;

      :not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
