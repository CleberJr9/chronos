import style from "./style.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={style.footerColunn}>
        <a className={style.Links} href="#">Entenda a técnica pomodoro 🍅</a>
        <a className={style.Links} href="#">Chronos Pomodoro © {new Date().getFullYear()} - Feito com 💚 por Cleber Junior</a>
      </footer>
    </>
  );
};
