import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '../../Pages/Homepage';
import Agency from '../../Pages/Agency';
import Services from '../../Pages/Services';
import Work from '../../Pages/Work';
import Contact from '../../Pages/Contact';
// import { Button } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';


const index = ()=>  {
    return (
        <div>
            <Router> 
                < Navbar />
                <Switch>
                   <Route path="/" exact component={Homepage} /> 
                   <Route path="/profil" exact component={Agency} /> 
                   <Route path="/profil" exact component={Services} /> 
                   <Route path="/profil" exact component={Work} /> 
                   <Route path="/profil" exact component={Contact} /> 
                   <Redirect to='/' />
                </Switch>
            </Router>
        </div>
    )
}

export default index;