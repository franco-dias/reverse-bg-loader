import styled from 'styled-components';

const Container = styled.div`
  width: 240px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid red;

  & > div {
    position: absolute;
    height: 40px;
  }

  .white {
    background: white; 
    width: 100%; 
    z-index:1
  }

  .black {
    background: black; 
    width: ${({ progress }) => `${progress}%`};
    transition: width .3s linear;
    max-width: 100%;
    z-index: 2
  }

  .mask {
    z-index: 4;
    width: 100%; 
    background-color: red;
    mix-blend-mode: screen;
  }

  span {
    z-index: 3;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px;
    position:absolute; 
    font-family: Arial, Helvetica; 
    mix-blend-mode: difference;
  }
`;

export { Container };