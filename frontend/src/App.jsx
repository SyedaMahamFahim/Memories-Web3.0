import React, { useContext } from "react";
import { Home, ConnectWallet } from "./pages";
import { TransactionContext } from "./context/TransactionContext";

const App = () => {
  const { isMetaMaskConnected } = useContext(TransactionContext);

  return <>{isMetaMaskConnected ? <Home /> : <ConnectWallet />}</>;
};

export default App;
