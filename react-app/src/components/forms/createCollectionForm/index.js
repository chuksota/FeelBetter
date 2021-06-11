import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateFeedForm from './CreateFeedForm';
import {Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=> ({
  color: {
    color:'#fff'
  }
}))

function CreateFeedFormModal(props) {
  const classes = useStyles()
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button  size="small" className={classes.color} onClick={() => setShowModal(true)}>Add a Collection</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateFeedForm feedId={props.feedId} setFeedId={props.setFeedId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateFeedFormModal;
