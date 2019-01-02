import styled from 'styled-components';

export default {
  Roadmap: styled.div`
    position:relative;
    width:100%;
    height:100vh;
    min-height:108rem;
    background:#30302F;
  `,
  RoadmapTransition:styled.div`
    position:absolute;
    display:flex;
    justify-content:center;
    width:100%;
    top:0;
    left:0;
    svg {
      position:absolute;
      top:-7rem;
      left:calc(50% - 125rem);
      width:241.25rem;
    }
  `,
}
