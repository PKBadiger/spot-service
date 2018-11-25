import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Carasoul from '../components/carousel';
import TermsAndCondition from '../../core-components/terms-and-conditions/terms_and_conditions';
import AboutUs from '../../core-components/about-us/about_us';

export default class RouteProvider extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Carasoul} />
                <Route path="/terms_and_conditions" component={TermsAndCondition} />
                <Route path="/about_us" component={AboutUs} />
                
            </Switch>
        )
    }
}

