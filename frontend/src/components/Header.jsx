import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { shortenAddress } from "../utils";

const Header = () => {
  const { account } = useContext(TransactionContext);

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading lineHeight="tall">My Memories</Heading>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7} display={"contents"}>
              <Box>
                {shortenAddress(account)}
              </Box>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
