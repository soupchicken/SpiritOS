import React from 'react'
import gql from 'graphql-tag'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { Mutation } from 'react-apollo'
import __ from './_styles'
// import { example } from './_gql'

import { LoginForm } from  'SpiritOS/Components/Forms'

const communityData = {
  ['sfv']:{
    id:'sfv',
    display_text:'Street Fighter V',
    icon:'https://i.imgur.com/5ABrqGT.png',
    logo:'https://i.imgur.com/mqVfnVq.png',
    view_count:673
  },
  ['melee']:{
    id:'melee',
    display_text:'Melee',
    icon:'https://i.imgur.com/Pgpz5Wk.png',
    logo:'https://i.imgur.com/Mlk7MB6.png',
    view_count:216
  }
}

interface Props extends RouteComponentProps<any> { communities:any, profile:any }
interface State {}

const LOGOUT_MUTATION = gql`
  mutation logout {
    logout {
      token,
      profile {
        id
        email
        is_verified
        _embedded
      }
    }
  }
`

const FETCH_MY_PROFILE = gql `
  query fetchMyProfile {
    profile {
      id
      email
      is_verified
      _embedded
    }
}`

class Header extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  receiveLogout = ( cache, { data: { logout }}) => {
    Cookies.remove('token');
    cache.writeQuery({
      query: FETCH_MY_PROFILE,
      data: { profile: logout.profile }
    });
  }

  render() {
    const { receiveLogout } = this;
    const { communities, profile, location:{ pathname, search }, match: { params }} = this.props;
    const { community } = params;
    return (
      <__.Header>
        <__.Wrapper>
          <__.HomeButton>
            <__.BoardIcon src={ communities[0].icon } />
          </__.HomeButton>
          <__.Navigation>
            <__.NavOption to={{ pathname:`/${community}`, search }} data-active={pathname === `/${community}`}>
              Events
            </__.NavOption>
            <__.NavOption to={{ pathname:`/${community}/past`, search }} data-active={pathname === `/${community}/past`}>
              Past Events
            </__.NavOption>
          </__.Navigation>
          {
            profile.id === 'default' ?
              <LoginForm /> :
              <Mutation
                mutation={ LOGOUT_MUTATION }
                update={ receiveLogout }>
                {( attemptLogout, { data }) => (
                  <__.Logout onClick={() => attemptLogout() }>LOGOUT</__.Logout>
                )}
              </Mutation>
          }

        </__.Wrapper>
      </__.Header>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Header ));
