import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter, Switch, Route, Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Backbone from 'backbone'
import MobileDetect from 'mobile-detect'
import __ from './_styles'
import clone from 'lodash/clone'
import { example } from './_gql'

import { Desktop, SplashPage } from 'SpiritOS/Components'

const FETCH_MY_PROFILE = gql `
  query fetchMyProfile {
    profile {
      id
      email
      is_verified
      _embedded
    }
}`

interface Props extends RouteComponentProps<any> {}
interface State { isMobile:boolean, dispatcher:any, windowWidth:number, profile:any }

class App extends React.Component<Props, State> {

  constructor(props){
    super(props);
    let md:any = {};
    let windowWidth = 0;
    if ( typeof window !== 'undefined' && window.navigator ){
      md = new MobileDetect(window.navigator.userAgent);
      windowWidth = window.outerWidth;
    }
    this.state = {
      isMobile: md.mobile && md.mobile() !== null,
      dispatcher: clone( Backbone.Events ),
      windowWidth,
      profile:{ id:'default', email:'no-reply@autokal.com', is_verified:false }
    }
  }
  componentDidMount(){
    this.getWindowWidth();
    window.addEventListener('resize', this.getWindowWidth )
  }
  getWindowWidth = () => {
    const windowWidth = window.outerWidth;
    this.setState({ windowWidth })
  }

  render() {
    const { isMobile, windowWidth } = this.state;

    return (
      <Query query={ FETCH_MY_PROFILE }>
        {({ loading, error, data }) => {
          if ( loading ) return <div>LOADING</div>
          if ( error ) return <div>ERROR</div>
          const { profile } = data;

            if ( isMobile || windowWidth && windowWidth < 420 ){
                return (
                    <__.MobileApp>
                        Mobile
                    </__.MobileApp>
                )

            } else {
                return (
                    <__.App>
                        <Route exact path='/' component={() => <SplashPage /> }/>
                        <Route path='/:community' component={() => <Desktop profile={ profile }/> }/>
                    </__.App>
                )
            }
        }}
      </Query>

    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ));
