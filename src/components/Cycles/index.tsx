import style from "./style.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export const Cycles = () => {
  const descriptionCycle = {
    workTime: "Foco",
    ShortBreakTime: "descanso curto",
    LongBreakTime: "descanso longo",
  };

  const { state } = useTaskContext();
  const cycleSteps = Array.from({ length: state.currentCycle });
  return (
    <>
      <div className={style.cycles}>
        <span>Ciclos:</span>
     
          <div className={style.Dots}>
            {cycleSteps.map((_, index) => {
              const nextCycle = getNextCycle(index);
              const newNextCycleType = getNextCycleType(nextCycle);
              return (
                <span
                key={`${nextCycle}-${newNextCycleType}`}
                title="indicador de ciclo"
                  aria-label={`Indicador de ${descriptionCycle[newNextCycleType]}`}
                  className={`${style.Dot} ${style[newNextCycleType]}`}
                ></span>
              );
            })}
          </div>
        </div>
    
    </>
  );
};
