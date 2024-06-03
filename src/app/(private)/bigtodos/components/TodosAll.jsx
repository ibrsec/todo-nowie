import NewTasks from "./NewTasks";
import InProgressTasks from "./InProgressTasks";
import CompletedTasks from "./CompletedTasks";
import { useTodoContext } from "@/context/TodoProvider";
import { useAuthContext } from "@/context/AuthProvider";

const TodosAll = ({path}) => {
  const { allTodos } = useTodoContext();
  const { currentUser } = useAuthContext();

  const userTodos = allTodos.filter((todo) => todo.userId === currentUser.uid);
  // const todaysTodos = userTodos.filter((todo) => {
    
  //   return new Date(todo?.createdAt).toLocaleDateString("tr-TR") ===
  //     new Date().toLocaleDateString("tr-TR");
  // });
  const selectedTasks = userTodos?.filter(item=>item?.taskName !== "user storage");

  // console.log("todays todos = ",todaysTodos);

  const newlyTodos = selectedTasks.filter((todo) => todo.status === 0);
  const inprogressTodos = selectedTasks.filter((todo) => todo.status === 1);
  const completedTodos = selectedTasks.filter((todo) => todo.status === 2);

  return (
    <div className="mainTodos w-full  grid  gap-4 lg:grid-cols-3 grid-cols-1 ">
      <NewTasks path={path} newlyTodos={newlyTodos} />
      <InProgressTasks path={path} inprogressTodos={inprogressTodos} />
      <CompletedTasks path={path} completedTodos={completedTodos} />
    </div>
  );
};

export default TodosAll;
