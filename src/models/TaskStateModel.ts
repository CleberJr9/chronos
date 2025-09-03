import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[]; // history / Main form
  secondsRemaining: number; // count down /history/ Main form / button
  formattedSecondsRemaining: string; // titulo/CountDown
  activeTask: TaskModel | null; // count down /history/ Main form / button
  currentCycle: number; // home
  config: {
    workTime: number; // MainForm
    ShortBreakTime: number; // MainForm
    LongBreakTime: number; // MainForm
  };
};
