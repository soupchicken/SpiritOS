import styled from 'styled-components';

export default {
  Tools: styled.div`
    width:100%;
    height:105vh;
    background:white;
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
  Body: styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    width:78rem;
    max-width:100%;
    margin: 0 auto;
    padding:0 4rem;
  `,
  Labels:styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    margin: 2rem 0;
  `,
  Label:styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
    margin-top:1.125rem;
    text-align:center;
    &:nth-of-type(2){
      margin-top:0
    }
  `,
  LabelTitle:styled.div`
    margin:.375rem 0;
    font-size:1.75rem;
    font-weight:800;
  `,
  LabelDescription:styled.div`
    font-size:1.25rem;
  `,
  AppScreens:styled.img`
    align-self:center;
    width:100%;
  `,
}
