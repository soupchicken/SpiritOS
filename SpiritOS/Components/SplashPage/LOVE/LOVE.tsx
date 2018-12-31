import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'
import ReactSVG from 'react-svg'

interface Props {}
interface State {}

class LOVE extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.LOVE>
        <__.HeaderImage>
          <ReactSVG src={`images/love-header.svg`} />
        </__.HeaderImage>
        <__.Header>
          <__.LOVEButton src="images/love-button.png" />
          <__.HeaderText>
            <__.Title>The LOVE Coin</__.Title>
            <__.Subtitle>The cryptocurrency that makes it all possible</__.Subtitle>
          </__.HeaderText>
        </__.Header>
        <__.FeatureList>
          <__.Feature>
            <__.FeatureIcon src="images/ring-green.png" />
            <__.FeatureText style={{ borderColor:'#02DB97' }}>
              <__.FeatureLabel>Feeless Funding</__.FeatureLabel>
              <__.FeatureDescription>Everything you donate goes exactly where you want it to</__.FeatureDescription>
            </__.FeatureText>
          </__.Feature>
          <__.Feature>
            <__.FeatureIcon src="images/ring-light-blue.png" />
            <__.FeatureText style={{ borderColor:'#02D0DB' }}>
              <__.FeatureLabel>Feeless Funding</__.FeatureLabel>
              <__.FeatureDescription>Everything you donate goes exactly where you want it to</__.FeatureDescription>
            </__.FeatureText>
          </__.Feature>
          <__.Feature>
            <__.FeatureIcon src="images/ring-blue.png" />
            <__.FeatureText style={{ borderColor:'#1870B8' }}>
              <__.FeatureLabel>Feeless Funding</__.FeatureLabel>
              <__.FeatureDescription>Everything you donate goes exactly where you want it to</__.FeatureDescription>
            </__.FeatureText>
          </__.Feature>
        </__.FeatureList>
      </__.LOVE>
    )
  }
}

export default LOVE;
