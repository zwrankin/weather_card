import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './weathercard.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class weathercard extends Component {

    render() {
        const {id, label, city, setProps, value} = this.props;

        return (
            <div id={id} className="weather-card">
                <img src='http://openweathermap.org/img/w/10d.png' className="wind-arrow"/>
                <h1>{city}</h1>
                ExampleComponent: {label}&nbsp;
                <input
                    value={value}
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        e => setProps({ value: e.target.value })
                    }
                />
            </div>
        );
    }
}

weathercard.defaultProps = {
    city: "Chicago"
};

weathercard.propTypes = {
    /**
     * City
     */
    city: PropTypes.string,
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};