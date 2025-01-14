import React from "react";
import {Input} from "./../elements/filterStyle"

const InputSearch = ({ value, onChange, placeholder }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
}

export default InputSearch;