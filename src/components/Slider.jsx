import React, { useState } from "react";
import { Slider } from "@mui/material";
import "./Slider.css";

const SliderComponent = ({ minValue, maxValue, value, onChange }) => {
  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    onChange(value); // Call the onChange prop with the updated value
  };
  const returnX = () => {
    return "Text";
  };
  return (
    <div>
      <Slider
        className="customSlider"
        size="medium"
        aria-label="Custom-marks"
        marks
        defaultValue={0}
        valueLabelDisplay="auto"
        step={1}
        min={minValue}
        max={maxValue}
        value={value}
        getArialValueText={returnX}
        onChange={handleSliderChange}
      />
      <input
        type="number"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default SliderComponent;
