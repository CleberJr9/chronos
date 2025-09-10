import { Defaultbutton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import styles from "./style.module.css";
import {  PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";

export const MainForm = () => {
  const valorInput = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useTaskContext();
  
  // ciclos da proxima tarefa
  const nextCycle = getNextCycle(state.currentCycle);
  const nextTypeCycle = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: <span>Foque por <strong>{state.config.workTime}min</strong> </span>,
    ShortBreakTime: <span>Descanse por <strong>{state.config.ShortBreakTime}min</strong> </span>,
    LongBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <strong>{state.config.workTime}min</strong>
      </span>
    ),
    ShortBreakTime: (
      <span>Próximo descaso é de <strong>{state.config.ShortBreakTime}min</strong> </span>
    ),
    LongBreakTime: <span>Próximo descanso será longo</span>,
  };

  function HandleNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (valorInput.current === null) return; // ele para a função caso o valor do input esteja vazio na hora do submit

    const TaskName = valorInput.current.value.trim(); // declarando o  valor atual nome da tarefa

    if (!TaskName) {
      alert("digite o nome da tarefa"); // caso esteja vazio ele retorna e para execução, e emite um alert
      return;
    }

    const newTask: TaskModel = {
      // declando o objeto de criação
      id: Date.now().toString(),
      name: TaskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextTypeCycle],
      type: nextTypeCycle,
    };

    dispatch({type: TaskActionTypes.START_TASK, payload:newTask});
    
 
  }

  function HandleStopTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
   dispatch({type:TaskActionTypes.INTERRUPT_TASK})
  }
  return (
    <>
      <form onSubmit={HandleNewTask} className={styles.form} action="">
        <DefaultInput
          id="meuinput"
          type="text"
          labelText="task"
          ref={valorInput}
          disabled={!!state.activeTask}
        />

        {state.currentCycle > 0 && (
          <div className={styles.form}>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextTypeCycle]}
            <Cycles />
          </div>
        )}

        {!state.activeTask && (
          <Defaultbutton
            aria-label="Iniciar nova tarefa"
            title="nova tarefa"
            type="submit"
            color="green"
            icon={<PlayCircleIcon />}
            id="button"
            key="button_submit"
          />
        )}
        {!!state.activeTask && (
          <Defaultbutton
            onClick={(e) => HandleStopTask(e)}
            aria-label="Parar tarefa atual"
            title="interromper"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            id="button"
            key="button_stop"
          ></Defaultbutton>
        )}
      </form>
    </>
  );
};
