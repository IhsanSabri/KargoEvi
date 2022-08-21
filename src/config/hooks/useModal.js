import { useState } from "react";

export function useModal() {
  const [isModalVisible, setModalState] = useState(false);

  const openModal = () => {
      console.log('opened')
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return { isModalVisible, openModal, closeModal };
}
