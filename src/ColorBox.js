import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newOpacity;
    if (this.props.opacity >= .2){
      newOpacity = <ColorBox opacity={this.props.opacity - .1}/>
    } else {
      newOpacity = null
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {newOpacity}
      </div>
    )
  }

}

