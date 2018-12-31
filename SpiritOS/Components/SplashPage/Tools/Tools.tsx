import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'

interface Props {}
interface State {}

class Tools extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <__.Tools>
        <__.Header>
          <__.Title>Tools You're Familiar With</__.Title>
          <__.Subtitle>Blockchain-enabled tools helps your community do more together</__.Subtitle>
        </__.Header>
        <__.Body>
          <__.Labels>
            <__.Label>
              <__.LabelTitle>
                Participate
              </__.LabelTitle>
              <__.LabelDescription>
                Make yourself at home
              </__.LabelDescription>
            </__.Label>
            <__.Label>
              <__.LabelTitle>
                Communicate
              </__.LabelTitle>
              <__.LabelDescription>
                Tools for sharing content and enabling community discussions
              </__.LabelDescription>
            </__.Label>
            <__.Label>
              <__.LabelTitle>
                Collaborate
              </__.LabelTitle>
              <__.LabelDescription>
                Community project kickstarter
              </__.LabelDescription>
            </__.Label>
          </__.Labels>
          <__.AppScreens src="images/app-screens.png" />
        </__.Body>
      </__.Tools>
    )
  }
}

export default Tools;
