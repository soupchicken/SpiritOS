import styled from 'styled-components';

export default {
  Cover: styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:linear-gradient(to bottom, #FFFAF7 0%, #FFFAF7 100%);
    width:100%;
    height:100vh;
    min-height:42rem;
  `,
  CoverTop: styled.div`
    flex:4;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    opacity:0;
    transition: opacity 400ms ease-out;
  `,
  Logo: styled.img`
    width:32rem;
    align-self:center;
  `,
  Tagline: styled.h2`
    margin:.375rem 0 0;
    font-size:2rem;
    font-weight:400;
    text-align:center;
    color:black;
  `,
  CoverBottom: styled.div`
    display:flex;
    flex:7;
  `,
  WebWrap: styled.div`
    position:relative;
    display:flex;
    flex-wrap:nowrap;
    justify-content:center;
    height:100%;
    width:100%;
    max-width:80rem;
    padding-top:3rem;  
  `
}
