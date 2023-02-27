const WalletNotConnected = ({ showModal }) => {
  return (
    <div
      id="walletNotConnected"
      className="fixed top-0 left-0 right-0 z-50 flex h-[100%] w-full flex-row items-center justify-center overflow-y-auto  overflow-x-hidden bg-[#1D2939D6]"
    >
      <div class="relative h-auto w-full max-w-[90%] md:max-w-[50%]">
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div class="flex items-start justify-between rounded-t border-b border-primary p-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Wallet details
            </h3>
            <button
              type="button"
              class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal"
              onClick={() => showModal((ps) => !ps)}
            >
              <svg
                class="h-5 w-5"
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
          <div class="w-full py-10 px-5">
            <h2 className="text-center text-red-400">
              Wallet not connected. Please click the "Connect Now" button below.
            </h2>
          </div>
          <div class="flex w-full flex-row items-center justify-around border-t  border-primary py-4">
            <button
              type="button"
              class="hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[40%] rounded-lg bg-blue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Connect Now
            </button>
            <button
              type="button"
              onClick={() => showModal((ps) => !ps)}
              class="focus:ring-blue-300 w-[40%] rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletNotConnected;
