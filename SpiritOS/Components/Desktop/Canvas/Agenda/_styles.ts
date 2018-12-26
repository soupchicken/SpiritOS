import styled from 'styled-components';

export default {
  Agenda: styled.div`
    position:relative;
    width:11.5rem;
    overflow:auto;
  `,
  Day: styled.div`
    display:flex;
    flex-direction:column;
    margin:.3125rem .9375rem 0 .875rem;
    border-top:1px solid rgba(0,0,0,.15);
    &:first-of-type {
      margin-top:.375rem;
      border-top:none;
    }
  `,
  Header: styled.div`
    margin:.375rem 0 .4375rem;
    padding:0 .25rem;
    text-align:center;
    font-size:.8125rem;
  `,
  Event: styled.div`
    position:relative;
    height:2.375rem;
    margin-top:.1875rem;
    background:rgba(0, 0, 0, 0.1);
  `,
  EventName: styled.div`
    position:absolute;
    bottom:0;
    padding: 0 .3125rem;
    line-height:1.3125rem;
    font-size:.75rem;
    background:rgba(0,0,0,.75);
    border-bottom-left-radius:4px;
  `,
  EventBanner: styled.img`
    height:100%;
    width:100%;
    border:1px solid #000;
    border-radius:3px;
  `
}
