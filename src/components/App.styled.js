import styled from "styled-components";

export const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 4px black solid;
  border-right: 4px black solid;
  margin: 10px 0;
`;

export const AllRangeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-top: 0px;
    margin-bottom: 40px;
    align-items: normal;
  }
`;

export const TypeRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 15px;
  border: 1px solid lightGray;
  border-radius: 15px;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const AllProvidersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 300px;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    align-items: normal;
  }
`;
