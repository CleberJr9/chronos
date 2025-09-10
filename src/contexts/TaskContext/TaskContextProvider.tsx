import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./TaskReducer";
import { TimeWorkerManager } from "../../Workers/TimeWorkerManeger";
import { TaskActionTypes } from "./TaskActions";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = {
  children: React.ReactNode;
};
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimeWorkerManager.getInstance();
  const playTimer = useRef<ReturnType<typeof loadBeep> | null>(null)

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {

      if (playTimer.current){ // chamando o audio quando terminar o timer 
      playTimer.current();
      }
      dispatch({type:TaskActionTypes.COMPLETE_TASK});
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    console.log(state);
    if (!state.activeTask) {
      
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(()=>{
if(state.activeTask && playTimer.current === null ){
  playTimer.current = loadBeep();
} else{
  playTimer.current = null;
}
  }, [state.activeTask])



  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
