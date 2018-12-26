import styled, { StyledFunction } from 'styled-components';

interface CommunityOptionProps { isActive:boolean }
const communityOption: StyledFunction <React.HTMLProps <HTMLInputElement> & CommunityOptionProps> = styled.div;
export default {
  CommunityOption: communityOption`
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    height:2.4375rem;
    margin-top:-1px;
    border:1px solid rgba(0,0,0,.7);
    border-right:none; border-left:none;
    transition:background 150ms ease-out;
    ${( p:CommunityOptionProps ) =>
      p.isActive ?
        `background:rgba(255,255,255,.04);`
        :
        `&:hover { background:rgba(255,255,255,.02)};
         cursor:pointer;`
    }
  `,
  CommunityIcon: styled.img`
    width:calc(100% - .625rem);
  `
}
