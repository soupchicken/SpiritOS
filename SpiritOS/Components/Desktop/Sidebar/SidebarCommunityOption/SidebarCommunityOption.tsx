import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { Query } from 'react-apollo'
import __ from './_styles'
// import { example } from './_gql'

interface Props extends RouteComponentProps<any> {
  id:string, icon:string
}
interface State {}

class SidebarCommunityOption extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const { id, icon, history, location:{ pathname }} = this.props;
    const isActive = pathname.startsWith(`/${id}`)
    return (
      <__.CommunityOption
        isActive={ isActive }
        onClick={() => !isActive && history.push(`/${id}`)}>
        <__.CommunityIcon src={ icon } />
      </__.CommunityOption>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( SidebarCommunityOption ));
