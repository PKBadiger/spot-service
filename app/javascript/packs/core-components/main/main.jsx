import React from 'react'
import PropTypes from 'prop-types'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            children
        } = this.props;
        return (
            <main>
                {children}
            </main>
        )
    }
}

Main.propTypes = {
    /**
     * The component(s) that will be wrapped by `<Main />`.
     */
    children: PropTypes.node.isRequired
}
