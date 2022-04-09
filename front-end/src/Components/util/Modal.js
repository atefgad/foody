import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import { ModalUi, OrderBill } from "../index";

function Modal() {
  const dispatch = useDispatch();
  const { isOpen, componentName } = useSelector((state) => state.modal);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const componentsNames = { OrderBill };
  let renderComponent;

  if (componentName) {
    const SelectedComponent =
      componentsNames[componentName] || componentsNames[0];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent />;
    }
  }
  return (
    <ModalUi show={isOpen} onHide={closeModalHandler}>
      {renderComponent}
    </ModalUi>
  );
}

export default Modal;
