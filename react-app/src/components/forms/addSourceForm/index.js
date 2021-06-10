import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateSourceForm from './addSourceForm';
import {Button} from "@material-ui/core"

function CreateSourceFormModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button  size="small" onClick={() => setShowModal(true)}>Add a Source</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSourceForm feedId={props.feedId} setFeedId={props.setFeedId}/>
        </Modal>
      )}
    </>
  );
}

export default CreateSourceFormModal;
