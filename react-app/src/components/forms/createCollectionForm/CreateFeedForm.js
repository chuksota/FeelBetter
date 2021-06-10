import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {add} from '../../../store/session'
import {Button, TextField} from "@material-ui/core"
import "./CreateForm.css"
function CreateFeedForm({feedId, setFeedId }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
   dispatch(add(name)).then(()=> setFeedId(!feedId))
   setName('')
  }

  return (
    <div className='form--div'>
    <form className="create__form">
    <TextField
    value={name}
    onChange={e=>setName(e.target.value)}
    label="Name Your Feed"
    ></TextField>
    <Button size="small" onClick={onSubmit}>submit</Button>
  </form>
  </div>
  );
}

export default CreateFeedForm;
