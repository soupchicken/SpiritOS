import styled from 'styled-components';

export default {
  Desktop: styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    color:white;
    font-weight: 400;
    overflow: hidden;
    background:${p => p.theme.canvasBG };
  `,
  Board: styled.div`
    flex:1;
    display:flex;
    flex-direction:column
  `
}
