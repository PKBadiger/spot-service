import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputTextFiled from './input_component';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <form  noValidate autoComplete="off">
                    <InputTextFiled required={true} type="text" id="firstName" label="First Name" defaultValue="" />
                    <InputTextFiled required={true} type="text" id="lastName" label="Last Name" defaultValue="" />
                    <InputTextFiled required={true} type="text" id="mobNumber" label="Mobile Number" defaultValue="" />
                    <TextField
                        id="date"
                        label="DOB"
                        type="date"
                        defaultValue="YYYY-MM-DD"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <InputTextFiled required={true} type="text" id="emailId" label="Email ID" defaultValue="" />
                    <InputTextFiled required={true} type="password" id="password" label="Password" defaultValue="" />
                    <InputTextFiled required={true} type="password" id="confirmPassword" label="Confirm Password" defaultValue="" /><br/>
                    <InputTextFiled required={false} type="text" id="addressLine1" label="Address Line1" defaultValue="" />
                    <InputTextFiled required={false} type="text" id="addressLine2" label="Address Line2" defaultValue="" />
                    <InputTextFiled required={false} type="text" id="pincode" label="Pincode" defaultValue="" />
                </form>
            </div>
        )
    }
}

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      minHeight: 300,
      marginLeft: '10.6%'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
});

export default withStyles(styles) (PersonalDetails);