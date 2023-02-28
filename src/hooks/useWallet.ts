import { useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { BigNumber } from "@ethersproject/bignumber";
export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
    97, // BSC Testnet
  ],
});
export const useWallet = () => {
  const [balance, setBalance] = useState<BigNumber>();
  const [error, setError] = useState<string>("");
  const { chainId, account, activate, active, connector, deactivate, library } =
    useWeb3React<Web3Provider>();
  if (account) {
    library?.getBalance(account).then((result) => {
      setBalance(result);
    });
  }

  return {
    activate,
    chainId,
    account,
    active,
    connector,
    deactivate,
    balance,
    library,
    error,
    setError,
  };
};
