import React from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import NewComponent from '../main';
import Details from '../detail compo/detail';
// import history from '../router/history'
import Postadd from '../addpost/giveadd';
// import CardProduct from '../card'
import Loginuser from '../login/loginuser';

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={NewComponent} />
                <Route path="/detail" component={Details} />
                <Route path="/loginuser" component={Loginuser} /> 
                <Route path="/giveadd" component={Postadd} />    
                {/* <Route path="/card" component={CardProduct} /> */}
            </Router>
        )
    }
}

export default AppRouter ;