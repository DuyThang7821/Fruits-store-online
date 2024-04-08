import React from "react";
import Modal from "@mui/material/Modal";

const ModalWrapper = ({ show, handleCloseModal, children }) => {
  return (
    <div>
      <Modal
        open={show}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalWrapper;
