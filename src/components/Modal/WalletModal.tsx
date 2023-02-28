import { useWallet, injectedConnector } from "../../hooks/useWallet";
const WalletNotConnected = ({ showModal }: any) => {
  const {
    activate,
    chainId,
    account,
    active,
    deactivate,
    balance,
    library,
    error,
    setError,
  } = useWallet();
  const onClick = async () => {
    try {
      if (window?.ethereum) {
        activate(injectedConnector);
        setError("");
      } else {
        setError("No wallet detected");
      }
    } catch (e) {
      setError("No wallet detected");
    }
  };

  return (
    <div
      id="walletNotConnected"
      className="fixed top-0 left-0 right-0 z-50 flex h-[100%] w-full flex-row items-center justify-center overflow-y-auto  overflow-x-hidden bg-[#1D2939D6]"
    >
      <div className="relative h-auto w-full max-w-[90%] md:max-w-[50%]">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b border-primary p-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Wallet details
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal"
              onClick={() => showModal((ps: any) => !ps)}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {!active && !account && (
            <>
              <div className="w-full py-10 px-5">
                <h2 className="text-center text-red-400">
                  Wallet not connected. Please click the "Connect Now" button
                  below.
                </h2>
                <h3 className="text-24 mt-2 text-center text-red-500">
                  {error}
                </h3>
              </div>
              <div className="flex w-full flex-row items-center justify-around border-t  border-primary py-4">
                <button
                  onClick={onClick}
                  className="hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[40%] rounded-lg bg-blue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Connect Now
                </button>
                <button
                  type="button"
                  onClick={() => showModal((ps: any) => !ps)}
                  className="focus:ring-blue-300 w-[40%] rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
          {account && active && (
            <>
              {chainId === 97 ? (
                <>
                  <div className="w-full py-10 px-5">
                    <table className="w-full table-auto px-4 text-white">
                      <thead className="mb-2 justify-between border-b border-[#ffffff1c]">
                        <tr className="">
                          <th className="text-left">KEY</th>
                          <th className="text-right">VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#ffffff1c]">
                          <td className="text-left">Account</td>
                          <td className="text-right">
                            {account?.substring(0, 4) +
                              "..." +
                              account?.substring(account?.length - 4)}
                          </td>
                        </tr>
                        <tr className="border-b border-[#ffffff1c]">
                          <td className="text-left">Chain ID</td>
                          <td className="text-right">{chainId}</td>
                        </tr>
                        <tr className="border-b border-[#ffffff1c]">
                          <td className="text-left">Balance</td>
                          <td className="text-right">{balance?.toNumber()}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex w-full flex-row items-center justify-around border-t border-primary py-4">
                    <button
                      onClick={() => deactivate()}
                      className="w-[60%] rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4"
                    >
                      Disconnect
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-10 py-10 px-5">
                  <h2 className="font-semibold text-red-600">
                    Please change the Wallet newtwork to Binance Smart Chain -
                    Testnet
                  </h2>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletNotConnected;
