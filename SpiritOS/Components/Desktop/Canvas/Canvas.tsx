import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter} from 'react-router-dom';
import { Query } from 'react-apollo'
import __ from './_styles'
// import { example } from './_gql'

import { Agenda, EventPage } from 'SpiritOS/Components'
import eventData from './EventPage/events'

interface Props extends RouteComponentProps<any> {}
interface State {}

const event = {

}

class Canvas extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const { location:{ pathname, search }, match:{ params }} = this.props;
    const searchParams = new URLSearchParams( search );
    const { community } = params;
    let event;
    eventData.forEach( thisEvent => {
      if ( thisEvent.community === community && thisEvent.title === 'Canada Cup')
        event = thisEvent;
    })

    return (
      <__.Canvas>
        <__.Wrapper>
          <Agenda />
        </__.Wrapper>
      </__.Canvas>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Canvas ));
