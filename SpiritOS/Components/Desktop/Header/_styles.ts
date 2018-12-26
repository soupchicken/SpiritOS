import styled, { StyledFunction } from 'styled-components';
import { Link, HTMLProps } from 'react-router-dom'

interface NavOptionProps { active:any, to:string }
const navOption: StyledFunction <React.HTMLProps <HTMLInputElement> & NavOptionProps> = styled(Link);
export default {
  Header:styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    min-height:2.75rem;
    max-height:2.75rem;
    border-top:.1875rem solid;
    border-top-color:${p => p.theme.headerBar};
    background:linear-gradient(to bottom, ${p => p.theme.headerGradient} 0%, transparent .3125rem);
    z-index:20;
    &:before {
      content:'';
      position:absolute;
      bottom:0;
      left:.375rem;
      height:1px;
      width:calc(100% - .75rem);
      background:rgba(0,0,0,.375);
    }
  `,
  Wrapper: styled.div `
    flex:1;
    display:flex;
    flex-direction:row;
    // max-width:90rem;
    z-index:15;
  `,
  HomeButton: styled.div`
    position:relative;
    display:flex;
    width:2rem;
    margin: 0 .5rem 0 1rem;
  `,
  BoardIcon: styled.img`
    align-self:center;
    width:100%;
  `,
  Navigation:styled.div`
    flex:1;
    display:flex;
    flex-direction:row;
    align-items:center;
  `,
  NavOption:styled(Link)`
    padding:0 .3125rem 0 .3875rem;
    color:white;
    text-decoration:none;
    font-size:.9375rem;
    opacity:.6;
    transition:opacity 150ms ease-out;
    &:hover { opacity:.8 };
    &[data-active="true"]{
      opacity:.9;
      cursor:default;
      &:hover { opacity:1 }
    }
  `,
  Logout: styled.div``,
}
