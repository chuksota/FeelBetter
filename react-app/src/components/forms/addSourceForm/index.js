import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateSourceForm from './addSourceForm';
import {Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=> ({
  color: {
    color:'#fff'
  }
}))
function CreateSourceFormModal(props) {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles()
  return (
    <>
      <Button  size="small"  className={classes.color} onClick={() => setShowModal(true)}>Add a Source</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSourceForm feedId={props.feedId} setFeedId={props.setFeedId}/>
        </Modal>
      )}
    </>
  );
}

export default CreateSourceFormModal;
