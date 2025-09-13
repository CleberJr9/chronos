import { TrashIcon } from "lucide-react";
import { Container } from "../../components/container";
import { Defaultbutton } from "../../components/DefaultButton";
import { Heading } from "../../components/heading";
import { HistoryComponent } from "../../components/HistoryComponent";
import { MainTemplate } from "../../templates/MainTemplate";
import { ShowAlert } from "../../Adapters/AlertToastfy";

import { TaskActionTypes } from "../../contexts/TaskContext/TaskActions";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";


export function History() {
  const {  state,dispatch } = useTaskContext();
  
  const hasTasks = state.tasks.length > 0;
  function handleResetHistory() {
    ShowAlert.dismiss();
    ShowAlert.confirm('Tem certeza?', confirmation => {
    
      if(confirmation){
        dispatch({ type: TaskActionTypes.RESET_STATE });
      }else{
        return;
      }
    });
  };
  
  
  return (
    <>
      {" "}
      <MainTemplate>
        <Container>
          <Heading>
            <span >Histórico</span>
            {hasTasks && <span>
              <Defaultbutton
                onClick={handleResetHistory}
                title="Apagar histórico"
                aria-label="Apagar histórico"
                color="red"
                className="buttonIconDelete"
                icon={<TrashIcon />}
                type="button"
              ></Defaultbutton>
            </span>}
          </Heading>
        </Container>
        <Container>
          {!hasTasks && (
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Ainda não existem tarefas criadas.
          </p>
        )}
        
          {hasTasks && <HistoryComponent />}
        </Container>
      </MainTemplate>
    </>
  );
}
