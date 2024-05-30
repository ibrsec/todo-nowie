import ChevronL from "@/assets/icons/ChevronL";
import ChevronR from "@/assets/icons/ChevronR";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import EditIcon from "@/assets/icons/EditIcon";
import ToolTip from "@/components/Tooltip";
import { useTodoContext } from "@/context/TodoProvider";
import { useState } from "react";
import EditTodoModal from "./EditTodoModal";
const InProgressTasks = ({ inprogressTodos }) => {

  const [openEditModal, setOpenEditModal] = useState(false);
  const [todoForEdit, setTodoForEdit] = useState({});
  const {putTask,deleteTask} = useTodoContext();
  const handleChevronR = (id) => {


    putTask(id,{status:2})
  }
  const handleChevronL = (id) => {


    putTask(id,{status:0})
  }

  const handleEdit = (todo) => {

    setOpenEditModal(true)
    setTodoForEdit(todo);
    // putTask(id,{taskname:""})  
  }
  return (
    <>
      <div className="newTasks bg-blue-200 rounded-lg py-2 px-3 h-auto  ">
        <h5 className="text-lg text-slate-600 text-center font-semibold mt-2 ">
          In Progress
        </h5>

        <div className=" tasks flex flex-col justify-start gap-3 mb-3 mt-3 pt-12 h-[270px] md:h-[400px]  overflow-auto">
          {inprogressTodos?.length > 0 ? (
            inprogressTodos?.map((todo) => (
              <div className="task flex items-center ">
                <span className="flex-grow text-blue-700 ps-4 capitalize">
                  {todo?.taskName}
                </span>
                <div flex items-center gap-3>
                  <ToolTip tooltip="Make New">
                    <button className="rounded-full p-1 hover:bg-white active:bg-slate-100" onClick={()=>handleChevronL(todo?.id)}>
                      <ChevronL className="" />
                    </button>
                  </ToolTip>
                  <ToolTip tooltip="Make Completed">
                    <button className="rounded-full p-1 hover:bg-white active:bg-slate-100" onClick={()=>handleChevronR(todo?.id)}>
                      <ChevronR className="" />
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
        <EditTodoModal open={openEditModal} setOpen={setOpenEditModal} todo={todoForEdit}/>
      </div>
    </>
  );
};

export default InProgressTasks;

