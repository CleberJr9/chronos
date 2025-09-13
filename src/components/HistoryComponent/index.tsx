import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formateDate } from "../../utils/formateDate";
import { getTaskStatus, getTaskType } from "../../utils/getTaskStatus";
import styles from './style.module.css'

export const HistoryComponent = () => {
  const { state } = useTaskContext();
  const sortedTasks = [...state.tasks].sort((a,b)=>{
    return b.startDate -a.startDate;
  })

  return (
    <>
    
      <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {sortedTasks.map((task) => {
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}min</td>
                    <td>{formateDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{getTaskType(task)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    </>
  );
};
