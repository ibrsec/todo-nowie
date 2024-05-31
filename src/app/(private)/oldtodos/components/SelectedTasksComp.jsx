// "use client";

import DetailIcon from "@/assets/icons/DetailIcon";
import ToolTip from "@/components/Tooltip";
import { useRouter } from "next/navigation";

const SelectedTasksComp = ({ selectedDate, selectedTasks }) => {
  const newlyTodos = selectedTasks?.filter((todo) => todo.status === 0);
  const inprogressTodos = selectedTasks?.filter((todo) => todo.status === 1);
  const completedTodos = selectedTasks?.filter((todo) => todo.status === 2);
  const router = useRouter();
  return (
    <div>
      <div className="newTasks bg-violet-200 rounded-lg py-2 px-3 h-auto  ">
        <h5 className="text-lg text-slate-600 text-center font-semibold mt-2 ">
          Tasks of {selectedDate || "[please select a date]"}
        </h5>

        <div className=" tasks flex flex-col justify-start gap-3 mb-3 mt-3 pt-12 ps-10 h-[270px] md:h-[400px]  ">
          <div>
            <h6 className="font-semibold text-red-950">Newly Todos</h6>
            {newlyTodos?.length > 0 ? (
              newlyTodos?.map((todo) => (
                <div key={todo?.id} className="task flex items-center ">
                  <ToolTip tooltip="Detail Page">
                    <button
                      className="rounded-full p-1 hover:bg-white active:bg-slate-100"
                      onClick={() => router.push("/detail/" + todo?.id)}
                    >
                      <DetailIcon className="" />
                    </button>
                  </ToolTip>
                  <div className="flex-grow">
                    <ToolTip
                      tooltip={
                        "Steps: " +
                        todo?.description
                          .map((item) => item.stepName)
                          .join(", ")
                      }
                    >
                      <span className="text-slate-600 ps-4 capitalize w-[50%] overflow-hidden text-[13px] md:text-[14px] lg:text-[16px] ">
                        {todo?.taskName}
                      </span>
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

          <div>
            <h6 className="font-semibold text-blue-800">Inprogress Todos</h6>
            {inprogressTodos?.length > 0 ? (
              inprogressTodos?.map((todo) => (
                <div key={todo?.id} className="task flex items-center ">
                  <ToolTip tooltip="Detail Page">
                    <button
                      className="rounded-full p-1 hover:bg-white active:bg-slate-100"
                      onClick={() => router.push("/detail/" + todo?.id)}
                    >
                      <DetailIcon className="" />
                    </button>
                  </ToolTip>
                  <div className="flex-grow">
                    <ToolTip
                      tooltip={
                        "Steps: " +
                        todo?.description
                          .map((item) => item.stepName)
                          .join(", ")
                      }
                    >
                      <span className="ps-4 capitalize text-blue-950 w-[80%] overflow-hidden  text-[13px] md:text-[14px] lg:text-[16px] ">
                        {todo?.taskName}
                      </span>
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

          <div>
            <h6 className="font-semibold text-green-700">Completed Todos</h6>
            {completedTodos?.length > 0 ? (
              completedTodos?.map((todo) => (
                <div key={todo?.id} className="task flex items-center ">
                  <ToolTip tooltip="Detail Page">
                    <button
                      className="rounded-full p-1 hover:bg-white active:bg-slate-100"
                      onClick={() => router.push("/detail/" + todo?.id)}
                    >
                      <DetailIcon className="" />
                    </button>
                  </ToolTip>
                  <div className="flex-grow">
                    <ToolTip
                      tooltip={
                        "Steps: " +
                        todo?.description
                          .map((item) => item.stepName)
                          .join(", ")
                      }
                    >
                      <span className="flex-grow text-green-900 ps-4 capitalize w-[80%] overflow-hidden text-[13px] md:text-[14px] lg:text-[16px] ">
                        {todo?.taskName}
                      </span>
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
        </div>
      </div>
    </div>
  );
};

export default SelectedTasksComp;
