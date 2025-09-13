import { RouterLink } from "../RouterLink";
import style from "./style.module.css";
import { TimerIcon } from "lucide-react";



export const Logo = () => {

  return (
    <div className={style.logo}>
      <RouterLink className={style.logoLink} to="/">
        <TimerIcon className= {style.logoIcon}/>
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
};
