import styled from 'styled-components';

export default {
  App: styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    background:#24292B;
    div, img, span, a, p {
      box-sizing:border-box;
      &::-webkit-scrollbar { display: none }
    }
  `,
  MobileApp: styled.div`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    overflow: hidden;
    background:#24292B;
  `
}
