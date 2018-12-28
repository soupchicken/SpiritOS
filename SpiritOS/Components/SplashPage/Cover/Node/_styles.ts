import styled from 'styled-components';

export default {
  Node: styled.div`
    position:absolute;
    width:0;
    height:auto;
    opacity:0;
    transition: 
      opacity 100ms ease-out, 
      width 400ms ease-out,
      margin-top 400ms ease-out,
      margin-left 400ms ease-out;
    svg { height:auto; width:100% }
  `,
  PortraitWrap:styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    top:10%;
    left:12%;
    width:76%;
    height:74%;
    background:white;
    border-radius:10rem;
    overflow:hidden;
  `,
  Portrait: styled.img`
    align-self:center;
    margin-top:12%;
    height:80%;
    z-index:1;
  `,
  PortraitFrame:styled.div`
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:100%;
    background:transparent;
    border:.3125rem solid black;
    border-radius:10rem;
    z-index:2;
  `,
}
