import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";
import UpdateTodo from "./UpdateTodo";
import { removeTodo } from "../../redux/features/Todos";

const Todos = () => {
  const todoList = useSelector((state) => state.todos.value);
  console.log(todoList);
  const dispatch = useDispatch()
  const [addTodo, setAddTodo] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(false);

  const handleClickOpen = () => {
    setAddTodo(true);
  };
  const handleClickOpenUpdate = () => {
    setUpdateTodo(true);
  };

  return (
    <div className="bg-slate-900 p-5 md:p-10 lg:p-20" style={{ color: "#000" }}>
      <div className="flex justify-end mb-3">
        <Button
          sx={{
            background: "#f8fafc",
            color: "#000",
            "&:hover": { background: "#f8fafc" },
          }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add Todo
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {todoList.map((todo, index) => (
          <div className="bg-slate-700 p-3 md:p-6 lg:p-9 rounded shadow-lg">
            <p className="text-slate-50 capitalize text-lg md:text-xl lg:text-2xl">
              {todo.title.slice(0, 20)}
            </p>
            <div className="flex mt-2">
              <p className="text-slate-50 mr-2">Status:</p>
              <p
                className={`${
                  todo.completed ? "text-green-500" : "text-rose-500"
                }`}
              >
                {" "}
                {todo.completed ? "Completed" : "Incomplete"}{" "}
              </p>
            </div>
            <div>
              <div className="flex gap-3 mt-5">
                <Button
                  sx={{
                    background: "#f8fafc",
                    color: "#000",
                    "&:hover": { background: "#f8fafc" },
                  }}
                  variant="contained"
                  onClick={handleClickOpenUpdate}
                >
                  Update
                </Button>
                <Button
                  sx={{
                    background: "#be123c",
                    "&:hover": { background: "#be123c" },
                  }}
                  variant="contained"
                  onClick={() => {
                    dispatch(removeTodo({id: todo.id}));
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
            {
              addTodo && <AddTodo addTodo={addTodo} setAddTodo={setAddTodo} />
            }
            {
              updateTodo && <UpdateTodo todo={todo} updateTodo={updateTodo} setUpdateTodo={setUpdateTodo} />
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
