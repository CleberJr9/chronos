import style from "./style.module.css";

export const Cycles = () => {
  return (
    <>
      <div className={style.cycles}>
        <span>Ciclos:</span>
        <div className="Dots">
          <div className={style.Dots}>
            <span className={`${style.Dot} ${style.workTime}`}></span>
            <span className={`${style.Dot} ${style.shortBreakTime}`}></span>
            <span className={`${style.Dot} ${style.workTime}`}></span>
            <span className={`${style.Dot} ${style.shortBreakTime}`}></span>
            <span className={`${style.Dot} ${style.workTime}`}></span>
            <span className={`${style.Dot} ${style.shortBreakTime}`}></span>
            <span className={`${style.Dot} ${style.workTime}`}></span>
            <span className={`${style.Dot} ${style.longBreakTime}`}></span>
          </div>
        </div>
      </div>
    </>
  );
};
