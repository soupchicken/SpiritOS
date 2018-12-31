import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'

interface Props {}
interface State {}

class ValueProposition extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.ValueProposition>
        OVERVIEW GOES HERE
      </__.ValueProposition>
    )
  }
}

export default ValueProposition;
