import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";

const MemoryCard = ({title,description}) => {
  return (
    <>
      <Box
        my={{ base: "1rem" }}
        mx={{ base: "1rem", md: "1.5rem", lg: "1rem" }}
        mb={{ md: "1.5rem", lg: "2rem" }}
        maxW={"320px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {title}
        </Heading>

        <Text textAlign={"center"} px={3}>
          {description}
        </Text>
      </Box>
    </>
  );
};

export default MemoryCard;
