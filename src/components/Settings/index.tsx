import { SaveIcon } from "lucide-react";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import styles from "./style.module.css";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { ShowAlert } from "../../Adapters/AlertToastfy";
import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";

export const Settings = () => {
  const {state, dispatch} = useTaskContext();
  const inputWorktime = useRef<HTMLInputElement>(null);
  const inputShortime = useRef<HTMLInputElement>(null);
  const inputLongtime = useRef<HTMLInputElement>(null);

  function HandleSettings(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    e.preventDefault();
    const workTime = Number(inputWorktime.current?.value);
    const ShortBreakTime = Number( inputShortime.current?.value);
    const LongBreakTime = Number (inputLongtime.current?.value);

    if ( workTime > 99 || workTime < 1  ){
      ShowAlert.dismiss();
      ShowAlert.error('Por favor digite número entre 1 e 99 para foco')
      return;
    }
    if ( ShortBreakTime > 30 || ShortBreakTime < 1 ){
      ShowAlert.dismiss();
      ShowAlert.error('Por favor digite número entre 1 e 30 descanso curto')
      return;
    }
    if ( LongBreakTime > 60 || LongBreakTime < 1 ){
      ShowAlert.dismiss();
      ShowAlert.error('Por favor digite número entre 1 e 30 descanso longo')
      return;
    }
    dispatch({type: TaskActionTypes.SET_CONFIGS, payload: {workTime,ShortBreakTime, LongBreakTime}} );
    ShowAlert.dismiss();
    ShowAlert.success('Configurações salvas');
  }

  return (
    <>
      <form className={styles.form} onSubmit={HandleSettings}>
        <p>Configure os minutos para as etapas do Pomodoro.</p>
        <DefaultInput
          id="Longtime"
          labelText="Foco (min):"
          ref={inputWorktime}
          type="number"
          defaultValue={state.config.workTime}
          min={1}
          max={99}
        />
        <DefaultInput
          id="inputShortime"
          labelText="Descanso curto (min):"
          type="number"
          ref={inputShortime}
          defaultValue={state.config.ShortBreakTime}
          min={1}
          max={30}
        />
        <DefaultInput
          id="inputLongtime"
          labelText="Descanso longo (min):"
          type="number"
          ref={inputLongtime}
          defaultValue={state.config.LongBreakTime}
          min={1}
          max={60}
        />
        <Defaultbutton
          id="button"
       
          className="defaultButton"
          icon={<SaveIcon />}
        />
      </form>
    </>
  );
};
