"use client";
import {   useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react"; 
import { useTodoContext } from "@/context/TodoProvider";

export default function EditTodoModal({ open, setOpen, todo }) {
  const [editTodoInput, setEditTodoInput] = useState(todo?.taskName);
  useEffect(()=>{
    setEditTodoInput(todo?.taskName)
  },[todo])
//   const {currentUser} = useAuthContext(); 
  const{putTask} = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(editTodoInput);
    putTask(todo?.id, {taskName:editTodoInput})
    setEditTodoInput("");
    setOpen(false)
  }
  return (
    <Transition show={open}>
      <Dialog className="relative z-10 " onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-violet-100 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <form onSubmit={handleSubmit}>
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-violet-200 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <img
                        src="/images/editTodo.png"
                        width={300}
                        height={300}
                        alt="addtodo"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Edit Todo
                      </DialogTitle>
                      <div className="mt-2">
                        
                          <div className="relative border">
                            <input
                              autoComplete="off"
                              autoFocus
                              id="edittodo"
                              name="edittodo"
                              type="text"
                              required
                              className="peer placeholder-transparent h-10 px-2 w-[300px]  border-b-2 rounded bg-green-100 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                              placeholder="Edit task"
                              value={editTodoInput}
                              onChange={(e) => setEditTodoInput(e.target.value)}
                            />
                            <label
                              htmlFor="password"
                              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 px-2 peer-focus:text-gray-600 peer-focus:text-sm"
                            >
                              Task Name *
                            </label>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-violet-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 sm:ml-3 sm:w-auto" 
                  >
                    EDIT
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    data-autofocus
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
              </form>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
