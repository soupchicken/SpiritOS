import styled, { StyledFunction } from 'styled-components';
import { Link } from 'react-router-dom';
interface HeaderOffsetProps { headerOffset:number }
interface TeamProps { position:number }
const eventPage: StyledFunction <React.HTMLProps <HTMLInputElement> & HeaderOffsetProps> = styled.div;
const header: StyledFunction <React.HTMLProps <HTMLInputElement> & HeaderOffsetProps> = styled.div;
const body: StyledFunction <React.HTMLProps <HTMLInputElement> & HeaderOffsetProps> = styled.div;
const team: StyledFunction <React.HTMLProps <HTMLInputElement> & TeamProps> = styled.img;
export default {
  EventPage: styled.div`
    flex:5;
    position:relative;
    display:flex;
    flex-direction:column;
    height:calc(100vh - 2.625rem);
    width:100%;
    // min-width:35rem;
    // max-width:35rem;
    overflow:hidden;
    text-shadow:1px 1px 1px black;
    @media(max-width:70rem){
      min-width:initial;
      max-width:100%;
    }
  `,
  Header: styled.div`
    position:relative;
    display:flex;
    min-height:6.75rem;
    max-height:6.75rem;
    border:2px solid rgba(0,0,0,.9);
    border-top-width:1px;
    border-bottom-width:1px;
    overflow:hidden;
    z-index:10;
    transition:box-shadow 1000ms ease-out;
    @media(max-width:70rem){
      height:initial;
    }
    &:after {
      content:'';
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      background:linear-gradient(to left, rgba(255,255,255,.09) 0%,  rgba(255,255,255,.04) 32%,  rgba(255,255,255,.07) 74%, transparent 100%);
      box-shadow:3px 3px 10px rgba(0,0,0,0.4), inset 0 0 2.25rem rgba(255,255,255, 0.12);
    }
  `,
  EventTitle: styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    min-height:2.625rem;
    padding: 0 .875rem;
    background:rgba(255,255,255,.09);
    border:2px solid rgba(0,0,0,.9);
    border-top:none;
    border-bottom: 1px solid rgba(0,0,0,.4);
    font-family:'Open Sans', 'Lato', sans-serif;
    font-size:1.4375rem;
    font-weight:700;
  `,
  Title:styled.div`
    display:none;
    position:absolute;
    bottom:0;
    width:100%;
    padding:1.75rem .8125rem .6125rem;
    background:linear-gradient(to top, rgba(0, 0, 0, 0.45) 40%, transparent);
    font-size:2rem;
    font-weight:700;
    text-shadow:2px 2px 4px rgba(0, 0, 0, 0.8);
    z-index:1;
  `,
  Banner:styled.img`
    position:relative;
    bottom:0;
    min-height:8.625rem;
    width:100%;
    @media(max-width:70rem){
      width:100%;
      min-height:100%;
    }
  `,
  Body: styled.div`
    display:flex;
    flex-direction:column;

    z-index:5;
  `,
  Description: styled.div`
    padding:.3125rem .875rem .5rem;
    background:rgba(255,255,255,.09);
    border:2px solid rgba(0,0,0,.9);
    border-top:none;
    border-bottom-width:1px;
    line-height:1.25rem;
    font-size:.8125rem;
  `,
  Content: styled.div`
    display:flex;
    flex-direction:row;
  `,
  Details: styled.div`
    flex:6;
    position:relative;
    // min-width:14.125rem;
    // max-width:14.125rem;
    padding-bottom:1.3125rem;
    overflow:auto;
  `,
  Trailer: styled.img`
    position:relative;
    float:left;
    width:100%;
    border-left:2px solid black;
    border-right:1px solid black;
    overflow:hidden;
  `,
  MainContent: styled.div`
    flex:11;
    display:flex;
    flex-direction:column;
  `,
  ColumnLabels: styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:1.3125rem;
    background:${p => p.theme.personaDetails};
    border:1px solid rgba(0,0,0,0.9);
    border-top-width:0;
    border-right-width:2px;
    border-left-width:2px;
    div {
      font-size:.5625rem;
      opacity:.5;
    }
  `,
  TeamLabel: styled.div`
    width:3.3125rem;
    text-align:center;
  `,
  TagLabel: styled.div`
    flex:1;
    text-align:left;
    margin-left:.0925rem;
  `,
  MainLabel: styled.div`
    width:5.375rem;
    text-align:center;
  `,
  RankLabel: styled.div`
    width:2.8125rem;
    text-align:center;
  `,
  RegionLabel: styled.div`
    width:3.25rem;
    text-align:center;
  `,
  PlayerList: styled.div`
    flex:1;
    overflow:auto;
  `,
  Participants: styled.div`
    width:100%;
    padding-bottom:1.25rem;
  `,
  Participant: styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    align-items:center;
    height:2.25rem;
    margin-top:-1px;
    background:${p => p.theme.personaBG};
    border:1px solid rgba(0,0,0,.75);
    border-right-width:2px;
    border-left-width:2px;
    border-radius:4px;
    &:last-of-type {
      border-bottom-width:2px
    }
    &:before {
      content:'';
      position:absolute;
      top:0;
      height:1px;
      width:100%;
      background:rgba(255,255,255,.08);
      z-index:10;
    }
  `,
  Teams: styled.div`
    height:100%;
    width:3.125rem;
    margin-left:.3125rem;
    z-index:5;
  `,
  Team: team`
    height:100%;
    ${( p:TeamProps ) =>
      ( `display:${p.position === 0 ? 'inline' : 'none' }` )
    }
  `,
  Logo: styled.img`
    height:100%;
  `,
  Name: styled.div`
    flex:1;
    z-index:5;
    font-weight:700;
    text-shadow:2px 2px 4px rgba(0,0,0,0.8);
  `,
  Main: styled.div`
    position:relative;
    width:0;
    height:100%;
  `,
  Portrait: styled.img`
    position:absolute;
    right:0;
    height:100%;
  `,
  Rank: styled.div`
    display:flex;
    width:2.875rem;
    height:100%;
    align-items:center;
    justify-content:center;
    background:${p => p.theme.personaDetails};
    border-left:1px solid rgba(0,0,0,.45);
    font-size:.75rem;
    font-weight:700;
  `,
  Region: styled.div`
    display:flex;
    width:3.25rem;
    height:100%;
    align-items:center;
    justify-content:center;
    background:${p => p.theme.personaDetails};
    border-left:1px solid rgba(0,0,0,.15);
    border-top-right-radius:2px;
    border-bottom-right-radius:2px;
    font-size:.5rem;
    font-weight:700;
  `,
  Flag: styled.img`
    width:calc(100% - 1.5rem);
    border-radius:2px;
  `,
  EventInfo: styled.div`
    float:left;
    width:100%;
    background:rgba(255,255,255,.09);
    border:2px solid rgba(0,0,0,.9);
    border-right-width:1px;
    &:last-of-type {
      border-bottom-left-radius:4px;
    }
    line-height:1.3125rem;
    font-size:.875rem;
  `,
  Stream: styled.a`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:2.3125rem;
    margin-top:-1px;
    padding: 0 .625rem;
    border:1px solid rgba(0,0,0,.1);
    border-left:none; border-right:none;
    cursor:pointer;
    text-decoration:none;
    color:white;
    transition: background 100ms ease-out;
    &:last-of-type { border-bottom:none }
    &:hover {
      background:rgba(255,255,255,.02);
    }
  `,
  Provider: styled.img`
    width:1.625rem;
    margin-left:.1875rem;
    margin-right:.625rem;
  `,
  Channel: styled.div`
    flex:1;
    font-weight:700;
  `,
  Location: styled.a`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:2.3125rem;
    margin-top:-1px;
    padding: 0 .625rem 0 3rem;
    border:1px solid rgba(0,0,0,.1);
    border-left:none; border-right:none;
    cursor:pointer;
    text-decoration:none;
    color:white;
    transition: background 100ms ease-out;
    &:last-of-type { border-bottom:none }
    &:hover {
      background:rgba(255,255,255,.02);
    }
    &:before {
      position: absolute;
      left:1rem;
      font-size:1.1875rem
    }
  `,
  City: styled.div`
    font-weight:700;
  `,
  State: styled.div`
    flex:1;
    // font-weight:700;
    margin-left:.3125rem;
    opacity:.4;
  `,
}
