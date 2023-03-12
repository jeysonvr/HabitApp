import { IonButtons, IonCol, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import AddButton from '../components/atoms/AddButton';
import InfoCard from '../components/atoms/infoCard/InfoCard';
import { URL_PATHS } from '../const/UrlPath';

import './Page.css';

const Home: React.FC = () => {

  const { userName } = useParams<{ userName: string; }>();
  const history = useHistory();

  const clickHandler = () => {
    history.push(URL_PATHS.TargetCreate);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <div id='homeBody'>
        <h1>Hola, {userName}</h1>
        <p>Aún no tienes un objetivo, ¿qué es lo próximo que quieres lograr?</p>
        <p>Dale al + para crear un objetivo</p>
        <AddButton clickHandler={clickHandler} type={'primary'} iconPath='plusIcon.png' />
      </div>
      <InfoCard
        text='Tomar de 6 a 8 vasos de agua al día trae diversos beneficios al organismo...'
        imagePath='assets/img/water.png'
      />
    </IonPage>
  );
};

export default Home;
