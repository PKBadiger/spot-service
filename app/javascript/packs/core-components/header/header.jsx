import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
  };

class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                             { /* <IconButton color="inherit" aria-label="Open drawer">
                                <MenuIcon />
                            </IconButton> */}
                            <Typography variant="title" color="inherit" className={classes.flex}> Spot Service </Typography>
                            <AccountCircle  />
                        </Toolbar>
                    </AppBar>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles) (Header);