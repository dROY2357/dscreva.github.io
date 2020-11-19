import React, {Component} from "react";
import Logo from './static/logo.svg';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import events_new from '../UpcomingEventDetails'

class Events extends Component{

  frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
  }

  close(){
    window.history.go(-1);
  }
  constructor(props) {
    super(props)
    this.state = {
      all_events: events_new, 
      curr_event:0 
    }
    this.setAllEvents= this.setAllEvents.bind(this);
    this.setCurrEvent= this.setCurrEvent.bind(this);
  }

  setAllEvents(_all_events) {
    this.setState({all_events: _all_events});
  }

  setCurrEvent(_curr_event) {
    this.setState({curr_event: _curr_event});
  }

  handleNext = () => {
    if(this.state.curr_event<this.state.all_events.length-1){
      this.setState({curr_event: this.state.curr_event+1})
    }
  }

  handlePrev = () =>{
    if(this.state.curr_event>0){
      this.setState({curr_event: this.state.curr_event-1})
    }
  }
  
  render(){
    return(
      <div>
        <div className="header">
          <img src={Logo} className="logo" alt=""/>
          DSC REVA
          <a data-target="slide-out" className="sidenav-trigger " href="/events"><i className="material-icons" onClick>menu</i></a>
        </div>

          {/* Here we are rendering the Upcoming Events and Past Events Components */}

          <div className="row">
            <UpcomingEvents events_new={this.state.all_events[this.state.curr_event]} handlePrev={this.handlePrev} handleNext={this.handleNext} />
          <div className="row">
            <PastEvents events_new={events_new} setAllEvents={this.setAllEvents} setCurrEvent={this.setCurrEvent} />
          </div>
          </div>

      </div>
    );
  }

}


export default Events;