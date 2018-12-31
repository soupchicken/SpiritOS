import styled from 'styled-components';

export default {
  Governance: styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    width:100%;
    height:50rem;
    background:#009DFF;
  `,
  SectionDivider:styled.div`
    position:absolute;
    top:-.25rem;
    left:calc(50% - 1790px);
    pointer-events:none;
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
    font-size:3.875rem;
    font-weight:800;
    color:white;
  `,
  Subtitle: styled.h4`
    position:relative;
    float:left;
    width:100%;
    margin:.625rem 0 0;
    text-align:center;
    font-size:1.75rem;
    font-weight:400;
    color:white;
  `,
  Body: styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    flex:1;
    margin-top:2.5rem;
    background:rgba(255,255,255,.08);
  `,
  BodyTitle: styled.div`
    align-self:center;
    margin: 1.875rem 0;
    color:white;
    font-size:1.75rem;
  `,
  Blocks:styled.div`
    display:flex;
    flex-wrap:nowrap;
    position:relative;
    flex-direction:row;
    justify-content:center;
    height:23.125rem;
  `,
  EmptyBlock:styled.div``,
  Block:styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    min-width:18rem;
    height:100%;
    margin: 0 1.3125rem;
    opacity:.3;
    &:nth-of-type(4), &:nth-of-type(5), &:nth-of-type(6){
      opacity:1;
    }
    &:nth-of-type(6){
      min-width:20rem;
      div:first-of-type{
        padding:0 1.625rem;
      }
      &:before {
        opacity:.3;
      }
    }
    &:before {
      content:'';
      position:absolute;
      top:2.5rem;
      left:100%;
      width:2.625rem;
      height:100%;
      background:url('/images/governance-block-divider.svg') no-repeat;
      background-size: 100%;
    }
  `,
  BlockBody:styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    flex:1;
    margin-bottom:1.5rem;
    padding: 0 3.5rem;
    background:rgba(255,255,255,.18);
    border-radius:.1875rem;
  `,
  Contract:styled.img`
    width:100%;
  `,
  BlockLabel:styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:5rem;
    padding: 0 .75rem;
    background:rgba(255,255,255,.18);
    border-radius:.1875rem;
    color:white;
    line-height:1.75rem;
    font-size:1.25rem;
    text-align:center;
  `,
}
