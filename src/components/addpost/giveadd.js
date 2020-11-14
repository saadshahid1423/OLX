import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import firebase from '../firebase/firebase'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import firebase from 'firebase'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { setData } from '../store/action/index';
import { connect } from 'react-redux';
import { storage } from 'firebase'
// import { storage } from "../firebase/firebase";


class Postadd extends React.Component{
constructor(props){
    super(props)
    this.state={
        userName:"",proName:"",proCom:"",ModelYear:"",Condition:"",Detail:"",SmallDetail:"",Price:"",PhoneNum:"",City:"",picture1:"",picture2:"",picture3:"",
        files:null
// proDe:{
// }
    }
}
// getData=()=>{


// }
    send_data = () => {

// var img = {
//     addimg1:this.state.file1,
//     addimg2:this.state.file2,
//     addimg3:this.state.file3
// }
// firebase.storage().ref("/").child("ProductDetail").put(obj)
this.refs.btn.setAttribute("disabled", "disabled")
var ref1 = firebase.storage().ref().child(`images/${this.state.file1.name}`).put(this.state.file1)
ref1.on('state_changed', function(snapshot){
  }, function(error) {
  }, function() {
    ref1.snapshot.ref.getDownloadURL().then(function(downloadURL1) {
    //   console.log('File available at', downloadURL);
    localStorage.setItem("download1",downloadURL1)
    });
  });
  var ref2 = firebase.storage().ref().child(`images/${this.state.file2.name}`).put(this.state.file2)
ref2.on('state_changed', function(snapshot){
  }, function(error) {
  }, function() {
    ref2.snapshot.ref.getDownloadURL().then(function(downloadURL2) {
    //   console.log('File available at', downloadURL);
    localStorage.setItem("download2",downloadURL2)
    });
  });
  var ref3 = firebase.storage().ref().child(`images/${this.state.file3.name}`).put(this.state.file3)
ref3.on('state_changed', function(snapshot){
  }, function(error) {
  }, function() {
    ref3.snapshot.ref.getDownloadURL().then(function(downloadURL3) {
    //   console.log('File available at', downloadURL);
    localStorage.setItem("download3",downloadURL3)
    });
  });
  setTimeout(()=>{
    
    var url1 = localStorage.getItem("download1")
    var url2 = localStorage.getItem("download2")
    var url3 = localStorage.getItem("download3")
//  console.log(url1)
this.setState({
  picture1: url1,
  picture2: url2,
  picture3: url3
},
  ()=>{
    var obj={
        Fullname:this.state.userName,
        productname:this.state.proName,
        productCompany:this.state.proCom,
        Modelyear:this.state.ModelYear,
    Detail:this.state.Detail,
    SmallDetail:this.state.SmallDetail,
    Price:this.state.Price,
    Phonenumber:this.state.PhoneNum,
    condition: this.state.Condition,
    City:this.state.City,
    pic1:this.state.picture1,
    pic2:this.state.picture2,
    pic3:this.state.picture3
  }
  // console.log(obj)
  firebase.database().ref('/').child("ProductDetail").push(obj)
  this.props.history.push("/")
})
},10000)

// console.log("files===>", this.state.file)
// document.createElement("div")
// document.createAttribute("className","card")
// document.createElement("img")
// document.createAttribute("className","cardimage")
// document.createElement("button")
// document.createAttribute("className","cardButton")
// document.createElement()
// this.props.setData({obj})
// var image={
//     pictures:this.state.picture
// }

//         storage.ref(`images`).put(image);


    // console.log('asdsads');
    }
    render(){
        // const classes = useStyles();
        const useStyles = makeStyles((theme) => ({
            root: {
            '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const classes = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

//   console.log("props===>",this.props)
  
    // const handleChange = e => {
    //   if (e.target.files[0]) {
    //     setImage(e.target.files[0]);
    //   }
    // };
    // const ReactFirebaseFileUpload = () => {
    //     const [image, setImage] = useState(null);
    //     const [url, setUrl] = useState("");
    //     const [progress, setProgress] = useState(0);
    // }
// const [value, setValue] = React.useState('female');
// const handleChange = (event) => {
//     setValue(event.target.value);
//   };
// console.log(this.state,'asds')
// console.log(this.props.data)
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" width="100px" height="60px" /></Link>
                </nav>
                <h3 className="postadd">POST YOUR AD</h3> 
                <div className="inputdiv">
                <form className="classes.root" noValidate autoComplete="off">
                <div className="Nameuser">
                <input onChange={(e)=>this.setState({userName:e.target.value})} maxLength="15"  style={{width: "176px",height: "30px",borderTop: "none",borderLeft: "none",borderRight: "none"}} required id="standard-required" label="Required" placeholder="Enter Full Name" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({proName:e.target.value})} maxLength="10" style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} required id="standard-required" label="Required" placeholder="Enter Product Name" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({proCom:e.target.value})} maxLength="10" style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} required id="standard-required" label="Required" placeholder="Enter Product Company" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({ModelYear:e.target.value})} maxLength="4" style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} type="number" required id="standard-required" label="Required" placeholder="Model Year" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({Condition:e.target.value})} maxLength="4" style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} type="text" required id="standard-required" label="Required" placeholder="Condition used or new" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({Detail:e.target.value})} style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} maxLength="200" className="detailinput" required id="standard-required" label="Required" placeholder="Complete Detail" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({SmallDetail:e.target.value})} maxLength="95" style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} className="detailinput" required id="standard-required" label="Required" placeholder="Small Detail" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({Price:e.target.value})} style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} maxLength="10" type="number" required id="standard-required" label="Required" placeholder="Price" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({PhoneNum:e.target.value})} style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} maxLength="11" type="number"  required id="standard-required" label="Required" placeholder="Phone Number" />
                </div>
                </form>
                <form className="classes.root" noValidate autoComplete="off">
                <div className="product">
                <input onChange={(e)=>this.setState({City:e.target.value})} style={{borderTop: "none",borderLeft: "none",borderRight: "none"}} maxLength="10" required id="standard-required" label="Required" placeholder="City" />
                </div>
                </form>
                {/* <button type="button" className="btn btn-outline-primary"> <input type="file" multiple accept='image/*'/> Primary</button> */}
                {/* <button type="button" class="rui-3mpO_ rui-KRXqt" role="button" tabindex="0" data-aut-id="" title=""><svg width="36px" height="36px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-1YGxp" d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"></path></svg></button> */}
                {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                    </IconButton>
                </label><br></br> */}
                <h3 style={{marginLeft: '50px'}}>Upload 3 Pictures.</h3>
                <form>
                    <input onChange={(e)=>this.setState({file1:e.target.files[0]})} className="upimg" style={{float: "left",marginRight: "40px"}} id="file" type="file" accept="image/*" />
                </form>
                <form>
                    <input onChange={(e)=>this.setState({file2:e.target.files[0]})} className="upimg" style={{float: "left",marginRight: "40px"}} id="file" type="file" accept="image/*" />
                </form>
                <form>
                    <input  onChange={(e)=>this.setState({file3:e.target.files[0]})}    className="upimg" id="file" type="file" accept="image/*" />
                </form>
                {/* <button onClick={()=>this.props.set_data()} >Set Data</button> */}
                <button ref="btn" onClick={this.send_data} type="button" className="btnsub btn btn-outline-primary">Submit</button>
                </div>
                {/* onChange={(e)=>this.setState({picture:e.target.files[0]})} */}
            </div>
        )
    
    }
}

// const mapStateToProps = (state) => {
//     // name: state.user
//     // console.log("data===>",data)
//     return{
//         data: state.data
//     }
// };
// const mapDispatchToProps = (dispatch) => {
//     return{
//     setData: (obj) => dispatch(setData(obj))
// }
// };

// export default connect(mapStateToProps , mapDispatchToProps)(Postadd);
export default Postadd