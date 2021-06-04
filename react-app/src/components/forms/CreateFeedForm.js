import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {add} from '../../store/feeds'
import {Button, TextField} from "@material-ui/core"

function CreateFeedForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
   dispatch(add(name))
   setName('')
  }

  return (
    <form>
    <TextField
    value={name}
    onChange={e=>setName(e.target.value)}
    label="Name Your Feed"
    ></TextField>
    <Button size="small" onClick={onSubmit}>submit</Button>
  </form>
  );
}

export default CreateFeedForm;
