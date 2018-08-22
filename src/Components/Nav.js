import React, { Component } from 'react';
import '../Styles/App.css';

 export default class Nav extends Component {
  render(){
    return(
      <div className="nav">
        <a className = "topNav" href = 'Invite'
          onClick = {this.props.goToDetails}>
          <span> Invitation</span>
        </a>

        <a className = "topNav" href = 'Registry'
          onClick = {this.props.goToRegistry}>
          <span>Registry</span>
        </a>

        <a className = "topNav" href = 'RSVP'
          onClick = {this.props.goToRSVP}>
            <span>RSVP</span>
          </a>
    </div>
    )
  }
}
