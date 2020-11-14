import React from 'react'
import MoreDetail from './moredetail'
import Fulldet from '../detail compo/fulldetail'
import Navbar from '../nav';
import '../../App.css'

class Details extends React.Component{
//   componentDidMount(the) {
//     console.log("received===>", the);
// }
render(){
  // console.log(this.props)    
        return(   
          // <div  >
          //   return(
            // {this.props.location.state.map((i)=>{
          <div>
            {/* <h1>{i.City}</h1> */}
            <Navbar/>
          <div style={{marginTop: "20px"}}> 
          {/* <h1></h1> */}
          <Fulldet this={this}/>
          <MoreDetail this={this}/>     
          </div>     
          </div>
                 
//             )
// })}
// </div>
        )
        
    }
}
export default Details;