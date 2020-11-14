import React, { createElement } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import firebase from 'firebase'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import '../App.css';

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      LoginDetail: [
        this.props.fbuser
      ]
    };
  }

  // componentDidMount() {
  //   var arr = []
  //   firebase.database().ref('/').child(`LoginInfo/`).on("child_added", (Logindetail)=> {
  //     // localStorage.setItem("authToken",Logindetail)
  //     // console.log(Logindetail.val())
  //     arr.push(Logindetail.val())
      // console.log(data.val());
      // console.log(arr)
    // const user = localStorage.getItem("authToken")
    // console.log("user===>", user)
  //     this.setState({
  //       LoginDetail: arr
  //     })
  //   })
  // }
  render() {
  // console.log(this.state.LoginDetail)
    // console.log(this.state.LoginDetail,'this.state.LoginDetail')
      localStorage.setItem("Login",JSON.stringify(this.state.LoginDetail))
      // console.log(login)
      // console.log("props===>",this.props.fbuser)
      // let user = this.props.fbuser;
      return (  
        <div>
          {this.state.LoginDetail.map((i)=>{
            return(
          <div style={{marginLeft: "30px",marginTop: "10px",fontWeight: "bold",fontSize: "large",cursor: "pointer"}}  className="login">
          <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
          <React.Fragment>
          <img src={i.profile} style={{borderRadius: "35px",marginBottom: "20px"}} width="50px" height="50px"  variant="contained" color="primary" {...bindTrigger(popupState)}/>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>{i.name}</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
          </div>
            )
          })}
          </div>
      );
    }
};

const mapStateToProps = (state) => ({
  fbuser: state.fbuser,
})
// const mapDispatchToProps = (dispatch) => ({
// })
export default connect(mapStateToProps , null)(Login);