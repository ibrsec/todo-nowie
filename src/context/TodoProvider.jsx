"use client";
import { toastError, toastSuccess } from "@/helper/ToastifyNotify";
import { createContext, useContext, useState } from "react";

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [allTodos, setAllTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_mock_BASEURL;
  //  +"/todos";

  const getTodos = async (path) => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch(`${baseUrl}/${path}`);

      // console.log("get Todos =response = ", response);
      const resposneJson = await response.json();
      setAllTodos(resposneJson);
      // toastSuccess("Getted Todos Successfully");
    } catch (error) {
      console.log("get todos error=", error);
      toastError("Get todos is failed");
    }
  };

  const postNewTask = async (path,currentUser,newTask) => {

    const body = {
      createdAt: new Date(),
      taskName: newTask,
      status: 0,
      userId: currentUser?.uid,
    };
    // console.log("body", body);

    try {
      const response = await fetch(`${baseUrl}/${path}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...body }),
      });
      // console.log("Post a new task response = ", response);
      toastSuccess("Posted a new task successfully");
      const bodyJson = await response.json();
      // console.log("bodyJson", bodyJson);
      getTodos(path);
    } catch (error) {
      toastError("Post a new task is failed!");
      console.log("Post a new task = ", error);
    }
  };

  const putTask = async (path,id,taskObj) => {
 
    // console.log("taskObj", taskObj);

    try {
      const response = await fetch(`${baseUrl}/${path}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...taskObj }),
      });
      // console.log("PUT task response = ", response);
      toastSuccess("PUTed task successfully");
      const bodyJson = await response.json();
      // console.log("put bodyJson", bodyJson);
      getTodos(path);
    } catch (error) {
      toastError("PUT task is failed!");
      console.log("PUT task = ", error);
    }
  };
  const deleteTask = async (path,id) => {
  

    try {
      const response = await fetch(`${baseUrl}/${path}/${id}`, {
        method: "DELETE",
        // headers: {
        //   "Content-type": "application/json",
        // }
      });
      // console.log("DELETE task response = ", response);
      toastSuccess("DELETE task successfully"); 
      getTodos(path);
    } catch (error) {
      toastError("DELETE task is failed!");
      console.log("DELETE task = ", error);
    }
  };

  const values = { allTodos, getTodos,postNewTask,putTask,deleteTask, };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
