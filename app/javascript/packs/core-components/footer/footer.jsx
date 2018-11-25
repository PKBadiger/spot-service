import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


 export default class Footer extends React.Component {

    handleOnClickTermsAndConditions = () => {
        window.location.replace("/terms_and_conditions");
    }

    handleOnClickAboutUs = () => {
        window.location.replace("/about_us");
    }

    render() {
        return (
            <footer id="app-footer" className="footer">
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="body2" color="inherit"> 
                            Copyright
                            ©
                            2018
                            DriveAid.
                            All rights reserved. 
                        </Typography>

                        
                        <Typography variant="body2" color="inherit" style={{marginLeft:'63%'}}> 
                            <span onClick={this.handleOnClickTermsAndConditions} > Terms And Conditions</span>
                        </Typography>
                        <Typography variant="body2" color="inherit" style={{marginLeft:'1%'}} > 
                            <span onClick={this.handleOnClickAboutUs} > About Us</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </footer>
        )
    }

}