/* Style */
import colors from "@/styles/colors";
import hexToRgba from "hex-to-rgba";

/* Logic */
import styled from "styled-components";

export const List = styled.ul`
  padding: 1.5rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem 1rem;

  li {
    display: inline-block;
  }

  .item {
    padding: 0.8rem 1.6rem;
    border: 0.1rem solid ${colors.light};
    border-radius: 1rem;
    font-size: 1.6em;
    transition: 0.2s;

    :hover {
      cursor: pointer;
      background-color: ${hexToRgba(colors.light, 0.8)};
      color: ${colors.dark};
      border-color: ${colors.dark};
      box-shadow: -0.2rem 0.2rem 0 ${colors.light},
        0.2rem -0.2rem 0 ${colors.light};
    }
  }
`;
