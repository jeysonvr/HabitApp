import { IonContent, IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import StartSessionContainer from '../components/containers/startSession/StartSessionContainer';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonContent fullscreen>
        <StartSessionContainer path={`/user/${name}`} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
