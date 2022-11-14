import React from "react";
import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
const FormInput = ({ label, type, name, onChange, error, register, tag }) => {
  return (
    <>
      <Box mt={5}>
        <FormControl isInvalid={error}>
          <FormLabel>{label}</FormLabel>

          {tag === "input" ? (
            <Input
              onChange={onChange}
              type={type}
              name={name}
              register={register}
            />
          ) : tag === "textarea" ? (
            <Textarea
              onChange={onChange}
              type={type}
              name={name}
              register={register}
            />
          ) : null}

          {error && (
            <FormErrorMessage
              // style={{
              //   color: "red",
              // }}
            >
              {error.message}
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>
    </>
  );
};

export default FormInput;
