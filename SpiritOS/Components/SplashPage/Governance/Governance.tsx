import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'
import ReactSVG from 'react-svg'

interface Props {}
interface State {}

class Governance extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.Governance>
        <__.SectionDivider>
          <ReactSVG src={`images/governance-header.svg`} />
        </__.SectionDivider>
        <__.Header>
          <__.Title>Shaped By You</__.Title>
          <__.Subtitle>Personalize your community using our smart-contract voting system</__.Subtitle>
        </__.Header>
        <__.Body>
          <__.BodyTitle>
            Your Rules. Your Leaders. Your Mission.
          </__.BodyTitle>
          <__.Blocks>
            <__.Block><__.BlockBody /><__.BlockLabel /></__.Block>
            <__.Block><__.BlockBody /><__.BlockLabel /></__.Block>
            <__.Block><__.BlockBody /><__.BlockLabel /></__.Block>
            <__.Block>
              <__.BlockBody>
                <__.Contract src="images/contract-1.png" />
              </__.BlockBody>
              <__.BlockLabel>
                Set the rules that shape your community culture
              </__.BlockLabel>
            </__.Block>
            <__.Block>
              <__.BlockBody>
                <__.Contract src="images/contract-2.png" />
              </__.BlockBody>
              <__.BlockLabel>
                Elect and empower the best of you
              </__.BlockLabel>
            </__.Block>
            <__.Block>
              <__.BlockBody>
                <__.Contract src="images/contract-3.png" />
              </__.BlockBody>
              <__.BlockLabel>
                Decide how community LOVE should be allocated
              </__.BlockLabel>
            </__.Block>
            <__.Block><__.BlockBody /><__.BlockLabel /></__.Block>
            <__.Block><__.BlockBody /><__.BlockLabel /></__.Block>
            <__.Block><__.BlockBody /><__.BlockLabel /></__.Block>
          </__.Blocks>
        </__.Body>
      </__.Governance>
    )
  }
}

export default Governance;
