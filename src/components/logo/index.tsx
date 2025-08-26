import style from "./style.module.css";
import { TimerIcon } from "lucide-react";



export const Logo = () => {

  return (
    <div className={style.logo}>
      <a className={style.logoLink} href="#">
        <TimerIcon className= {style.logoIcon}/>
        <span>Chronos</span>
      </a>
    </div>
  );
};
