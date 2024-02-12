// Custom components
import React, { Fragment }  from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Textarea
} from '@chakra-ui/react';
function InputField(props) {
  const { label, id, extra, placeholder, cols, rows, state, disabled, onChange, required, value } = props;

  return (
    <Box w='100%'>
      <FormLabel>
        {label}
      </FormLabel>
      <Textarea
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          onChange={onChange}
          value={value}  
          required={required}
          style={{ height: 180 }}
          className={`form-control border-gray-200 dark:!border-white/10 dark:text-white ${
              disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : state === "error"
              ? "!border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
              : state === "success"
              ? "!border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
              : disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : "border-gray-200 dark:!border-white/10 dark:text-white"
          }`}
          name={id}
          id={id}
      />
    </Box>
  );
}

export default InputField;
