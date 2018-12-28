import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import __ from './_styles'
import ReactSVG from 'react-svg'

interface Props {
  portrait:string,
  background:string,
  fadeInDelay:number,
  width:number,
  xPos:number,
  yPos:number
}
interface State {}

class Node extends React.Component<Props, State> {

  circle = null;
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    const { fadeInDelay, width } = this.props;
    setTimeout(() => {
      this.circle.style.opacity = 1;
      this.circle.style.width = `${width}%`;
      this.circle.style.marginTop = 0;
      this.circle.style.marginLeft = 0;
    }, fadeInDelay || 0 )
  }

  render() {
    const { portrait, background, width, xPos, yPos } = this.props;
    return (
      <__.Node
        innerRef={ref => this.circle = ref}
        style={{
          width:`${width*.7}%`,
          marginTop:`${width*.15}%`,
          marginLeft:`${width*.15}%`,
          left:`${xPos}%`, top:`${yPos}%` }}>
        <__.PortraitWrap>
          <__.Portrait src={`images/portraits/${portrait}`}/>
          <__.PortraitFrame />
        </__.PortraitWrap>
        <ReactSVG src={`images/${background}` } />
      </__.Node>
    )
  }
}

export default Node;
