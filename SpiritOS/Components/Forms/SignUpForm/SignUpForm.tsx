import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import __ from './_styles'

interface Props extends RouteComponentProps<any> {}
interface State {}

class SignUpForm extends React.Component<Props, State> {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const { location:{ pathname }, match: { params }} = this.props;
    const { community } = params;
    return (
      <__.SignUpForm>
      </__.SignUpForm>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default connect( mapStateToProps, mapDispatchToProps )( SignUpForm );
