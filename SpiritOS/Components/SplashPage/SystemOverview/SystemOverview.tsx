import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'

interface Props {}
interface State {}

class SystemOverview extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.SystemOverview>
        OVERVIEW GOES HERE
      </__.SystemOverview>
    )
  }
}

export default SystemOverview;
