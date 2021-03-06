# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class weathercard(Component):
    """A weathercard component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- forecastTime (string; optional)
- city (string; optional)
- conditions (string; optional)
- iconUrl (string; optional)
- temperature (string; optional)
- windSpeed (string; optional)
- id (string; optional): The ID used to identify this component in Dash callbacks
- label (string; required): A label that will be printed when this component is rendered.
- value (string; optional): The value displayed in the input"""
    @_explicitize_args
    def __init__(self, forecastTime=Component.UNDEFINED, city=Component.UNDEFINED, conditions=Component.UNDEFINED, iconUrl=Component.UNDEFINED, temperature=Component.UNDEFINED, windSpeed=Component.UNDEFINED, id=Component.UNDEFINED, label=Component.REQUIRED, value=Component.UNDEFINED, **kwargs):
        self._prop_names = ['forecastTime', 'city', 'conditions', 'iconUrl', 'temperature', 'windSpeed', 'id', 'label', 'value']
        self._type = 'weathercard'
        self._namespace = 'weather_card'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['forecastTime', 'city', 'conditions', 'iconUrl', 'temperature', 'windSpeed', 'id', 'label', 'value']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['label']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(weathercard, self).__init__(**args)
