import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../App.css'
import {createBrowserHistory} from "history"
import firebase from '../components/firebase/firebase'
const history = createBrowserHistory();

class CardProduct extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      completeDetail: [
      ]
    };
  }

  componentDidMount() {
    var arr = []
    firebase.database().ref('/').child("ProductDetail").on("child_added",   (data)=> {
      arr.push(data.val())
      this.setState({
        completeDetail: arr
      })
    })
  }
  move_data = (i) =>{
    this.props.this.props.history.push("/detail",{
    detail: i 
    })
    
  }
  render() {
    return (
      <div className="row">
        {this.state.completeDetail.map((i)=>{
          return <div >
            <div  style={{width: '18rem',marginLeft:"45px",marginTop:"20px"}}>
            <img src={i.pic1} height="200px" width="150px" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title" style={{overflow: "hidden"}} >{i.productname}</h5>
            <p className="card-text" >{i.SmallDetail}</p>
            <button onClick={() => this.move_data(i)} className="btn btn-primary">Complete Detail</button>
            </div>
            </div>
          </div>
         })}
       </div> 
    );
  };
};


export default CardProduct;