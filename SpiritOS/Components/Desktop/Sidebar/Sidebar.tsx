import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import { Query } from 'react-apollo'
import moment from 'moment'
import __ from './_styles'
// import { example } from './_gql'

import { SidebarCommunityOption } from 'SpiritOS/Components'

interface Props extends RouteComponentProps<any> { communities:any }
interface State {}

// const communityData = [
//   {
//     id:'sfv',
//     display_text:'Street Fighter V',
//     icon:'https://i.imgur.com/5ABrqGT.png',
//     logo:'https://i.imgur.com/mqVfnVq.png',
//     view_count:673
//   },
//   {
//     id:'melee',
//     display_text:'Melee',
//     icon:'https://i.imgur.com/Pgpz5Wk.png',
//     logo:'https://i.imgur.com/Mlk7MB6.png',
//     view_count:216
//   }
// ]

class Sidebar extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = {}
  }
  contextTypes: { profile:PropTypes.object.isRequired }

  __CommunitySelect = ( communities ) => {
    return communities.map( community => {
      const { id, icon } = community;
      return <SidebarCommunityOption key={ id } id={ id } icon={ icon }/>
    })
  }

  render() {
    const { __CommunitySelect } = this;
    const { communities } = this.props;
    return (
      <__.Sidebar>
        {/* <__.DayOfWeek>{ moment().format('ddd') }</__.DayOfWeek> */}
        <__.CurrentDate>{ moment().format('M/D') }</__.CurrentDate>
        { __CommunitySelect( communities )}
      </__.Sidebar>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Sidebar ));
