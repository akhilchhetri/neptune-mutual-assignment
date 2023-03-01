import { ITokens } from "../../hooks/useConverter";
interface IInputProps {
  name: ITokens;
  from?: ITokens;
  to?: ITokens;
  label: ITokens;
  placeholder: string | undefined;
  type: string;
  fValue?: number;
  tValue?: number;
  handleChange(a: React.ChangeEvent<HTMLInputElement>, type: string): void;
}

const Input = ({
  name,
  label,
  placeholder,
  fValue,
  tValue,
  type,
  handleChange,
}: IInputProps) => {
  return (
    <div className="my-8">
      <label className="font-bold text-white">{label?.symbol}</label>
      {type === "from" ? (
        <input
          className="w-full rounded-[12px] p-5 text-greyMenu"
          placeholder={placeholder}
          name={name?.symbol}
          value={fValue}
          onChange={(e) => handleChange(e, type)}
        />
      ) : (
        <input
          className="w-full rounded-[12px] p-5 text-greyMenu"
          placeholder={placeholder}
          value={tValue}
          name={name?.symbol}
          onChange={(e) => handleChange(e, type)}
        />
      )}
    </div>
  );
};

export default Input;
