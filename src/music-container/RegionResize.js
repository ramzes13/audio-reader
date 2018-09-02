import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RegionResize extends Component {

  constructor(props) {
    super(props);

    this.leftPartMoveLeft = this.leftPartMoveLeft.bind(this);
    this.leftPartMoveRight = this.leftPartMoveRight.bind(this);
    this.rightPartMoveLeft = this.rightPartMoveLeft.bind(this);
    this.rightPartMoveRight = this.rightPartMoveRight.bind(this);
  }

  leftPartMoveLeft() {
    this.props.region.start = this.props.region.start - 1;
    this.redrawRegion();
  }

  leftPartMoveRight() {
    this.props.region.start = this.props.region.start + 1;
    this.redrawRegion();
  }

  rightPartMoveLeft() {
    this.props.region.end = this.props.region.end - 1;

    this.redrawRegion();
  }

  rightPartMoveRight() {
    this.props.region.end = this.props.region.end + 1;

    this.redrawRegion();
  }

  redrawRegion() {
    this.props.region.updateRender();
  }

  render() {
    return (
      <div>
        <div className='float-left'>
          <Button onClick={this.leftPartMoveLeft} size="sm">&lArr;</Button>
          <Button onClick={this.leftPartMoveRight} size="sm">&rArr;</Button>
        </div>
        <div className='float-right'>
          <Button onClick={this.rightPartMoveLeft} size="sm">&lArr;</Button>
          <Button onClick={this.rightPartMoveRight} size="sm">&rArr;</Button>
        </div>
      </div>
    )
  }
}

export default RegionResize;