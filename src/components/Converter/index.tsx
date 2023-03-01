import Input from "../Input";
import { ArrowSwapVertical } from "iconsax-react";
import { useConverter } from "../../hooks/useConverter";

const Converter = ({ showModal }: any) => {
  const {
    handleSwap,
    from,
    to,
    fromValue,
    toValue,
    handleFirstFieldChange,
    handleSecondFieldChange,
  } = useConverter();
  return (
    <div className="h-auto w-[90%] rounded-[12px] bg-darkBg px-10 py-20 lg:w-[40%]">
      <h1 className="text-[24px] font-bold text-white">Coin Converter</h1>
      <div className="">
        <Input
          type="from"
          name={from}
          label={from}
          placeholder="0.0"
          fValue={fromValue}
          handleChange={handleFirstFieldChange}
        />
        <div className="flex flex-row justify-center">
          <ArrowSwapVertical
            size="48"
            className="cursor-pointer rounded-full bg-greyMenu p-2 text-center text-white"
            onClick={() => {
              handleSwap();
            }}
          />
        </div>
        <Input
          type="to"
          name={to}
          label={to}
          placeholder="0.0"
          tValue={toValue}
          handleChange={handleSecondFieldChange}
        />
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="self-center text-center text-[18px] font-bold text-blue underline"
          onClick={() => showModal((ps: any) => !ps)}
        >
          Check Wallet Details
        </button>
      </div>
    </div>
  );
};

export default Converter;
