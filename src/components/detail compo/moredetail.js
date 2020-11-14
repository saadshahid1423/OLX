import React from 'react'
import phone from '../../images/phone.png'
import firebase from 'firebase'
import "../../App.css"

class MoreDetail extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props.this.props)
        this.state = {
            detail:[
                this.props.this.props.location.state.detail
            ]
        };
      }

    render(){
        // console.log(this.state.detail)
        return(
                <div>
            {this.state.detail.map((i)=>{
        return(
            <div>
            <div className="detail">
                <h4 className="detailhead">Details</h4>
                <table >
                    <td className="firstName">
            <tr>Make: </tr>
            <tr>Year:</tr>
                    </td>
                    <td className="secondName">
                    <tr><b>{i.productCompany}</b></tr>
                    <tr><b>{i.Modelyear}</b></tr>
                    </td>
                    <td className="thirdName">
                    <tr>Model:</tr>
                    <tr>Condition:</tr>
                    </td>
                    <td className="secondName">
                    <tr><b>{i.productname}</b></tr>
                    <tr><b>{i.condition}</b></tr>
                    </td>
                </table>
                <hr style={{marginRight: "20px",marginLeft: "20px"}}></hr>
                <h4 className="detailhead">Description</h4>
        <p className="firstName">{i.Detail}</p>
            </div>
            <div className="price">
                <div style={{paddingLeft:"10px"}}>
            <h1>Rs {i.Price}</h1>
            <p style={{fontWeight: "bold"}}>{i.productCompany} {i.productname} {i.Modelyear}</p>
            <p>{i.City}, Pakistan <span style={{paddingLeft:"50px"}}></span></p>
            </div>
            </div>
            <div className="sellerdes">
                <p className="sellerabout">Seller Description</p>
                <img style={{marginLeft: "20px"}} width="60px" height="60px" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"  ></img>
                <p className="Name">Name: {i.Fullname}</p>
                <img className="phoneimg" src={phone} widt="30px" height="30px"></img>
                <p className="number">{i.Phonenumber}</p>
            </div>
            <div className="footermoredetail">
                <p style={{paddingTop: "10px"}}>Free Classifieds in Pakistan. © 2006-2020 OLX</p>
            </div>
            </div>
                 )       
})}
</div>
        )     
    }
};

const mapStateToProps = (state) => {
  // name: state.user
  // console.log("data===>",data)
  return {
    movedata: state.moreinfo
  }
};
export default MoreDetail ;