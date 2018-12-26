import styled from 'styled-components';

export default {
  LoginForm: styled.form`
    position:relative;
    display:flex;
    align-self:center;
    height:calc(100% - .8125rem);
    padding-top:.1875rem;
    }
  `,
  TextInput: styled.input`
    padding: 0 .375rem;
    margin-right:.625rem;
    background:none;
    border:none;
    border-bottom:1px solid rgba(0,0,0,.25);
    color:white;
    line-height:1.875rem;
    font-family:'Open Sans', sans-serif;
    font-size:.875rem;
    font-weight:600;
    outline:none;
    opacity:.8;
    transition: border-color 150ms ease-out, opacity 150ms ease-out;
    &:hover, &:focus {
      opacity:1;
    }
    &:focus + div {
      width:100%;
      left:0;
    }
  `,
  Email: styled.div`
    display:flex;
    position:relative;
    height:100%;
    margin-right:.1875rem;
  `,
  Password: styled.div`
    display:flex;
    position:relative;
    height:100%;
    margin-right:.1875rem;
  `,
  FocusHighlight: styled.div`
    position:absolute;
    left:50%;
    bottom:0;
    width:0;
    height:1.875rem;
    border-bottom:1px solid ${p => p.theme.headerBar};
    background:linear-gradient(to top, ${p => p.theme.headerGradient} 0%, transparent 4px);
    transition: all 150ms ease-out;
  `,
  Login: styled.input`
    margin-right:.375rem;
    padding: 0 .75rem;
    background:transparent;
    border:1px solid rgba(0,0,0,.25);
    border-radius:3px;
    color:rgba(255,255,255,.6);
    font-size:.75rem;
    cursor:pointer;
    transition: all 150ms ease-out;
    outline:none;
    &:hover, &:focus {
      background:rgba(255,255,255,.02);
      color:rgba(255,255,255,.9);
    }
  `,
}
