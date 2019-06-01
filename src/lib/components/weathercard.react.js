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
        const {id, label, forecastTime, city, temperature, windSpeed, conditions, iconUrl, setProps, value} = this.props;

        return (
            <div id={id} className="weather-card">
                <h6>Forecast for {forecastTime} </h6>
                <img src={iconUrl} className="weather-icon" height="60"/>
                <h1>{temperature}</h1>
                <img src="https://static.thenounproject.com/png/493928-200.png" className="wind-arrow" height="40"/>
                <h4>{windSpeed}</h4>
                <p>{conditions}</p>
                <h3>{city}</h3>
            </div>
        );
    }
}

weathercard.defaultProps = {
    forecastTime: "April 8 at 6pm",
    city: "Chicago",
    temperature: "80",
    windSpeed: "8mph",
    conditions: "Sunny and warm, baby!",
    iconUrl: 'http://openweathermap.org/img/w/10d.png'
};

weathercard.propTypes = {
    forecastTime: PropTypes.string,
    city: PropTypes.string,
    conditions: PropTypes.string,
    iconUrl: PropTypes.string,
    temperature: PropTypes.string,
    windSpeed: PropTypes.string,

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
