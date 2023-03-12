import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import TaskComponent from '../components/containers/task/TaskComponent';
import TaskCreateComponent from '../components/containers/task/TaskCreateComponent';

const Task: React.FC = () => {

  const { action } = useParams<{ action: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {
          action === 'create' ? <TaskCreateComponent /> : <TaskComponent dummyAction={action}/>
        }
      </IonContent>
    </IonPage>
  );
};

export default Task;
