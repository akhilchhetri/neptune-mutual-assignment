import { useState, useEffect, useMemo } from "react";

export const useModal = () => {
  const [modal, showModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  return {
    modal,
    showModal,
  };
};
