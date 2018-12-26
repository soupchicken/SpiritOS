import styled, { StyledFunction } from 'styled-components';
import { NavLink } from 'react-router-dom'

interface CommunityNavOptionProps { isActive:boolean, to:any, theme:any }
export default {
  Canvas: styled.div`
    position:relative;
    flex:1;
    display:flex;
    flex-direction:row;
    justify-content:center;
  `,
  Wrapper: styled.div `
    flex:1;
    display:flex;
    flex-direction:row;
    // max-width:90rem;
  `,
  Community: styled.div`
    flex:4;
    display:flex;
    flex-direction:column;
    @media( max-width:70rem ){ display:none }
  `,
  Navigation: styled.div`
    display:flex;
    flex-direction:row;
    position:relative;
    height:2.375rem;
    background:rgba(0,0,0,.22);
    border: solid rgba(0,0,0,.5);
    border-width: 1px 0;
  `,
  NavOption: styled(NavLink)`
    display:flex;
    align-items:center;
    height:calc(100% + 1px);
    padding:0 .8125rem;
    margin-left:-1px;
    border:solid black;
    border-width: 0 1px;
    text-decoration:none;
    font-size:.8125rem;
    font-weight:300;
    transition: color 150ms ease-out;
    background:rgba(255,255,255,.02);
    color:rgba(255,255,255,.5);
    cursor:pointer;
    &[data-active="true"] {
      background:${p => p.theme.canvasBG};
      color:white;
      cursor:default;
    }
    &:hover {
      color:white;
    }
  `,
  NavIcon: styled.img`
    height:calc(100% - .5rem);
  `,
  Comments:styled.div`
    flex:1;
    margin: .4375rem .4375rem .4375rem 0;
  `,

}
