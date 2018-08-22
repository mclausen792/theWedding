import React, { Component } from 'react';
import '../Styles/App.css';


class RSVP extends Component {

  submitRSVP = (e) => {
      e.preventDefault();
      let newRSVP = {
          first: e.target.first.value,
          last: e.target.last.value,
          attending: e.target.attending.value,
          children: e.target.children.value,
          adults: e.target.adults.value,
          allergies: e.target.dietary.value
      }
      console.log('here', newRSVP);
      this.createRSVP(newRSVP)
    }
  async createRSVP(rsvp){
  const response = await
   fetch('https://obscure-temple-82252.herokuapp.com/https://infinite-mountain-41867.herokuapp.com/guests', {
      method: 'POST',
      body: JSON.stringify(rsvp),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'

      }
    })
    console.log('response', response);
  }




  render() {
    return (
      <div className="rsvp">
        <h1 className = "rsvpHead"> Please RSVP by March 1, 2018 </h1>
        <form className = "rsvpForm" onSubmit={this.submitRSVP} formMethod = "POST">
          <label>Names of Invited Guests</label>
          <input type = "text" id = "first" className = "rsvpInput" placeholder="First Name" name = "first" formMethod = "POST" required/>
          <input type = "text" id = "last" className = "rsvpInput" placeholder="Last Name" name = "last" formMethod = "POST" required/>
          <label>Attending?</label>
          <input type = "text" id = "attending" className = "rsvpInput" placeholder ="Yes/No" name="attending" formMethod = "POST" required/>
          <div className = "attending">
          <input type = "number" id="adults" className = "rsvpInput adultNumber" placeholder = "# of Adults" name="adults" formMethod = "POST" required/>
          <input type = "number" id="children" className = "rsvpInput childNumber" placeholder = "# of Children" name="children" formMethod = "POST" required/>
          </div>
          <input type = "text" id="dietary" className = "rsvpInput" placeholder = "Allergies, etc." name="dietary" formMethod = "POST" required/>
          <button type = "submit" onClick = {this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
