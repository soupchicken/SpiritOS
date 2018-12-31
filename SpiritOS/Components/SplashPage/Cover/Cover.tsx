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
                fadeInDelay:200 , width:24, xPos:48, yPos:-2 },
              { portrait:'girl-blonde.png', background:'redcircle.svg',
                fadeInDelay:275 , width:24, xPos:18, yPos:11 },
              { portrait:'man-latino.png', background:'redcircle.svg',
                fadeInDelay:200 , width:23, xPos:77, yPos:2 },
              { portrait:'girl-asian.png', background:'redcircle.svg',
                fadeInDelay:350 , width:21, xPos:59, yPos:28 },
              { portrait:'man-asian.png', background:'redcircle.svg',
                fadeInDelay:350 , width:21, xPos:84, yPos:32 },
              { portrait:'man-indian.png', background:'redcircle.svg',
                fadeInDelay:425 , width:21, xPos:64, yPos:54 },
              { portrait:'man-old.png', background:'redcircle.svg',
                fadeInDelay:350 , width:23, xPos:-9, yPos:25 },
              { portrait:'girl-old.png', background:'redcircle.svg',
                fadeInDelay:350 , width:21, xPos:7, yPos:50 },
              { portrait:'man-white-redhead.png', background:'redcircle.svg',
                fadeInDelay:425 , width:23, xPos:32 , yPos:39 },
            ]}
          />
          <CommunityWeb
            web="images/blueweb.svg"
            nodes={[
              { portrait:'girl-black.png', background:'bluecircle.svg',
                fadeInDelay:200 , width:28, xPos:6, yPos:3 },
              { portrait:'girl-muslim.png', background:'bluecircle.svg',
                fadeInDelay:200 , width:26, xPos:66, yPos:5 },
              { portrait:'girl-white.png', background:'bluecircle.svg',
                fadeInDelay:275 , width:28, xPos:35, yPos:16 },
              { portrait:'man-white.png', background:'bluecircle.svg',
                fadeInDelay:350 , width:28, xPos:8, yPos:36 },
              { portrait:'girl-pink.png', background:'bluecircle.svg',
                fadeInDelay:425 , width:27, xPos:44, yPos:47 },
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
