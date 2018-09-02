import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Region extends Component {

  constructor(props) {
    super(props);


    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft() {

  }

  moveRight() {

  }

  render() {
    <div>
      <Button onClick={this.rightPartMoveLeft} size="sm">&lArr;</Button>
      <Button onClick={this.rightPartMoveRight} size="sm">&rArr;</Button>
    </div>
  }
}

export default Region;