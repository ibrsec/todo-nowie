"use client";
import { useTodoContext } from "@/context/TodoProvider";
import ChevronR from "@/assets/icons/ChevronR";

import React, { useEffect } from "react";
import NewStepInput from "../components/NewStepInput";
import EditIcon from "@/assets/icons/EditIcon";
import DeleteIcon from "@/assets/icons/DeleteIcon";

const DetailTodo = ({ params }) => {
  console.log("detaila page", { params });

  const { allTodos, getTodos,putTask,deleteTask } = useTodoContext();
  useEffect(() => {
    getTodos();
  }, []);
  console.log(allTodos);
  const selectedTodo = allTodos?.filter((todo) => todo.id === params.id)[0];
  console.log("selectedtodo = ", selectedTodo);

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-center font-semibold my-5 px-2">
        Detail Todo
      </h3>
      <p className="my-2 capitalize">Task: {selectedTodo?.taskName || 'Loading...'}</p>
      <p className="my-2 capitalize">Task status: {selectedTodo?.status === 0 ? "Newly Created.": selectedTodo?.status === 1 ? "Inprogress" : selectedTodo?.status === 2 ? "Completed" : 'Loading...'}</p>
      <p className="my-2">Task steps:</p>
      <div className="flex flex-col justify-center gap-4 my-5 px-4">
        {selectedTodo?.description.sort((a,b) => (a.stepName > b.stepName) ? 1 : ((b.stepName > a.stepName) ? -1 : 0)).map((item, i) => (
          <div key={i} className="flex items-center gap-2 border-b-2 pb-1 ">
            <input
              type="checkbox"
              className="bg-violet-200 rounded-full"
              checked={item?.completed}
              onChange={()=>putTask(selectedTodo?.id,{description:[...selectedTodo?.description.filter((steps,index)=> index!= i),{...item, completed:!item?.completed}]})}
            />
            <p className="flex-grow capitalize">{item?.stepName}</p>
            <span className="bg-violet-200 rounded-full p-1 cursor-pointer hover:bg-violet-100 active:bg-violet-300" onClick={()=>putTask(selectedTodo?.id,{description:[...selectedTodo?.description.filter((steps,index)=> index != i)]})}>
              <DeleteIcon />
            </span>
          </div>
        ))}
        <NewStepInput todo={selectedTodo} />
      </div>
    </div>
  );
};

export default DetailTodo;
