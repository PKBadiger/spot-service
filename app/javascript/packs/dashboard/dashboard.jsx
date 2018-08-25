// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from '../core-components/main/main';
import Header from '../core-components/header/header';
import {Footer} from '../core-components/footer/footer';
import Carousel from './components/carousel';

import style from '../styles-sheets/index.scss';

export default class Dashboard extends React.Component {
    
    render(){
        return (
            <CssBaseline>
                <div>
                    <div className="global-wrapper">
                        <div className="header-container">
                            <Header />
                        </div>
                        <Main> 
                            <Carousel />
                        </Main>
                    </div>
                    <Footer />
                    
                </div>
            </CssBaseline>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.getElementById('dashboard-container'),
  )
})
