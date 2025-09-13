
import style from "./style.module.css";
import { RouterLink } from "../RouterLink";

export const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <RouterLink  to="/about-pomodoro/">Entenda a técnica pomodoro 🍅</RouterLink>
        <RouterLink className="" to="/"> <> Chronos Pomodoro © {new Date().getFullYear()} - Feito com 💚 por Cleber Junior</> </RouterLink>
      </footer>
    </>
  );
};
