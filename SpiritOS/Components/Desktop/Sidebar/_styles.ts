import styled from 'styled-components';

export default {
  Sidebar: styled.div`
    display:flex;
    flex-direction:column;
    min-width: 2.625rem;
    max-width: 2.625rem;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    color:white;
    font-weight: 400;
    overflow: hidden;
    background:${p => p.theme.sidebar};
    border:1px solid rgba(0,0,0,.8);
    box-shadow:1px 1px 1px rgba(0,0,0,.52);
    z-index:5;
  `,
  DayOfWeek:styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:.75rem;
    margin-top:.5rem;
    font-size:.8125rem;
    opacity:.3;
    cursor:default;
  `,
  CurrentDate: styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:2.375rem;
    font-size:.875rem;
    font-weight:700;
    opacity:.3;
    cursor:default;
  `
}
