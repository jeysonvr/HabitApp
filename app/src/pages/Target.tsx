import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import TargetComponent from '../components/containers/target/TargetComponent';
import TargetCreateComponent from '../components/containers/target/TargetCreateComponent';

const Target: React.FC = () => {

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
          action === 'create' ? <TargetCreateComponent /> : <TargetComponent />
        }
      </IonContent>
    </IonPage>
  );
};

export default Target;
