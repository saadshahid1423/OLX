import React from 'react'; 
import Navbar from './nav'
import CardProduct from './card'
import Carouselimg from './carousel';
import Categories from './allcategories';
import Footer from './footer'
import {Link} from 'react-router-dom'
import '../App.css';
import { set_data } from './store/action';
import { connect } from 'react-redux';

class NewComponent extends React.Component {
  render(){
    
    // console.log(this.props.data)
      return (
        <div>
          <Navbar this={this} />
        <div>
        <br></br>
          <Categories />
          <Carouselimg/>
        </div>
        <div>
          <br></br>
          <CardProduct this={this}/>
        </div>
        <div>
          <br></br>
          <Footer/>
        </div>
        </div>
    )
  }
};


export default NewComponent;