// Custom components
import React, { Fragment }  from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
function InputField(props) {
  const {
    label,
    id,
    extra,
    style,
    type,
    placeholder,
    variant,
    state,
    disabled,
    defaultValue,
    required,
    value,
    onChange,
    onKeyDown,
  } = props;

  return (
    <Box w='100%'>
      <div>
        <FormLabel>
          {label}
        </FormLabel>
        <Input
          disabled={disabled}
          type={type}
          id={id}
          name={id}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          onKeyDown={onKeyDown}
          style={style}
          rounded="md"
          className={`form-control ${
            disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : state === "error"
              ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
              : state === "success"
              ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
              : "border-gray-200 dark:!border-white/10 dark:text-white"
          }`}
        />
      </div>
    </Box>
  );
}

export default InputField;
