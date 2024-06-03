"use client";

import { useAuthContext } from "@/context/AuthProvider";
import { useTodoContext } from "@/context/TodoProvider";
import { useEffect, useState } from "react";
import DateSelect from "./components/DateSelect";
import SelectedTasksComp from "./components/SelectedTasksComp";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OldTodosPage = () => {
  const { allTodos, getTodos } = useTodoContext();
  const { currentUser } = useAuthContext();
  const path = "todos";
  useEffect(() => {
    getTodos(path);
  }, []);
  const userTodos = allTodos.filter((todo) => todo.userId === currentUser.uid);

  //[
  // 30 may : [{taskName:"",creat:"lfd,",id:"",userId:""},{...},{...}],
  // 31 may : [{taskName:"",creat:"lfd,",id:"",userId:""},{...},{...}],
  // ]
  const allTodosDateCategory = userTodos.reduce((acc, current) => {
    const category = new Date(current?.createdAt).toLocaleDateString("tr-TR");
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(current);
    return acc;
  }, {});
  // console.log("allTodosDateCategory = ", allTodosDateCategory);

  const [selectedDate, setSelectedDate] = useState("");
  // console.log(selectedDate);

  const selectedTasks = allTodosDateCategory[selectedDate];

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl text-center font-semibold my-5 px-2">
        Old Todos
      </h3>
      <div className="text-center">
        <img src="/images/oldtodos.png" className="w-[100%] h-[100px] object-contain" alt="" />
      </div>
      <DateSelect
        allTodosDateCategory={allTodosDateCategory}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <SelectedTasksComp
        selectedDate={selectedDate}
        selectedTasks={selectedTasks}
      />
      
    </div>
  );
};

export default OldTodosPage;
