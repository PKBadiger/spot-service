import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios';

import InputTextField from './components/input_component';


class CustomerRegistration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            mobileNumber: '',
            emailId: '',
            password: '',
            confirmPassword: '',
            isFirstNameEmpty: false,
            isLastNameEmpty: false,
            isMobNumberEmpty: false,
            isEmailIdEmpty: false,
            isPasswordEmpty: false,
            isConfirmPasswordEmpty: false,
            isRegisterSuccessOpen: false
        }
    }

    onChangeFirstName = (firstName) => {
        this.setState({firstName: firstName, isFirstNameEmpty: false});
    }

    onChangeLastName = (lastName) => {
        this.setState({lastName: lastName, isLastNameEmpty: false});
    }

    onChangeMobileNumber = (mobNumber) => {
        this.setState({mobileNumber: mobNumber, isMobNumberEmpty: false});
    }

    onChangeEmailId = (emailId) => {
        this.setState({emailId: emailId, isEmailIdEmpty: false});
    }

    onChangePassword = (password) => {
        this.setState({password: password, isPasswordEmpty: false});
    }

    onChangeConfirmPassword = (confirmPassword) => {
        this.setState({confirmPassword: confirmPassword, isConfirmPasswordEmpty: false, passwordDidNotMatch: false});
    }

    handleOnClickRegistration = () => {
        if(!this.state.firstName) {
            this.setState({isFirstNameEmpty: true})
        } else if (!this.state.lastName){
            this.setState({isLastNameEmpty: true})
        } else if (!this.state.mobileNumber) {
            this.setState({isMobNumberEmpty: true})
        } else if(!this.state.emailId) {
            this.setState({isEmailIdEmpty: true})
        } else if(!this.state.password) {
            this.setState({isPasswordEmpty: true})
        } else if (!this.state.confirmPassword) {
            this.setState({isConfirmPasswordEmpty: true})
        } else if (this.state.password != this.state.confirmPassword){
            this.setState({passwordDidNotMatch: true})
        } else {
            axios.get('/register/register_customer', {
                params:{
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    mobNumber: this.state.mobileNumber,
                    emailId: this.state.emailId,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword
                }
            }).then((response) => {
                if(response.data.success){
                    this.setState({isRegisterSuccessOpen: true})
                }
            }).catch((error) => {

            })
        }
    }

    handleOnClickClear = () => {
        this.setState({
            firstName: '',
            lastName: '',
            mobileNumber: '',
            emailId: '',
            password: '',
            confirmPassword: '',
            isFirstNameEmpty: false,
            isLastNameEmpty: false,
            isMobNumberEmpty: false,
            isEmailIdEmpty: false,
            isPasswordEmpty: false,
            isConfirmPasswordEmpty: false
        })
    }

    handleOnCloseDialog = () => {
        this.setState({isRegisterSuccessOpen: false})
        const length=history.length;
        history.go(-length);
        window.location.replace("/login");
    }

    render() {
        const {classes} = this.props;
        
        return (
            <div className={classes.root}>
                <Paper elevation={1} className={classes.paper}>
                    <Grid container spacing={8}>
                        <Grid item lg={12} sm={12} xs={12}>
                            <Typography variant="headline" component="h3">
                                Registration
                            </Typography>
                            <hr />
                        </Grid>
                        <Grid item lg={12} sm={12} xs={12} className={classes.gridControles} >
                            <FormControl className={classes.alignControls}>
                                <InputTextField required={true} type="text" id="firstName" label="First Name" defaultValue="" value={this.state.firstName} 
                                                onChangeText = {this.onChangeFirstName} 
                                                helperText={this.state.isFirstNameEmpty ? "Please Enter First Name" : ''} 
                                                error={this.state.isFirstNameEmpty ? true : false}
                                                />
                                <InputTextField required={true} type="text" id="lastName" label="Last Name" defaultValue="" value={this.state.lastName}
                                                onChangeText={this.onChangeLastName} 
                                                helperText={this.state.isLastNameEmpty ? "Please Enter Last Name" : ''} 
                                                error={this.state.isLastNameEmpty ? true : false} />
                                <InputTextField required={true} type="text" id="mobNumber" label="Mobile Number" defaultValue="" value={this.state.mobileNumber}
                                                onChangeText={this.onChangeMobileNumber} 
                                                helperText={this.state.isMobNumberEmpty ? "Please Enter Mobile Number" : '' }
                                                error={this.state.isMobNumberEmpty ? true : false} />
                            </FormControl>
                            <FormControl className={classes.alignControls}>
                                <InputTextField required={true} type="text" id="emailId" label="Email ID" defaultValue="" value={this.state.emailId} 
                                                onChangeText={this.onChangeEmailId} 
                                                helperText={this.state.isEmailIdEmpty ? "Please Enter Email ID" : ''}
                                                error={this.state.isEmailIdEmpty ? true : false} />
                                <InputTextField required={true} type="password" id="password" label="Password" defaultValue="" value={this.state.password}
                                                onChangeText={this.onChangePassword} 
                                                helperText={this.state.isPasswordEmpty ? "Please Enter Password" : ''} 
                                                error = {this.state.isPasswordEmpty ? true : false} />
                                <InputTextField required={true} type="password" id="confirmPassword" label="Confirm Password" defaultValue="" value={this.state.confirmPassword}
                                                onChangeText={this.onChangeConfirmPassword} 
                                                helperText={this.state.isConfirmPasswordEmpty ? "Please Enter Confirm Password" : this.state.passwordDidNotMatch ? "Please Enter Same Password" : ''} 
                                                error = {this.state.isConfirmPasswordEmpty || this.state.passwordDidNotMatch ? true : false} />
                            </FormControl>
                            <Button variant="contained" color="primary" className={classes.buttonAlignment} onClick={this.handleOnClickRegistration}>
                                REGISTER
                            </Button>
                            <Button variant="contained" color="primary" className={classes.buttonAlignment} onClick={this.handleOnClickClear}>
                                CLEAR
                            </Button>
                        </Grid>
                        <Dialog 
                            open={this.state.isRegisterSuccessOpen}
                            
                            >
                            <DialogTitle id="register-success">
                                Register Successfull
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Registration Success with Drive Aid. Upon clicking on "OK" button you will be redirected to LogIn Page
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button color="primary" autoFocus onClick={this.handleOnCloseDialog}>
                                    OK
                                </Button>
                            </DialogActions>

                        </Dialog>
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
        width: "100%",
        flexDirection: 'row'
        
    },
    buttonAlignment: {
        margin: theme.spacing.unit,
        marginTop: '20px'
    },
    
})

export default withStyles(styles) (CustomerRegistration);

