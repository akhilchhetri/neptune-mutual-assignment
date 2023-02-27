import { useState, useEffect } from "react";
import "./App.css";
import Converter from "./components/Converter";
import { NeptuneLogo } from "./components/Icons";
import { useModal } from "./hooks/useModal";
import WalletNotConnected from "./components/Modal/WalletNotConnected";
import { react } from "@babel/types";

function App() {
  const { modal, showModal } = useModal();
  useEffect(() => {}, [modal]);
  return (
    <div className="relative flex min-h-[100vh] w-full flex-col items-center justify-center gap-10 bg-primary">
      <header>
        <NeptuneLogo />
      </header>
      {modal && <WalletNotConnected showModal={showModal} />}
      <Converter showModal={showModal} />
    </div>
  );
}

export default App;
