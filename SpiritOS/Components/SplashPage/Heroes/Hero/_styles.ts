import styled from 'styled-components';

export default {
  Hero:styled.div`
    display:flex;
    height:7.5rem;
    margin-top:1px;
    background:#FEFFF5;
    border-radius:.125rem;
  `,
  PortraitWrap:styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:5.625rem;
    height:100%;
    padding:0 .9375rem;
    &:before {
      content:'';
      position:absolute;
      top:1rem;
      right:0;
      height:calc(100% - 2rem);
      width:1px;
      background:rgba(0,0,0,.07);
    }
  `,
  Portrait:styled.img`
    width:100%;
    border-bottom-right-radius:2rem;
    border-bottom-left-radius:2rem;
  `,
  Info:styled.div`
    flex:1;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
  `,
  Name:styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    height:2.75rem;
    padding:0 .8125rem;
    font-size:1.375rem;
    font-weight:800;
  `,
  Icons:styled.div`
    position:relative;
    margin-top:.5rem;
    margin-left:3.3125rem;
    z-index:3;
  `,
  Icon:styled.img`
    position:absolute;
    width:1.75rem;
  `,
  Contribution:styled.div`
    position:absolute;
    width:100%;
    height:4rem;
    bottom:0;
    padding:0 .5rem;
    div.full-bar, div.empty-bar, div.love {
      position:absolute;
    }
    div.full-bar, div.empty-bar {
      svg {
        width:11rem;
      }
    }
    div.love {
      z-index:2;
      svg {
        width:2rem;
        height:3.375rem;
        margin:.1875rem 0 0 .25rem;
      }
    }
    div.full-bar {
      width:3rem;
      transition:width 400ms ease-out;
      overflow:hidden;
      z-index:1;
    }
  `,
}
