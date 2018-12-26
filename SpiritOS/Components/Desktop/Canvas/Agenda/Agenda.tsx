import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { Query } from 'react-apollo'
import __ from './_styles'
// import { example } from './_gql'

interface Props extends RouteComponentProps<any> {}
interface State {}

class Agenda extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  __Events = ( events ) => {
    events.map( event => {

    })
  }

  render() {
    const { __Events } = this;
    const { match:{ params }} = this.props;
    const { community } = params;
    return (
      <__.Agenda>
        <__.Day>
          <__.Header>This Weekend</__.Header>
          <__.Event>
            <__.EventName>Canada Cup</__.EventName>
            <__.EventBanner src="https://i.imgur.com/ab8TaVi.png"/>
          </__.Event>
          <__.Event>
            <__.EventName>Red Bull Battle Grounds</__.EventName>
            <__.EventBanner src="https://s3-us-west-1.amazonaws.com/autokal-assets/event/271/banner-1146x260-fad404536fd4712add7401fd309eae24621aeaef437e7fdfd153ecf0710697761950d4ca10275342565da6de4e94734d.jpg"/>
          </__.Event>
        </__.Day>
        <__.Day>
          <__.Header>Next Week</__.Header>
          <__.Event>
            <__.EventName>Never Give Up</__.EventName>
            <__.EventBanner src="https://i.imgur.com/ojI4EKt.jpg"/>
          </__.Event>
        </__.Day>
      </__.Agenda>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Agenda ));
