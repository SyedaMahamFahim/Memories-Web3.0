import React from "react";
import { Button } from "@chakra-ui/react";

const AppButton = ({ type, text,loading}) => {

  return (
    <>
      <Button
        isLoading={loading}
        loadingText="Loading..."
        type={type}
        w="100%"
        mt={8}
        flex={1}
        px={4}
        fontSize={"sm"}
        bg={"blue.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
      >
       {text}
      </Button>
    </>
  );
};

export default AppButton;
