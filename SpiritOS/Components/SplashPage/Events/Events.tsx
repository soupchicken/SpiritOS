import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'

interface Props {}
interface State {}

class Events extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.Events>
        <__.Header>
          <__.Title>Back Community Events</__.Title>
          <__.Subtitle>Provide the means for your community to gather</__.Subtitle>
        </__.Header>
      </__.Events>
    )
  }
}

export default Events;
