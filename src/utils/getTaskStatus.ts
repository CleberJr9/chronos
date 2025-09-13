import type { TaskModel } from "../models/TaskModel";

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) return 'Completa';
  if (task.interruptDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Em Progresso';
  return 'Abandonada';
}

export function getTaskType(task: TaskModel) {
 if(task.type === "workTime") return ('Foco')
  if(task.type === "ShortBreakTime") return ('Descanso')
  return 'Descanso longo';
}