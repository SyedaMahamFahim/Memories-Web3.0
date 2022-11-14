import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils";

const { ethereum } = window;

export const TransactionContext = React.createContext();

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [isMetaMaskInstall, setIsMetaMaskInstall] = useState(false);
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");

  const [transactions, setTransactions] = useState([]);
  const [transactionLoading, setTransactionLoading] = useState(false);
  // Check if MetaMask is installed
  const checkIfMetamaskIsInstalled = () => {
    ethereum ? setIsMetaMaskInstall(true) : setIsMetaMaskInstall(false);
  };

  // Check if Wallet is connected
  const checkIfWalletIsConnected = async () => {
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      setIsMetaMaskConnected(true);
      setAccount(accounts[0]);
      console.log("Found an authorized account:", account);
    } else {
      console.log("No authorized account found");
      setIsMetaMaskConnected(false);
    }
  };

  // Connect wallet
  const connectWallet = async () => {
    setLoading(true);
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      setIsMetaMaskConnected(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Install metamask
  const installMetamask = () => {
    window.open("https://metamask.io/download.html", "_blank");
  };

  // Send transaction
  const sendTransaction = async (data) => {
    console.log("This is form data from context", data);

    try {
      setTransactionLoading(true);
      if (ethereum) {
        const { title, description } = data;
        const transactionsContract = createEthereumContract();

        transactionsContract
          .createTask(title, description)
          .then((response) => {
            console.log("This is respose", response);
            setTransactions([...transactions, data]);
            console.log("Completed Task");
          })
          .catch((err) => {
            console.log("Error occured while adding a new task", err);
          })
          .finally(() => {
            setTransactionLoading(false);
          });
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    } finally {
      setLoading(false);
    }
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions =
          await transactionsContract.getTaskByAddress();

        console.log("alla memoeyr", availableTransactions);
        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            
            title: transaction.title,
            description: transaction.description,
          })
        );

        console.log("structuredTransactions", structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfMetamaskIsInstalled();
    checkIfWalletIsConnected();
    getAllTransactions();
    // eslint-disable-next-line
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{
        isMetaMaskInstall,
        isMetaMaskConnected,
        installMetamask,
        connectWallet,
        loading,
        account,
        sendTransaction,
        transactionLoading,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
