import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0 ,
  config: {
    workTime: 45,
    ShortBreakTime: 10,
    LongBreakTime: 60,
  },
};