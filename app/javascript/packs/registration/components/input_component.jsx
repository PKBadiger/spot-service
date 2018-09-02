import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


class InputTextField extends React.Component {

    onChangeText = (event) =>{
        this.props.onChangeText(event.target.value);
    }

    render() {
        const { classes } = this.props;
        let required = this.props.required;
        let id = this.props.id;
        let label = this.props.label;
        let defaultValue = this.props.defaultValue;
        let type = this.props.type;
        let helperText = this.props.helperText;
        let error = this.props.error ? true : false;
        let value = this.props.value;
        return (
            <TextField
                error = {error}
                required = {required}
                type={type}
                id={id}
                label={label}
                value={value}
                defaultValue={defaultValue}
                className={classes.textField}
                onChange={this.onChangeText}
                helperText={helperText}
                margin="normal"
            />
        )
    }
}

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
});

export default withStyles(styles) (InputTextField);