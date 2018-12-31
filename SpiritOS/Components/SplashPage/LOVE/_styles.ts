import styled from 'styled-components';

export default {
  LOVE: styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    width:100%;
    height:48rem;
    background:url('images/blockchain-bg.png') repeat;
  `,
  HeaderImage: styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    width:100%;
    top:0;
    left:0;
    svg {
      position:absolute;
      top:-5.375rem;
      left:calc(50% - 125rem);
      width:241.25rem;
    }
  `,
  Header: styled.div`
    display:flex;
    flex-direction:row;
    align-self:center;
    width:60rem;
    padding:0 3rem;
    max-width:100%;
    margin-top:3.125rem;
    z-index:1;
  `,
  LOVEButton: styled.img`
    width:10.25rem;
    height:10.25rem;
    z-index:1;
  `,
  HeaderText: styled.div`
    flex:1;
    height:9.375rem;
    margin: .5rem 0 0 -5rem;
    padding:1.3125rem 0 0 5.875rem;
    background:#2E3030;
    border-bottom:6px solid #FF2F1C; 
    color:white;
  `,
  Title:styled.h2`
    position:relative;
    float:left;
    width:100%;
    margin:0;
    font-size:3.375rem;
    font-weight:800;
  `,
  Subtitle: styled.h4`
    position:relative;
    float:left;
    width:100%;
    margin:.375rem 0 0;
    font-size:1.625rem;
    color:white;
  `,
  FeatureList: styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    width:58rem;
    padding:0 4rem;
    max-width:100%;
    margin-top:2.5rem;
    z-index:1;
  `,
  Feature:styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:.875rem;
  `,
  FeatureIcon:styled.img`
    width:7.25rem;
    height:7.25rem;
    z-index:1;
  `,
  FeatureText:styled.div`
    flex:1;
    height:6.375rem;
    margin: .5rem 0 0 -3rem;
    padding:.4375rem 0 0 3.875rem;
    background:#2E3030;
    border-bottom:6px solid #FF2F1C; 
    color:white;
  `,
  FeatureLabel:styled.div`
    position:relative;
    float:left;
    width:100%;
    margin:0;
    font-size:2.25rem;
    font-weight:800;
  `,
  FeatureDescription:styled.div`
    position:relative;
    float:left;
    width:100%;
    margin:.25rem 0 0;
    font-size:1.25rem;
    color:white;
  `,
}
