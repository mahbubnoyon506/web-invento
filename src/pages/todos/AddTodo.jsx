import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { addToTodo } from "../../redux/features/Todos";


export default function AddTodo({ addTodo, setAddTodo }) {
  const todoList = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");
  const [value, setValue] = useState("true");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClose = () => {
    setAddTodo(false);
  };
  console.log(value);
  return (
    <div>
      <Dialog
        open={addTodo}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add todos to the list."}
        </DialogTitle>
        <DialogContent>
          <div>
            <FormControl>
              <input
                className="border p-1 bg-slate-300 focus:outline-none"
                type="text"
                name="title"
                id=""
                placeholder="Todo title"
                onChange={(e) => setTodoTitle(e.target.value)}
              />
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Completed"
                />
                <FormControlLabel
                  className="mt-2"
                  value="false"
                  control={<Radio />}
                  label="Incomplete"
                />
              </RadioGroup>
              <Button
                sx={{
                  background: "#16a34a",
                  color: "#fff",
                  "&:hover": { background: "#16a34a" },
                }}
                type="submit"
                variant="contained"
                onClick={() => {
                  dispatch(
                    addToTodo({
                      userId: 1,
                      id: todoList[todoList.length - 1].id + 1,
                      title: todoTitle,
                      completed: value,
                    })
                  );
                  handleClose();
                }}
              >
                Add Todo
              </Button>
            </FormControl>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
