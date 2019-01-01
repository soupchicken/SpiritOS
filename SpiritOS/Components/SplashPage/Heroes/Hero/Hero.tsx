import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'
import ReactSVG from 'react-svg'

interface Props {}
interface State {}

class Hero extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.Hero>
        <__.PortraitWrap>
          <__.Portrait src="images/portraits/man-black.png" />
        </__.PortraitWrap>
        <__.Info>
          <__.Name>Leaders</__.Name>
          <__.Icons>
            <__.Icon style={{ left:`0` }} src="images/hero-photo-icon.png" />
            <__.Icon style={{ left:`2rem` }} src="images/hero-chat-icon.png" />
          </__.Icons>
          <__.Contribution>
            <ReactSVG className="love" src={`images/LOVE.svg`} />
            <ReactSVG className="full-bar" src={`images/hero-funding-bar-full.svg`} />
            <ReactSVG className="empty-bar" src={`images/hero-funding-bar-empty.svg`} />
          </__.Contribution>
        </__.Info>
      </__.Hero>
    )
  }
}

export default Hero;
