import React from 'react';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export const Footer = () =>
    <footer id="app-footer" className="footer">
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="body2" color="inherit"> 
                    Copyright
                    ©
                    2018
                    Spot Service.
                    All rights reserved. 
                </Typography>
            </Toolbar>
        </AppBar>
    </footer>