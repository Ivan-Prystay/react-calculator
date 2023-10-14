import styled from "styled-components";

export const StyledScale = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: ${(props) => props.width * 2}px;
  @media screen and (min-width: 1024px) {
    height: 20px;
    width: ${(props) => props.width * 12}px;
  }
`;
