import styled from 'styled-components';

export default {
  Events: styled.div`
    width:100%;
    height:100vh;
    background:white;
    border-top:1px solid black;
  `,
  Header: styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    width:100%;
    padding:0 3rem;
    margin-top:5.75rem;
    z-index:1;
  `,
  Title:styled.h2`
    position:relative;
    float:left;
    width:100%;
    margin:0;
    text-align:center;
    font-size:3.625rem;
    font-weight:800;
  `,
  Subtitle: styled.h4`
    position:relative;
    float:left;
    width:100%;
    margin:.625rem 0 0;
    text-align:center;
    font-size:1.75rem;
    font-weight:400;
  `,
}
