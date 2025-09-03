import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: string;
  startDate: number;
  completeDate: number | null;  // quando o timer encerra ou se foi interropido irei setar para null 
  interruptDate: number | null ; // data para quando dor interropida
  type: keyof TaskStateModel['config']; // tipos de config de timer do type state models
}