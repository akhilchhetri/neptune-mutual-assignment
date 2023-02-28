import { useState } from "react";
export const useModal = () => {
  const [modal, showModal] = useState<boolean>(false);
  return {
    modal,
    showModal,
  };
};
