import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 3rem auto;
  padding: 0 1rem;

  > svg {
    position: absolute;
    width: 30rem;
    height: 50rem;
    top: 130px;
    left: -8px;
    z-index: 0;
  }
  @media (max-width: 500px) {
    > svg {
      position: absolute;
      width: 22rem;
      height: 34rem;
      top: 78px;
      left: -10px;
      z-index: 0;
    }
  }
  @media (max-width: 375px) {
    > svg {
      position: absolute;
      width: 16rem;
      top: 53px;
      left: 2px;
      z-index: 0;
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;

  select {
    margin-left: 1rem;
    width: 20rem;
    background-color: transparent;
    border: 0.3rem solid red;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-weight: bold;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    > select {
      height: 5rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

`;
export const LeftSide = styled.div`
  width: 60%;

  h2 {
    font-size: 2rem;
    padding: 2rem;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const LeftContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 5rem);
  gap: 1rem;
  margin: 0 auto;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 5rem);
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }

`;
export const RightSide = styled.div`
  width: 40%;
  h2 {
    font-size: 2rem;
    padding: 2rem;
  }

  @media (max-width: 800px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 15rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  border-radius: 0.5rem;

  @media (max-width: 320px) {
    width: 100%;
  }

`;
export const CardTitle = styled.span`
  font-size: 1.2rem;
`;
export const Quantidade = styled.strong``;

export const RightContent = styled.div`
  width: 100%;
`;
export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 2px solid #ccc;
  border-radius: .5rem;
  padding: 1rem;

  &.header {
    border: none;
  }

  & + & {
    margin-top: 1rem;
  }

  @media (max-width: 500px) {
    width: 90%;
    font-size: 1.4rem;
  }

  @media (max-width: 320px) {
    width: 85%;
    font-size: 1.2rem;
  }
`;

export const RowTitle = styled.div`
    width: 100%;
    height: 100%;
  text-align: center;
`;
export const RowQuantity = styled.div`
  display: flex;
  span {
    display: block;
    width: 50%;
  }

  span.ok {
      background-color: green;
      color: #fff;
      font-weight: bold;
    }

    span.erro {
      background-color: red;
      color: #fff;
      font-weight: bold;
    }

  span + span {
      border-left: 2px dashed #000;
    }
  text-align: center;
`;

export const Goal = styled.div`
  text-align: center;
`;
