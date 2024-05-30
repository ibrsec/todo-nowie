import ChevronL from "@/assets/icons/ChevronL";
import ChevronR from "@/assets/icons/ChevronR";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import EditIcon from "@/assets/icons/EditIcon";
import ToolTip from "@/components/Tooltip";
import { useTodoContext } from "@/context/TodoProvider";
import EditTodoModal from "./EditTodoModal";
import { useState } from "react";
const CompletedTasks = ({ completedTodos }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [todoForEdit, setTodoForEdit] = useState({});
  const {putTask, deleteTask} = useTodoContext();
  const handleChevronL = (id) => {


    putTask(id,{status:1})
  }

  const handleEdit = (todo) => {

    setOpenEditModal(true)
    setTodoForEdit(todo);
    // putTask(id,{taskname:""})  
  }

  return (
    <>
      <div className="newTasks bg-green-200 rounded-lg py-2 px-3 h-auto  ">
        <h5 className="text-lg text-slate-600 text-center font-semibold mt-2 ">
          New Tasks
        </h5>

        <div className=" tasks flex flex-col justify-start gap-3 mb-3 mt-3 pt-12 h-[270px] md:h-[400px]  overflow-auto">
          {completedTodos?.length > 0 ? (
            completedTodos?.map((todo) => (
              <div className="task flex items-center ">
                <span className="flex-grow text-green-600 ps-4 text-decoration-line-through  capitalize">
                  {todo?.taskName}
                </span>
                <div flex items-center gap-3>
                  <ToolTip tooltip="Make inprogress">
                    <button className="rounded-full p-1 hover:bg-white active:bg-slate-100" onClick={()=>handleChevronL(todo?.id)}>
                      <ChevronL className="" />
                    </button>
                  </ToolTip>

                  <button className="rounded-full p-1 hover:bg-white active:bg-slate-100" onClick={()=>handleEdit(todo)}>
                    <EditIcon className="" />
                  </button>
                  <button className="rounded-full p-1 hover:bg-white active:bg-slate-100" onClick={()=>deleteTask(todo?.id)}>
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-red-500 font-semibold">
              No tasks
            </div>
          )}
        </div>
      </div>

      <EditTodoModal open={openEditModal} setOpen={setOpenEditModal} todo={todoForEdit}/>
    </>
  );
};

export default CompletedTasks