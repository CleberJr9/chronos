
import { Defaultbutton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import styles from './style.module.css'
import { PlayCircleIcon } from "lucide-react";

type MainFormProps = {
  input?: string;
  children?: React.ReactNode;
};

export const MainForm = ({  children }: MainFormProps) => {
  
  return (
    <>
      <form className= {styles.form} action="">
        <div className= {styles.formCollun}>
          <DefaultInput
            label="Task"
            id="meuinput"
            type="text"
            placeHolder="Deescreva a tarefa"
          ></DefaultInput>
        </div>
      </form>
      <form action="" className={styles.form}>
        <div className={styles.formCollun}>
          <p>Tarefa iniciada</p>
      
        </div>
      </form>
      {children}
      <form action="" className={styles.form}>
        <div className={styles.formCollun}>
          <Cycles />
        </div>
      </form>
      <form action="" className={styles.form}>
        <div className={styles.formCollun}>
          <Defaultbutton color="green" icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  );
};
