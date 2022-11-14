import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
const SectionTitle = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      mt={10}
    >
      <Heading as="h2" size="lg" mb={4}>
        Create your ever lasting memories
      </Heading>
      <Text>
        All the memories you have will be stored in blockchain. You can only
        view them. You can't delete them.
      </Text>
      <Text>Add only those memories that you want to keep forever.</Text>
    </Box>
  );
};

export default SectionTitle;
