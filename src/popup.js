import React, { useState } from "react";
import { Button, ModalHeader, Modal } from "reactstrap";
const PopUp = ({ idMessage }) => {
  // create state `open` with default as false

  const [open, setOpen] = useState(false);

  const openModel = () => {};
  return (
    <>
      <Modal size="lg" isOpen={open} toggleOpen={() => setOpen(!open)}>
        <ModalHeader toggleOpen={() => setOpen(!open)}>popup</ModalHeader>
      </Modal>
      <Button color="danger" onClick={() => setOpen(true)}>
        Danger!
      </Button>
      {/* click of button toggles `open` value therefore visibility */}
      {/* <button
        onClick={() => setOpen(!open)}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${idMessage}`}
      >
        {idMessage}
      </button> */}
      {/* If open is true show your <div /> */}
      {/* {open && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          open model/popup
        </div> */}
      {/* ) */}
    </>
  );
};
export default PopUp;
