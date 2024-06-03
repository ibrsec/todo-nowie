"use client";

import { useAuthContext } from "@/context/AuthProvider";
import { useTodoContext } from "@/context/TodoProvider";
import { useEffect, useState } from "react"; 
import SelectedTasksComp from "./components/SelectedTasksComp";
import AddTodo from "./components/AddTodoModal";
import TodosAll from "./components/TodosAll";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OldTodosPage = () => {
  const [openAddTodoModal, setOpenAddTodoModal] = useState(false)
  const {  getTodos } = useTodoContext();
  // const { currentUser } = useAuthContext();
  const path = "bigTodos";
  useEffect(() => {
    getTodos(path);
  }, []);
  // const userTodos = allTodos.filter((todo) => todo?.id === currentUser.uid);

  //[
  // 30 may : [{taskName:"",creat:"lfd,",id:"",userId:""},{...},{...}],
  // 31 may : [{taskName:"",creat:"lfd,",id:"",userId:""},{...},{...}],
  // ]
 

  // const selectedTasks = allTodos?.filter(item=>item?.taskName !== "user storage");

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-center font-semibold my-5 px-2">
        Big Todos
      </h3>
      <div className="text-center">
        <img src="/images/oldtodos.png" className="w-[100%] h-[100px] object-contain" alt="" />
      </div>
      <div className="">
        <button className="py-3 px-5 bg-violet-300 text-slate-600 rounded-md my-5 font-semibold hover:text-green-700 transition-all active:bg-violet-200 flex-nowrap flex items-center gap-3" onClick={()=>setOpenAddTodoModal(true)}
        data-test="addtodo-button">Add a new todo
        <img src="/images/dashboard.png" className=" w-[30px]" alt="" />
        </button>
      </div>
      <TodosAll path={path} />
      <AddTodo path={path} open={openAddTodoModal} setOpen={setOpenAddTodoModal} />




      {/* <SelectedTasksComp
        selectedTasks={selectedTasks}
      /> */}
      
    </div>
  );
};

export default OldTodosPage;
