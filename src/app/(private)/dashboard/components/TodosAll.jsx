import NewTasks from "./NewTasks";
import InProgressTasks from "./InProgressTasks";
import CompletedTasks from "./CompletedTasks";
import { useTodoContext } from "@/context/TodoProvider";
import { useAuthContext } from "@/context/AuthProvider";

const TodosAll = () => {
  const { allTodos } = useTodoContext();
  const { currentUser } = useAuthContext();

  const userTodos = allTodos.filter((todo) => todo.userId === currentUser.uid);
  const todaysTodos = userTodos.filter((todo) => {
    
    return new Date(todo?.createdAt).toLocaleDateString("tr-TR") ===
      new Date().toLocaleDateString("tr-TR");
  });
  // console.log("todays todos = ",todaysTodos);

  const newlyTodos = todaysTodos.filter((todo) => todo.status === 0);
  const inprogressTodos = todaysTodos.filter((todo) => todo.status === 1);
  const completedTodos = todaysTodos.filter((todo) => todo.status === 2);

  return (
    <div className="mainTodos w-full  grid  gap-4 lg:grid-cols-3 grid-cols-1 ">
      <NewTasks newlyTodos={newlyTodos} />
      <InProgressTasks inprogressTodos={inprogressTodos} />
      <CompletedTasks completedTodos={completedTodos} />
    </div>
  );
};

export default TodosAll;
