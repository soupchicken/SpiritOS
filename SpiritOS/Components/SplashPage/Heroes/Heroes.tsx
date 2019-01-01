import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'
import ReactSVG from 'react-svg'

import Hero from './Hero'

interface Props {}
interface State {}

class Heroes extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.Heroes>
        <__.Header>
          <__.Title>Support Community Heroes</__.Title>
          <__.Subtitle>Empower the people who make your community next-level</__.Subtitle>
        </__.Header>
        <__.Directory>
          <__.HeroColumn>
            <__.Type>Personalities</__.Type>
            <Hero />
            <Hero />
            <Hero />
            <Hero />
          </__.HeroColumn>
          <__.HeroColumn>
            <__.Type>Content Creators</__.Type>
            <Hero />
            <Hero />
          </__.HeroColumn>
          <__.HeroColumn>
            <__.Type>Experts</__.Type>
          </__.HeroColumn>
        </__.Directory>
        <__.HeroesBG>
          <ReactSVG src={`images/heroes-hills.svg`} />
        </__.HeroesBG>
      </__.Heroes>
    )
  }
}

export default Heroes;
