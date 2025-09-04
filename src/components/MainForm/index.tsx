import { Defaultbutton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import styles from "./style.module.css";
import { PlayCircleIcon } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatedSecondsToMinutes } from "../../utils/formatedSecondsToMinutes";


export const MainForm = () => {
  const valorInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();
  console.log(state.currentCycle, 'valor do current cycle')
  // ciclos da proxima tarefa
  const nextCycle = getNextCycle(state.currentCycle);
  const nextTypeCycle = getNextCycleType(nextCycle);

  

  function HandleNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (valorInput.current === null) return; // ele para a função caso o valor do input esteja vazio na hora do submit

    const TaskName = valorInput.current.value.trim(); // declarando o  valor atual nome da tarefa

    if (!TaskName) {
      alert("digite o nome da tarefa"); // caso esteja vazio ele retorna e para execução, e emite um alert
      return;
    }

    const newTask: TaskModel = {
      // declarando uma variavel do tipo do objeto que estamos criando
      id: Date.now().toString(),
      name: TaskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextTypeCycle],
      type: nextTypeCycle,
    };
    const secondsRemaining = newTask.duration * 60;
    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle, // realizar a crição depois
        secondsRemaining,
        formattedSecondsRemaining: formatedSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask], // adicionando minha tarefa na lista de tasks sempre que adiciono pego o prev, adicionando o novo
      };
    });
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

        <p>proxima tarefa é em 45 min</p>

        <Cycles />

        <Defaultbutton color="green" icon={<PlayCircleIcon />} id="button" />
      </form>
    </>
  );
};
