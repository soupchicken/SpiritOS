import styled from 'styled-components';

export default {
  Heroes: styled.div`
    position:relative;
    width:100%;
    height:100vh;
    min-height:52rem;
    background:#00C96F;
    border-top: .8125rem solid #0D3826;
  `,
  Header: styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    width:100%;
    padding:0 3rem;
    margin-top:4rem;
    color:white;
  `,
  Title:styled.h2`
    position:relative;
    float:left;
    width:100%;
    margin:0;
    text-align:center;
    font-size:3.25rem;
    font-weight:800;
  `,
  Subtitle: styled.h4`
    position:relative;
    float:left;
    width:100%;
    margin:.625rem 0 0;
    text-align:center;
    font-size:1.5rem;
    font-weight:400;
  `,
  Directory: styled.div`
    position:relative;
    display:flex;
    height:35rem;
    width:56rem;
    min-width:56rem;
    max-width:100%;
    margin: 3rem auto;
    padding:.875rem;
    background:#203834;
    border-radius:.1875rem;
    z-index:1;
  `,
  HeroColumn:styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    margin-right:.25rem;
    &:last-of-type { margin-right:0 }
  `,
  Type:styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:2.75rem;
    padding:0 .5625rem;
    background:#FEFFF5;
    border-radius:.125rem;
    font-size:1.1875rem;
    font-weight:600;
  `,
  HeroesBG:styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    width:100%;
    bottom:0;
    left:0;
    svg {
      position:absolute;
      bottom:-7rem;
      left:calc(50% - 125rem);
      width:241.25rem;
    }
  `,
}
