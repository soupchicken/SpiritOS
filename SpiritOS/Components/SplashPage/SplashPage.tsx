import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter, Switch, Route, Link } from 'react-router-dom'
import __ from './_styles'

import { Cover, SystemOverview, ValueProposition, LOVE, Governance, Tools } from 'SpiritOS/Components'

interface Props extends RouteComponentProps<any> {}
interface State {}

class SplashPage extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {match:{params}} = this.props;
    return (
      <__.SplashPage>
        <Cover />
        <__.Overview />
        <SystemOverview />
        <ValueProposition />
        <LOVE />
        <Governance />
        <Tools />
      </__.SplashPage>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( SplashPage ));
