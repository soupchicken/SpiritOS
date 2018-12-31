import styled from 'styled-components';

export default {
  CommunityWeb: styled.div`
    display:flex;
    position:relative;
    padding-top:2rem;
    margin:.5rem .5rem 0;
    opacity:0;
    transition:
      opacity 400ms ease-out,
      margin-top 200ms ease-out;
  `,
  Web: styled.object`
    float:left;
  `,
}
