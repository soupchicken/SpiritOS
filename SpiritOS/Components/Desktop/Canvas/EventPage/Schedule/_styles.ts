import styled, { StyledFunction } from 'styled-components';
export default {
  Schedule:styled.div`
    border-top:1px solid rgba(0,0,0,.6);
    padding-bottom:.625rem;
  `,
  DayHeader:styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:1.9375rem;
    margin: .3125rem 0;
    border-bottom:1px solid rgba(0,0,0,.06);
    border-top:1px solid rgba(0,0,0,.6);
    &:first-of-type { border-top:none; margin-top: 0 }
  `,
  Day:styled.div`
    width:3rem;
    margin-left:.125rem;
    text-align:center;
    font-weight:700;
    font-size:.875rem;
  `,
  Date:styled.div`
    font-size:.875rem;
  `,
  // Timezone:styled.div``,
  Entry:styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:1.625rem;
  `,
  Time:styled.div`
    width:3rem;
    margin-left:.125rem;
    text-align:center;
    font-size:.75rem;
    opacity:.7;
  `,
  Text:styled.div`
    font-weight:700;
  `
}
