import React from 'react';
// import {Link} from "react-router-dom";
import fbicon from '../../images/fbicon.png'
import Firebase from '../firebase/firebase'
import firebase from 'firebase'
import '../../App.css';
import {Link} from "react-router-dom";
import { createStore } from 'redux';
import { facebook_login } from '../store/action'
import {connect} from 'react-redux';

class Loginuser extends React.Component{
       render(){
        return(
            <div className="loginpage">
                <h1 style={{marginLeft: "75px",marginTop:"50px",textDecoration: "underline"}}>Login</h1>
                <button type="button" className="btn1 btn btn-outline-primary"><img style={{paddingRight: "20px"}} width="40px" height="20px" src="https://pngimg.com/uploads/google/google_PNG19635.png" />Login With Google</button><br></br>
                <button type="button" onClick={() => this.props.facebook_login(this.props.history)} className="btn2 btn btn-outline-primary"><img style={{paddingRight: "10px"}} src={fbicon} width="30px" height="20px" />Login With Facebook</button>
            </div>
        )
    }
} 
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    facebook_login: (history) => dispatch(facebook_login(history)),
})
export default connect(mapStateToProps , mapDispatchToProps)(Loginuser);
