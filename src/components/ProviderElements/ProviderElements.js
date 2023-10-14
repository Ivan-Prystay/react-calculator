import styled from "styled-components";

export const ProviderContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ProviderDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  border-top: 10px black solid;
  height: 100px;
  width: 75px;
  padding-top: 10px;
  justify-content: flex-end;
  @media screen and (min-width: 1024px) {
    width: 180px;
    flex-direction: row;
    justify-content: space-between;
    border-right: 10px black solid;
    border-top: 0;
    padding: 0 20px;
    height: 52px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const TotalPrice = styled.p`
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    margin-left: 10px;
    margin-bottom: 0;
  }
`;
