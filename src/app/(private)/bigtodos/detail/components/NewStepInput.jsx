import {useState} from 'react'
import ChevronR from "@/assets/icons/ChevronR";
import { useTodoContext } from '@/context/TodoProvider';
import { toastInfo } from '@/helper/ToastifyNotify';

const NewStepInput = ({path,todo}) => {

  const [stepInput, setStepInput] = useState("");
const {putTask,} = useTodoContext();
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(stepInput);
    // console.log(todo);
    // console.log("id=",todo?.id);
    // console.log("description=",todo?.description);
    stepInput ?
    putTask(path,todo?.id,{description:[...todo?.description,{stepName:stepInput,completed:false}]})
    : toastInfo("Please enter a step name")
    setStepInput("");
  }
  return (
    
    <form className="flex items-center gap-2" onSubmit={handleSubmit} >
          <ChevronR className="bg-violet-200 rounded-full" />
          <input
            className="flex-grow bg-violet-200 text-slate-700 py-2 px-3 rounded-md "
            placeholder="Enter new step"
            value={stepInput}
            onChange={(e)=>setStepInput(e.target.value)}
          />
        </form>
  )
}

export default NewStepInput