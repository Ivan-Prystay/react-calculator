import React from "react";
import styled from "styled-components";

const StyledInput = styled.input``;

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
