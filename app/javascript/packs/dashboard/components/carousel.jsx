import React from 'react'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';

import image2 from './images/bikecar1.jpg';
import image3 from './images/bike1.png';
import image4 from './images/singlebike.jpg';

import ServiceCards from './service_cards';
import punctureImage from './images/puncture.jpeg';
import fuelImage from './images/fuel.jpeg';
import chainImage from './images/chain.png';
import cableImage from './images/cable.jpg';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import customeStyle from './style/carousel_custome_style.scss';

class CarouselComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <Grid container spacing={8} className={classes.root}>
                <Grid item lg={12} sm={12} xs={12}>
                    <Carousel
                        className="carousel-container"
                        infiniteLoop
                        autoPlay
                        showThumbs={false}
                        interval={3000}
                        width="100%">
                    <div>
                        <img src={image4} />
                    </div>
                    <div>
                        <img src={image2} />
                    </div>
                    <div>
                        <img src={image3} />
                    </div>
                    </Carousel>
                </Grid>
                <Grid item lg={3} sm={3} xs={3}>
                    <ServiceCards title="Puncture" 
                                  subtitle="Bike Puncture Service" 
                                  image={punctureImage} 
                                  content="We help you with all type of puncture repairs. This includes all type of bikes with both tube and tubeless tyres" />
                </Grid>
                <Grid item lg={3} sm={3} xs={3}>
                    <ServiceCards title="Fuel Delivery" 
                                    subtitle="Emergency Fuel Delivery" 
                                    image={fuelImage} 
                                    content="We help you when you run out of fuel and require emergency delivery to your spot" />
                </Grid>
                <Grid item lg={3} sm={3} xs={3}>
                    <ServiceCards title="Cabel Problems" 
                                    subtitle="Cabel Replacement and Repair" 
                                    image={cableImage} 
                                    content="We help you when you need to change damaged cabel or repair of cabel-related issues in your bike" />
                </Grid>
                <Grid item lg={3} sm={3} xs={3}>
                    <ServiceCards title="Chain Problems" 
                                        subtitle="Chain Related Repair" 
                                        image={chainImage} 
                                        content="We help you when you need repairs of chain-related issues in your bike" />
                </Grid>
            </Grid>
        );
    }

}

const style = theme => ({ 
    root:{
        padding: '20px'
    },
    media: {
        height: 10,
        paddingTop: '43%', // 16:9
    },
    
});

export default withStyles(style) (CarouselComponent);