import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { Query } from 'react-apollo'
import __ from './_styles'
import each from 'lodash/each'
import ordinal from 'ordinal'
// import { example } from './_gql'

type Player = {}

import { Schedule } from 'SpiritOS/Components'

import playerData from './playerList';
import eventData from './events'

interface Props extends RouteComponentProps<any> { event:any }
interface State {}

class EventPage extends React.Component<Props, State> {

  eventPage = null;
  constructor(props){
    super(props);
    this.state = {
    }
  }

  __Teams = ( teams ) => {
    const { event, match:{ params }} = this.props;
    return (
      <__.Teams>
          { teams.map(( team, position ) => (
            team ?
              <__.Team key={`${event.id}-${team}-${position}`} position={ position } src={ team.logo } /> : null
          ))}
      </__.Teams>
    )
  }

  __Participants = ( participants, playerList ) => {
    const { __Teams } = this;
    const { match:{ params }} = this.props;
    const { community } = params;
    return (
      <__.Participants>
      { participants.map( participant => {
          const player = playerList[participant];
          const { name } = playerList[participant];
          {/* const teams = organizations.map( team => (
            <__.Team>
              <__.Logo src={ team.logo } />
            </__.Team>
          )) */}

          const details = JSON.parse( player.details )
          const teams = JSON.parse( player.teams )
          const { main, region } = details;
          const rank = parseInt( details.rank );

          return (
            <__.Participant key={ name }>
              { __Teams( teams )}
              <__.Name>{ name }</__.Name>
              <__.Main>
                <__.Portrait src={`/images/portraits/${community}/${main ? main.join('_').replace('.','_').replace('-','_').toLowerCase() : 'unknown' }.jpg`} />
              </__.Main>
              <__.Rank>{ ordinal( rank )}</__.Rank>
              <__.Region>
                <__.Flag src={`/images/flags/${region}.png`} />
              </__.Region>
            </__.Participant>
          )
      })}
      </__.Participants>
    )
  }

  render() {
    const { __Participants } = this;
    const { event, match:{ params }} = this.props;
    const { community } = params;

    const streamInfo = JSON.parse(event.streams);
    const streams = streamInfo.map( stream => (
      <__.Stream href={`https://www.twitch.tv/starcraft`} target="_blank" key={`${event.id}-${stream.channel}`}>
        <__.Provider src={`/images/providers/${stream.provider}.svg`} />
        <__.Channel>{ stream.channel }</__.Channel>
      </__.Stream>
    ))

    const location = JSON.parse( event.location );
    const { address, city, region } = location;
     const __Location = (
       <__.Location className="icon-location" href={`https://www.google.com/maps/search/${address}`} target="_blank" >
         <__.City>{ city }</__.City>
         <__.State>{ region }</__.State>
       </__.Location>
     );


     const schedule = JSON.parse( event.schedule );

    const playerList = {};
    each( playerData, player => {
        if ( player.community === community )
          playerList[ player.name ] = player
        })

    const { id,title, banner, description, participants } = event;

    return (
      <__.EventPage key={id} innerRef={ref => this.eventPage = ref}>
        <__.Header>
          <__.Title>{ event.title }</__.Title>
          <__.Banner src={ event.banner } />
        </__.Header>
        <__.Body >
          <__.EventTitle>{ event.title }</__.EventTitle>
          <__.Description>
            { event.description }
          </__.Description>
          <__.Content>
            <__.Details>
              <__.Trailer src="https://i.ytimg.com/vi/RC-vbmMP9-I/hqdefault.jpg" />
              <__.EventInfo>
                { streams }
                { __Location }
                <Schedule eventId={ event.id } schedule={ schedule }/>
              </__.EventInfo>
            </__.Details>
            <__.MainContent>
              <__.ColumnLabels>
                <__.TeamLabel>Team</__.TeamLabel>
                <__.TagLabel>Tag</__.TagLabel>
                <__.MainLabel>Main</__.MainLabel>
                <__.RankLabel>CCR</__.RankLabel>
                <__.RegionLabel>Region</__.RegionLabel>
              </__.ColumnLabels>
              <__.PlayerList>
                { __Participants( JSON.parse(participants), playerList )}
              </__.PlayerList>
            </__.MainContent>
          </__.Content>
        </__.Body>
      </__.EventPage>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( EventPage ));
