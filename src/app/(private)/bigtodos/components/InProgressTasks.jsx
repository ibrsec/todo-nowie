import ChevronL from "@/assets/icons/ChevronL";
import ChevronR from "@/assets/icons/ChevronR";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import EditIcon from "@/assets/icons/EditIcon";
import ToolTip from "@/components/Tooltip";
import { useTodoContext } from "@/context/TodoProvider";
import { useState } from "react";
import EditTodoModal from "./EditTodoModal";
import { useRouter } from "next/navigation";
import DetailIcon from "@/assets/icons/DetailIcon";
const InProgressTasks = ({ path,inprogressTodos }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [todoForEdit, setTodoForEdit] = useState({});
  const { putTask, deleteTask } = useTodoContext();
  const router = useRouter();
  const handleChevronR = (id) => {
    putTask(path,id, { status: 2 });
  };
  const handleChevronL = (id) => {
    putTask(path,id, { status: 0 });
  };

  const handleEdit = (todo) => {
    setOpenEditModal(true);
    setTodoForEdit(todo);
    // putTask(id,{taskname:""})
  };
  return (
    <>
      <div className="newTasks bg-blue-200 rounded-lg py-2 px-3 h-auto  ">
        <h5 className="text-lg text-slate-600 text-center font-semibold mt-2 ">
          In Progress
        </h5>

        <div className=" tasks flex flex-col justify-start gap-3 mb-3 mt-3 pt-12 h-[270px] md:h-[400px]  overflow-x-hidden overflow-y-auto   ">
          {inprogressTodos?.length > 0 ? (
            inprogressTodos?.map((todo) => (
              <div key={todo?.id} className="task flex items-center ">
                <div className="flex-grow ">
                  <ToolTip
                    tooltip={
                      "Steps: " +
                      todo?.description.map((item) => item.stepName).join(", ")
                    }
                  >
                    <span className=" text-blue-700 ps-4 capitalize w-[70%] overflow-hidden text-[13px] md:text-[14px] lg:text-[16px] ">
                      {todo?.taskName}
                    </span>
                  </ToolTip>
                </div>
                <div className="flex items-center">
                  <ToolTip tooltip="Make New">
                    <button
                      className="rounded-full p-1 hover:bg-white active:bg-slate-100"
                      onClick={() => handleChevronL(todo?.id)}
                    >
                      <ChevronL className="" />
                    </button>
                  </ToolTip>
                  <ToolTip tooltip="Make Completed">
                    <button
                      className="rounded-full p-1 hover:bg-white active:bg-slate-100"
                      onClick={() => handleChevronR(todo?.id)}
                    >
                      <ChevronR className="" />
                    </button>
                  </ToolTip>

                  <button
                    className="rounded-full p-1 hover:bg-white active:bg-slate-100"
                    onClick={() => handleEdit(todo)}
                  >
                    <EditIcon className="" />
                  </button>
                  <button
                    className="rounded-full p-1 hover:bg-white active:bg-slate-100"
                    onClick={() => deleteTask(path,todo?.id)}
                  >
                    <DeleteIcon />
                  </button>

                  <ToolTip tooltip="Detail Page">
                    <button
                      className="rounded-full p-1 hover:bg-white active:bg-slate-100"
                      onClick={() => router.push("/bigtodos/detail/" + todo?.id)}
                    >
                      <DetailIcon className="" />
                    </button>
                  </ToolTip>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-red-500 font-semibold">
              No tasks
            </div>
          )}
        </div>
        <EditTodoModal
          open={openEditModal}
          setOpen={setOpenEditModal}
          todo={todoForEdit}
          path={path}
        />
      </div>
    </>
  );
};

export default InProgressTasks;
