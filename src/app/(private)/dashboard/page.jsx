"use client"
import React, { useEffect, useState } from "react";
import TodosAll from "./components/TodosAll";
import AddTodo from "./components/AddTodoModal";
import { useTodoContext } from "@/context/TodoProvider";

const DashboardPage = () => {
    console.log('---------DATE =',new Date().toLocaleDateString("tr-TR"));
  const [openAddTodoModal, setOpenAddTodoModal] = useState(false)
  const {getTodos} = useTodoContext();

  
  useEffect(()=> {
    getTodos();
  },[])
  
  
  






  return (
    <div className="min-h-[100vh] container mx-auto mt-5 px-3">
      <h3 className="text-center text-3xl my-8">Today's Todos</h3>
      <TodosAll />
      <div>
        <button className="py-3 px-5 bg-violet-300 text-slate-600 rounded-md my-5 font-semibold hover:text-green-700 transition-all active:bg-violet-200" onClick={()=>setOpenAddTodoModal(true)}>Add a new todo</button>
      </div>
      <AddTodo open={openAddTodoModal} setOpen={setOpenAddTodoModal} />

      <div className="oldTodos"></div>
    </div>
  );
};

export default DashboardPage;
