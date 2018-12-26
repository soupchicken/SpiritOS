import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter, Switch, Route, Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import __ from './_styles'
// import { example } from './_gql'

import { Sidebar, Canvas, Header } from 'SpiritOS/Components'

interface Props extends RouteComponentProps<any> { profile:any }
interface State {}

const theme = {
  ['sfv']: {
    sidebar: '#191A1C',
    canvasBG: '#1E2324',
    moduleBG: '#2C3235',
    headerBar: '#1662f9',
    highlight: '#ff4700',
    personaBG: '#0d3984',
    personaListHeader:'#092048',
    headerGradient: 'rgba(7,119,224,.22)',
    personaDetails: '#0B2856'
  },
  ['melee']: {
    sidebar: '#141617',
    canvasBG: '#1E2324',
    moduleBG: '#2C3235',
    headerBar: '#1662f9',
    highlight: '#ff4700',
    personaBG: '#0d3984',
    personaListHeader:'#092048',
    headerGradient: 'rgba(7,119,224,.22)',
    personaDetails: '#0B2856'
  },
}

class Desktop extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const { profile, match:{ params }} = this.props;
    const communities = profile._embedded.community;
    const { community } = params;
    return (
      <ThemeProvider theme={ theme[community] }>
        <__.Desktop>
          <Sidebar communities={ communities } />
          <__.Board >
            <Header profile={ profile } communities={ communities } />
            <Canvas />
          </__.Board>
        </__.Desktop>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Desktop ));
