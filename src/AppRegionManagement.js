import React, { Component } from 'react';

class AppRegionManagement extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <button onClick={this.props.cancelRegionAction} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="col-6">
          <h4>music region</h4>
          <p>start: <b>{this.props.region.audioMeta.startTime} s</b></p>
          <p>end: <b>{this.props.region.audioMeta.endTime} s</b></p>
        </div>
        <div className="col-6">
          <h4>book region:</h4>
          <p>Selected region: <b>{this.props.region.bookMeta.label}</b></p>
        </div>
        <div className="col-12">
          <button className="btn btn-success sm" onClick={this.createNewRegion}>Create</button>
        </div>
      </div>
    )
  }
}

export default AppRegionManagement;
