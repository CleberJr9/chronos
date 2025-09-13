import { SaveIcon } from "lucide-react";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import styles from "./style.module.css";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { ShowAlert } from "../../Adapters/AlertToastfy";

export const Settings = () => {
  const {state} = useTaskContext();
  const inputWorktime = useRef<HTMLInputElement>(null);
  const inputShortime = useRef<HTMLInputElement>(null);
  const inputLongtime = useRef<HTMLInputElement>(null);

  function HandleSettings(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
    e.preventDefault();
    const workTime = Number(inputWorktime.current?.value);
    const ShortBreakTime = Number( inputShortime.current?.value);
    const LongBreakTime = Number (inputLongtime.current?.value);

    if (isNaN(workTime) ){
      ShowAlert.dismiss();
      ShowAlert.error('Por favor utilize apenas números para foco')
      return;
    }
    if (isNaN(ShortBreakTime) ){
      ShowAlert.dismiss();
      ShowAlert.error('Por favor utilize apenas números para descanso')
      return;
    }
    if (isNaN(LongBreakTime) ){
      ShowAlert.dismiss();
      ShowAlert.error('Por favor utilize apenas números para descanso longo')
      return;
    }
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
        />
        <DefaultInput
          id="inputShortime"
          labelText="Descanso curto (min):"
          type="number"
          ref={inputShortime}
          defaultValue={state.config.ShortBreakTime}
        />
        <DefaultInput
          id="inputLongtime"
          labelText="Descanso longo (min):"
          type="number"
          ref={inputLongtime}
          defaultValue={state.config.LongBreakTime}
        />
        <Defaultbutton
          id="button"
          type="button"
          className="defaultButton"
          icon={<SaveIcon />}
        />
      </form>
    </>
  );
};
