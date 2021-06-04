import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateFeedForm from './CreateFeedForm';
import {Button} from "@material-ui/core"

function CreateFeedFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button  size="small" onClick={() => setShowModal(true)}>Add a feed</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateFeedForm/>
        </Modal>
      )}
    </>
  );
}

export default CreateFeedFormModal;
