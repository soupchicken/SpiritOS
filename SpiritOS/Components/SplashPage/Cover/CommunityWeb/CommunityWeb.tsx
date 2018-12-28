import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import { map } from 'lodash'
import __ from './_styles'

import Node from '../Node'

interface Props {
  web:string,
  nodes:any
}
interface State {}

class CommunityWeb extends React.Component<Props, State> {

  web = null;
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    setTimeout(() => {
      this.web.style.opacity = 1;
      this.web.style.marginTop = 0;
    }, 100 );
  }

  __Nodes( nodes ) {
    return map(nodes, ( node, i ) => {
      const { portrait, fadeInDelay, background, width, xPos, yPos } = node;
      return (
        <Node
          key={`node-${i}`}
          portrait={ portrait }
          fadeInDelay={ fadeInDelay }
          background={ background }
          width={ width }
          xPos={ xPos }
          yPos={ yPos }
        />
      )
    })
  }

  render() {
    const { web, nodes } = this.props;
    const { __Nodes } = this;

    return (
      <__.CommunityWeb innerRef={ref => this.web = ref}>
        {/*<ReactSVG src={svg} style={{ fill: color || '#000' }}/>*/}
        <__.Web type="image/svg+xml" data={web} />
        { __Nodes( nodes ) }
      </__.CommunityWeb>
    )
  }
}

export default CommunityWeb;
