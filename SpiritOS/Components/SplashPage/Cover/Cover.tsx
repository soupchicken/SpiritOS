import React from 'react'
import {connect} from 'react-redux'
import {RouteComponentProps} from 'react-router'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'

import CommunityWeb from './CommunityWeb'

interface Props extends RouteComponentProps<any> {
}
interface State {
}

class Cover extends React.Component<Props, State> {

  coverTop = null;
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    setTimeout(() => this.coverTop.style.opacity = 1, 0)
  }

  render() {
    return (
      <__.Cover>
        <__.CoverTop innerRef={ref => this.coverTop = ref}>
          <__.Logo src="/images/logo.svg"/>
          <__.Tagline>A Better Way to Be Together</__.Tagline>
        </__.CoverTop>
        <__.CoverBottom>
          <__.WebWrap>
            <CommunityWeb
            web="images/redweb.svg"
            nodes={[
              { portrait:'man-white-beard.png', background:'redcircle.svg',
                fadeInDelay:250 , width:22, xPos:44, yPos:0 },
              { portrait:'girl-blonde.png', background:'redcircle.svg',
                fadeInDelay:300 , width:22, xPos:17, yPos:11 },
              { portrait:'man-latino.png', background:'redcircle.svg',
                fadeInDelay:250 , width:20, xPos:75, yPos:4 },
              { portrait:'girl-asian.png', background:'redcircle.svg',
                fadeInDelay:350 , width:22, xPos:54, yPos:29 },
              { portrait:'man-black.png', background:'redcircle.svg',
                fadeInDelay:350 , width:20, xPos:81, yPos:35 },
              { portrait:'girl-pink.png', background:'redcircle.svg',
                fadeInDelay:400 , width:20, xPos:58, yPos:60 },
            ]}
          />
          </__.WebWrap>
        </__.CoverBottom>
      </__.Cover>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cover));
