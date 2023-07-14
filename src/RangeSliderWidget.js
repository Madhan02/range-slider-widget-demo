import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

const RangeSliderWidget = ({ value, onChange, schema }) => {
    const { minimum, maximum, step } = schema;
  
    const handleChange = (newValues) => {
      onChange(newValues);
    };
  
    return (
      <Slider.Range
        min={minimum}
        max={maximum}
        step={step}
        value={value}
        onChange={handleChange}
      />
    );
  };
  
  RangeSliderWidget.propTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
    schema: PropTypes.object,
  };
  
  export default RangeSliderWidget;
  