import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    background-color: black;
    height: 4px;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 40px;
    background: black;
    margin-top: -18px;
  }
  padding: 10px 0;
  margin: 0;
`;

const Range = ({ value, onChange }) => {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    onChange(newValue);
  };

  return (
    <StyledInput
      type="range"
      defaultValue="0"
      min={0}
      max={1000}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Range;
