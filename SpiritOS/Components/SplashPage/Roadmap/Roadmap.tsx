import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'
import ReactSVG from 'react-svg'

interface Props {}
interface State {}

class Roadmap extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.Roadmap>
        <__.RoadmapTransition>
          <ReactSVG src={`images/roadmap-header.svg`} />
        </__.RoadmapTransition>
        OVERVIEW GOES HERE
      </__.Roadmap>
    )
  }
}

export default Roadmap;
