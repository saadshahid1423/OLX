import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import DropDown from './dropdown'
import SearchBar from './searchbar'
import Login from './Login'
import Sell from './sell'

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" width="100px" height="60px" /></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <DropDown />     
            <SearchBar />
            <Login/>
            <Sell this={this}/>
          </div>
        </nav>
        )
    }
} 
export default Navbar;