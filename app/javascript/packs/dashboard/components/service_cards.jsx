import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import image1 from './images/puncture.jpeg';

class ServiceCards extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Card>
                    <CardHeader
                        title={this.props.title}
                        subheader={this.props.subtitle}
                    />
                    <CardMedia
                        className={classes.media}
                        image={this.props.image}
                    />
                    <CardContent>
                        <Typography component="p">
                            {this.props.content}
                        </Typography>
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}

const style = theme => ({ 
    media: {
        height: 10,
        paddingTop: '43%',
    },
    
});

export default withStyles(style) (ServiceCards);