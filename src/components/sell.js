import React from 'react';
// import history from './router/history'
import {Link} from "react-router-dom";
import '../App.css';  
var login = JSON.parse(localStorage.getItem("Login"))

class Sell extends React.Component{
  sell_product = () => {
    if(!login.length[0]){
    this.props.this.props.this.props.history.push("/loginuser")
    }else{
    this.props.this.props.this.props.history.push("/giveadd")
    }
  }  
  render() {
    // console.log(login)
      return (
          <div style={{marginLeft: "20px",marginTop: "  0px",borderRadius: "25px"}}  className="login">
          <button onClick={this.sell_product} style={{fontWeight: "bold",fontSize: "17px",borderRadius: "25px",width: "90px"}} type="button" className="btn btn-outline-secondary"><img width="15px" height="15px" src="https://image.flaticon.com/icons/png/512/32/32339.png" /> Sell</button><br/>
          </div>
      );
    }
};
export default Sell;