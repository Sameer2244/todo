import React, { useContext,useEffect } from "react";
import "../styles/input.css";
import TodoContext from "./contexts/TodoContext";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function MInput() {
  const todoData = useContext(TodoContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const oldArray = todoData.todoInput.list;
    todoData.setTodoInput({
      list: [...oldArray, todoData.todoInput.input],
      input: "",
    });
    if(todoData.minput===10){
      todoData.setPending([...todoData.pending,todoData.todoInput.input])
    }else if(todoData.minput===20){
      todoData.setInprogress([...todoData.inprogress,todoData.todoInput.input])

    }else if(todoData.minput===30){
      todoData.setDone([...todoData.done,todoData.todoInput.input])
      
    }
  };
  const handleChange = (event) => {
    todoData.setMInput(event.target.value);
    
  };
    // console.log('pending',todoData.pending);
    // console.log('inprogress',todoData.inprogress);
    // console.log('done',todoData.done);
    
  return (
    <div className="input-container">
      <form>
        <Box sx={{ minWidth: 120,maxWidth:300,margin:'auto' }}>
          <FormControl fullWidth>
            <InputLabel sx={{color:'white',}} id="demo-simple-select-label">Type</InputLabel>
            <Select sx={{color:'white',}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              value={todoData.minput}
              onChange={handleChange}
            >
              <MenuItem value={10}>Pending</MenuItem>
              <MenuItem value={20}>In progress</MenuItem>
              <MenuItem value={30}>Done</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <input
          className="my-input"
          value={todoData.todoInput.input}
          onChange={(e) => {
            todoData.setTodoInput({
              ...todoData.todoInput,
              input: e.target.value,
            });
          }}
        />
        <button className="addbtn" type="submit" onClick={onSubmitHandler}>
          ADD
        </button>
      </form>
    </div>
  );
}
