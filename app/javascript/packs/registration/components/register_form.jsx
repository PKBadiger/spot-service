import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';


import PersonalDetails from './personal_details';
import BikeDetails from './bike_details';
import PreviewInfo from './preview_info';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0
        }
    }

    getSteps = () => {
        return ['Personal Details', 'Bike Details', 'Preview Details'];
    }

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    }

    render() {
        const {classes} = this.props;
        const steps = this.getSteps();
        let activeStep = this.state.activeStep;
        return(
            <React.Fragment> 
                <div className={classes.root}>
                    <Paper elevation={1} className={classes.paper}>
                        <Grid container >
                            <Grid item lg={12} sm={12} xl={12}>
                                <Stepper activeStep={activeStep} alternativeLabel>
                                    {steps.map((label,index) => {
                                        return(
                                            <Step key={label}>
                                                <StepLabel> {label} </StepLabel>
                                            </Step>
                                        )
                                    })}
                                </Stepper>
                                
                            </Grid>
                            <Grid item lg={12} sm={12} xl={12}>
                                <div className={classes.stepperContainer}>
                                    {activeStep === 0 ? 
                                        <PersonalDetails />
                                     : activeStep === 1 ?
                                        <BikeDetails />
                                        :
                                        <PreviewInfo />
                                    }
                                    {activeStep === steps.length ? 
                                        <div> All Steps are Completed </div>
                                    :<div className={classes.stepperActionButton} >
                                    <Button disabled={activeStep===0}
                                            className={classes.backButton}
                                            onClick={this.handleBack}
                                    > Back 
                                    </Button>
                                    <Button variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ? "FINISH" : "NEXT"}
                                    </Button></div>
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>   
            </React.Fragment>
        )
    }
}

const style = theme => ({
    root: {
        width: "80%",
        margin: '20px auto',
        marginTop: '6.7%'
    },
    paper: {
        padding: 20
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    stepperContainer: {
        padding: 20
    },
    stepperActionButton:{
        float: "right"
    }
})

export default withStyles(style)(RegisterForm);