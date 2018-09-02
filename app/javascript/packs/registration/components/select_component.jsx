import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SelectComponent extends React.Component {

    render(){
        const { classes } = this.props;
        const menuItems = this.props.menuItems;
        const label = this.props.label;
        const name = this.props.name;
        const id = this.props.id;

        return (
            <React.Fragment>
                <form  noValidate autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-simple"> {label} </InputLabel>
                            <Select
                                value=""
                                inputProps={{
                                name: {name},
                                id: {id},
                                }}
                                onSelect={this.props.onSelectItem}
                            >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            {menuItems.map((value, index) => {
                                return (
                                    <MenuItem key={index} value={value}>{value}</MenuItem>
                                )
                            })}
                            
                        </Select>
                    </FormControl>
                </form>
            </React.Fragment>
        )
    }
}

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
});

export default withStyles(styles) (SelectComponent);