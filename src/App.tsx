
import "./styles/theme.css";
import "./styles/global.css";

import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { AlertMenssage } from "./components/AlertMenssage";
import { MainRouter } from "./routers";


export const App = () => {
  return (
    <>
      <TaskContextProvider>
        <AlertMenssage>
      <MainRouter/>
        </AlertMenssage>
      </TaskContextProvider>
    </>
  );
};
