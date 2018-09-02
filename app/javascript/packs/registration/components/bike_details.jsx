import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import SelectComponent from './select_component';
import InputTextFiled from './input_component';

class BikeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bikeName: ''
        }
    }

    getBikeNames = () => {
        return (
            ['BAJAJ', 'KTM', 'TVS', 'HONDA', 'HERO','YAMAHA', 'SUZUKI', 'ROYAL ENFIELD']
        )
    }

    onSelectBikeName = (event) => {
        this.setState({bikeName: event.target.value})
    }

    render() {
        const { classes } = this.props;
        const bikeNames = this.getBikeNames();

        return(
            <div className={classes.container} > 
                <SelectComponent menuItems={bikeNames} label="Bike Name" name="bikeName" id="bikeName" onSelectItem={this.onSelectBikeName}  />
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
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
});

export default withStyles(styles) (BikeDetails);