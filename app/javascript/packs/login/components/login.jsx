import React from 'react'
import ReactDOM from 'react-dom'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import HowToReg from '@material-ui/icons/HowToReg'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            showAuthenticationError: false,
            showUserIdError: false,
            showPasswordError: false,
            userID: '',
            password: '',
        }
    }

    handleUserId = (event) => {
        this.setState({userID: event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleOnClickLogin = () => {
        if (!this.state.userID){
            this.setState({showUserIdError: true, showPasswordError: false})
        } else if (!this.state.password) {
            this.setState({showPasswordError: true, showUserIdError: false})
        } else {
            this.setState({showUserIdError: false, showPasswordError: false})
            console.log("Call Controller here");
        }
    }

    handleShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword})
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper elevation={1} className={classes.paper}>
                    <Grid container spacing={8}>
                        <Grid item lg={12} sm={12} xs={12}>
                            <Typography variant="headline" component="h3">
                                Welcome to Spot Service
                            </Typography>
                            <hr />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={6}>
                            <Typography variant="headline" component="h3" className={classes.alignControls}>
                                Log In 
                            </Typography>
                            { this.state.showAuthenticationError ? <Typography className={classes.alignControls} 
                                        id="user-password-error-message"> 
                                    UserID / Password Did Not Match 
                                </Typography> : ''}
                            <FormControl className={classes.alignControls}>
                                <InputLabel htmlFor="adorment-username"> USER ID </InputLabel>
                                <Input 
                                    id="userId"
                                    onChange={this.handleUserId}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                />
                               { this.state.showUserIdError ? <FormHelperText id="userid-helper-text"> Please Enter UserID </FormHelperText> :''}
                            </FormControl>
                            <FormControl className={classes.alignControls}>
                                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                <Input
                                    id="password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    onChange={this.handlePassword}
                                    endAdornment={
                                        <InputAdornment position="end" className={classes.VisibilityIcon} onClick={this.handleShowPassword}>
                                             {this.state.showPassword ? <VisibilityOff /> : <Visibility /> }
                                        </InputAdornment>
                                    }
                                />
                                { this.state.showPasswordError ? <FormHelperText id="password-helper-text"> Please Enter Password </FormHelperText> :''}
                            </FormControl>
                            <Button variant="contained" color="primary" className={classes.buttonAlignment} onClick={this.handleOnClickLogin}>
                                Log In
                            </Button>
                            <Typography  component="h1" className={classes.buttonAlignment}>
                                Forgot Password ?
                            </Typography>
                        </Grid>
                        <Grid item lg={6} sm={6} xs={6} className={classes.registerGrid}>
                            <Typography variant="headline" component="h3">
                                New to Spot Service ?
                            </Typography>
                            <Button variant="contained" color="primary" className={classes.registerButton}>
                                <HowToReg className={classes.HowToRegIcon} /> Register
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        width: '55%',
        flexGrow: 1,
        margin: 0,
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    paper: {
        padding: 20   
    },
    alignControls: {
        margin: theme.spacing.unit,
        width: "75%"
        
    },
    buttonAlignment: {
        margin: theme.spacing.unit,
        marginTop: '20px'
    },
    registerGrid: {
        paddingLeft: '20px !important',
        borderLeft: '1px solid grey'
    },
    registerButton: {
        width: '85%',
        marginTop:"25%"
    },
    HowToRegIcon: {
        margin: theme.spacing.unit
    },
    VisibilityIcon: {
        cursor: 'pointer'
    }
})

export default withStyles(styles) (Login);

