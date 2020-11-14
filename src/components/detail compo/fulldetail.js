import { render } from '@testing-library/react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import '../../App.css';

class Fulldet extends React.Component{
  constructor(props) {
    super(props);
    // console.log(this.props.this.props)
    this.state = {
        detail:[
            this.props.this.props.location.state.detail
        ]
    };
  };
    render(){
      return(
        <div>
      {this.state.detail.map((i)=>{
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={i.pic1} height="500" width="800px" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={i.pic2} height="500" width="800px" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={i.pic3} height="500" width="800px" className="d-block w-100" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
                 )       
                })}
                </div>
                        )     
                    }
                };
export default Fulldet;