import React, { useContext } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { TransactionContext } from "../context/TransactionContext";

const ConnectWallet = () => {
  const {
    isMetaMaskInstall,
    installMetamask,
    connectWallet,
    loading,
  } = useContext(TransactionContext);

  return (
    <>
      <Box
        textAlign="center"
        py={10}
        px={6}
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Image
            src="/assests/images/MetaMask_logo.png"
            alt="metamask"
            w="100px"
            h="100px"
            mt={1}
          />
        </Box>

        <Heading as="h2" size="xl" mt={6} mb={2}>
          {isMetaMaskInstall ? "Connect to MetaMask" : "Install MetaMask"}
        </Heading>

        <Text color={"gray.500"}>
          {isMetaMaskInstall
            ? "Make sure you connect to gorli testnet to use this app."
            : "MetaMask is a browser extension that allows you to access your Ethereum wallet and interact with decentralized applications."}
        </Text>

        <Box mt={9}>
          <Button
            isLoading={loading}
            loadingText='Connecting...'
            colorScheme="blue"
            onClick={isMetaMaskInstall ? connectWallet : installMetamask}
          >
            {loading
              ? "Loading..."
              : isMetaMaskInstall
              ? "Connect Wallet"
              : "Install MetaMask"}
          </Button>
         
        </Box>
      </Box>
    </>
  );
};

export default ConnectWallet;
