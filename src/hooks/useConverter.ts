import { useState, useEffect } from "react";

export interface ITokens {
  currency: string;
  symbol: string;
  price: number;
}
export const Tokens: Array<ITokens> = [
  { currency: "Neptune", symbol: "NEP", price: 3.0 },
  { currency: "BUSD", symbol: "BUSD", price: 1.0 },
];
export const useConverter = () => {
  const [from, setFrom] = useState(Tokens[0]);
  const [to, setTo] = useState(Tokens[1]);
  const [fromValue, setFromValue] = useState<number | undefined>(undefined);
  const [toValue, setToValue] = useState<number | undefined>(undefined);

  const handleSwap = () => {
    if (from?.symbol === Tokens[0]?.symbol) {
      setFrom(Tokens[1]);
      setTo(Tokens[0]);
    }
    if (from?.symbol === Tokens[1]?.symbol) {
      setFrom(Tokens[0]);
      setTo(Tokens[1]);
    }
  };
  const handleFirstFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let a = e.target.value as any;
    setFromValue(a);
    let to_value = (a * from?.price) / to?.price;
    setToValue(parseFloat(to_value?.toFixed(2)));
  };
  const handleSecondFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let a = e.target.value as any;
    setToValue(a);
    let from_value = (a * to?.price) / from?.price;
    setFromValue(parseFloat(from_value?.toFixed(2)));
  };
  useEffect(() => {
    if (fromValue && toValue) {
      let a = fromValue;
      let b = toValue;
      setFromValue(b);
      setToValue(a);
    }
  }, [from, to]);
  return {
    from,
    to,
    setFrom,
    setTo,
    handleSwap,
    fromValue,
    toValue,
    handleFirstFieldChange,
    handleSecondFieldChange,
    setFromValue,
    setToValue,
  };
};
