import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateFeedForm from './CreateFeedForm';
import {Button} from "@material-ui/core"

function CreateFeedFormModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button  size="small" onClick={() => setShowModal(true)}>Add a Collection</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateFeedForm feedId={props.feedId} setFeedId={props.setFeedId}/>
        </Modal>
      )}
    </>
  );
}

export default CreateFeedFormModal;
