import React,{useContext} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import '../styles/container.css'
import TodoContext from './contexts/TodoContext'
import MInput from "./MInput";

export default function Container() {
    const todoData = useContext(TodoContext);
  return (
    <Box className="container" sx={{ flexGrow: 1 }}>
    <h1>Todo List</h1>
    <MInput/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={4}>
          <div className="cards">
            <h1>Pending</h1>
            <hr/>
            {
                todoData.pending.map((e,i)=>(
                    <h2 key={i}>
                        {e}
                    </h2>
                ))
            }
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
        <div className="cards">
            <h1>In progress</h1>
            <hr/>
            {
                todoData.inprogress.map((e,i)=>(
                    <h2 key={i}>
                        {e}
                    </h2>
                ))
            }
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
        <div className="cards">
            <h1>Done</h1>
            <hr/>
            {
                todoData.done.map((e,i)=>(
                    <h2 key={i}>
                        {e}
                    </h2>
                ))
            }
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
