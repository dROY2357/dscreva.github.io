import React, {Component} from "react"

class FourZeroFour extends Component{

  frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
  }

  openhome(){
    window.open("https://fluentdesignforweb.github.io/", "_self", "replace");
  }

  
  render(){
    return(
      <div className="container">
        <div className="col l8 m8 s12">
          <h1 style={{fontSize: "20vh"}}><span>404</span></h1>
          <p>
            <h2>We Couldn't Connect The Dots</h2>
            The page you want to access doesn't exist or you assembled the link incorrectly
          </p><br />
          <button className="btn-large frost_container red lighten-4" onMouseOver={this.frosting} onClick={this.openhome}>
            <span className="frost">Head To Home</span>
          </button>
          <br /><br />
        </div>
      </div>
    );
  }

}


export default FourZeroFour;