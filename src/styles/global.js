import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }
  #root{
    max-width: 1020px;
    margin: 0 auto;

  }
  button {
    cursor: pointer;
  }
`;
