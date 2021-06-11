import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addSource} from '../../../store/sources'
import {Button, TextField} from "@material-ui/core"
import './addSource.css'

function CreateSourceForm({feedId, setFeedId, setShowModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
   dispatch(addSource(name, url)).then(()=> setFeedId(!feedId))
   setShowModal(false)
   setName('')
  }

  return (
    <div className='add-source__container'>
    <h1 className='create-source--header'>Couldn't find your favorite source for psych news? Add one here!</h1>
    <form className="create__form">
    <TextField
    value={name}
    onChange={e=>setName(e.target.value)}
    label="Name Your Feed"
    ></TextField>
    <TextField
    value={url}
    onChange={e=>setUrl(e.target.value)}
    label="Please insert an rss link" />
    <Button size="small" onClick={onSubmit}>submit</Button>
  </form>
  </div>
  );
}

export default CreateSourceForm;
