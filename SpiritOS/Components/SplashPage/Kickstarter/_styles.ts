import styled from 'styled-components';

export default {
  Kickstarter: styled.div`
    width:100%;
    min-height:63rem;
    background:white;
  `,
  Header: styled.div`
    display:flex;
    flex-direction:column;
    align-self:center;
    width:100%;
    padding:0 3rem;
    margin-top:7rem;
  `,
  Title:styled.h2`
    position:relative;
    float:left;
    width:100%;
    margin:0;
    text-align:center;
    font-size:3.25rem;
    font-weight:800;
  `,
  Subtitle: styled.h4`
    position:relative;
    float:left;
    width:100%;
    margin:.625rem 0 0;
    text-align:center;
    font-size:1.5rem;
    font-weight:400;
  `,
  Proposal:styled.div`
    display:flex;
    width:56rem;
    margin: 4.25rem auto 0;
  `,
  Body:styled.div`
    flex:5;
    padding-right:1rem;
  `,
  Sidebar:styled.div`
    flex:3;
    padding-left:1rem;
    border-left:1px solid rgba(0,0,0,.07);
  `,
  Video:styled.div`
    position:relative;
  `,
  Info:styled.div`
    position:absolute;
    top:-1rem;
    left:-.625rem;
    width:100%;
    color:white;
  `,
  Label:styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:4.125rem;
    background:rgba(0,0,0,.94);
    padding:0 1.25rem;
    font-size:2rem;
    font-weight:800;
  `,
  Text:styled.div`
    margin-top:2px;
    background:rgba(0,0,0,.94);
    padding:.75rem 1.25rem;
    line-height:1.8125rem;
    font-size:1.25rem;
  `,
  Preview:styled.img`
    width:100%;
  `,
  Team:styled.div`
    position:relative;
  `,
  TeamHeader:styled.div`
    margin:1.3125rem 0 .4375rem;
    font-size:1.875rem;
    font-weight:800;
  `,
  TeamMembers:styled.div`
    position:relative;
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
  `,
  TeamMember:styled.div`
    position:relative;
    display:flex;
    align-items:center;
    width:33%;
    margin-bottom:.3125rem;
  `,
  TeamMemberPortrait:styled.img`
    width:28%;
    margin-top:3%;
    margin-right:7%;
    border-radius:2rem;
  `,
  TeamMemberBio:styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    margin-top:1rem;
    margin-right:10%;  
  `,
  TeamMemberBioText:styled.div`
    height:1.5rem;
    margin-bottom:.4375rem;
    background:#EBE6E6;
    border-radius:.125rem;
  `,
  Tracker:styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background:#FF271C;
    padding: .875rem 1rem;
    border:1px solid rgba(0,0,0,.4);
    border-radius:.25rem;
    box-shadow:1px 1px 1px rgba(0,0,0,.4);
    color:white;
  `,
  Progress:styled.div`
    position:relative;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:2rem;
    font-size:1.25rem;
    svg {
      width:1.875rem;
      height:100%;
      margin-top:.375rem;
    }
  `,
  Raised:styled.div`
    margin:0 .375rem 0 .5rem;
    font-weight:600;
    font-size:1.375rem;
  `,
  Target:styled.div`
    margin:0 .375rem;
    font-weight:600;
  `,
  ProgressBar:styled.div`
    height:1.875rem;
    width:100%;
    margin:.625rem 0 .875rem;
    background:rgba(0,0,0,.17);
  `,
  ProgressDetails:styled.div``,
  SidebarText:styled.div`
    display:flex;
    flex-direction:column;
    margin-top:.125rem;
  `,
  TextRow:styled.div`
    height:2rem;
    margin-top:.5rem;
    background:#EBE6E6;
    border-radius:.125rem;
  `,
  Contributors:styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding-top:.75rem;
  `,
  ContributorHeader:styled.div`
    margin:.4375rem 0;
    font-size:1.625rem;
    font-weight:800;
  `,
  Winners:styled.div`
    display:flex;
    height:20rem;
  `,
  FirstPlace:styled.div`
    flex:5;
    margin-right:.75rem;
  `,
  FirstPlaceTrophy:styled.img`
    width:46%;
    margin: 0 2%;
  `,
  FirstPlacePortrait:styled.img`
    width:40%;
    margin:0 5% .625rem;
    border-radius:2rem;
  `,
  FirstPlaceBio:styled.div`
    width:100%;
  `,
  FirstPlaceBioText:styled.div`
    height:1.75rem;
    margin-bottom:.4375rem;
    background:#EBE6E6;
    border-radius:.125rem;
  `,
  RunnersUp:styled.div`
    flex:7;
    display:flex;
    flex-direction:column;
    margin-left:.3125rem;
  `,
  RunnerUp:styled.div`
    display:flex;
    align-items:center;
    height:4.375rem;
    &:first-of-type { margin-top:.625rem }
  `,
  RunnerUpTrophy:styled.img`
    width:25%;
  `,
  RunnerUpPortrait:styled.img`
    width:23%;
    margin: 0 1%;
    border-radius:2rem;
  `,
  RunnerUpBio:styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    margin:.75rem .5rem 0;
  `,
  RunnerUpBioText:styled.div`
    height:1.375rem;
    margin-bottom:.375rem;
    background:#EBE6E6;
    border-radius:.125rem;
  `,
}
