import React from 'react'
import gql from 'graphql-tag';
import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import { Mutation } from 'react-apollo'
import { withRouter, RouteComponentProps } from 'react-router'
import __ from './_styles'

interface Props extends RouteComponentProps<any> {}
interface State { email:string, password:string }

import validate from 'shared/validate'
// import login from 'SpiritOS/lib/login'

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token,
      profile {
        id,
        email,
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

// No validation necessary on login
// TODO: Replace 'any' with valid typescript typings
class LoginForm extends React.Component<Props, any> {

  constructor(props){
    super(props);
    this.state = {
      email:'', password:''
    }
  }

  handleChange = ( e ) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  receiveLogin = ( cache, { data: { login }}) => {
    Cookies.set( 'token', login.token );
    cache.writeQuery({
      query: FETCH_MY_PROFILE,
      data: { profile: login.profile }
    });
  }

  render() {
    const { handleChange, receiveLogin } = this;
    const { email, password } = this.state;
    const { location:{ pathname }, match: { params }} = this.props;
    const { community } = params;

    return (
      <Mutation
        mutation={ LOGIN_MUTATION }
        update={ receiveLogin }>
        {( attemptLogin, { data }) => (
          <__.LoginForm onSubmit={ e => {
              e.preventDefault();
              if ( email && password )
                attemptLogin({ variables: { username:email, password }})
            }}>
            <__.Email>
              <__.TextInput
                type="text"
                name="email"
                onChange={ handleChange }
                placeholder="EMAIL"
                value={ email }
              />
              <__.FocusHighlight />
            </__.Email>
            <__.Password>
              <__.TextInput
                type="password"
                name="password"
                onChange={ handleChange }
                placeholder="PASSWORD"
                value={ password }
              />
              <__.FocusHighlight />
            </__.Password>
            <__.Login
              type="submit"
              disabled={!email || !password}
              value="LOGIN"
            />
          </__.LoginForm>
        )}
      </Mutation>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( LoginForm ));
