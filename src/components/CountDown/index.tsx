


import style from "./style.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export const CountDown = () => {

  const {state} = useTaskContext();

  return (
    <div className={style.Cointainer}>{state.formattedSecondsRemaining}</div>
  );
};
