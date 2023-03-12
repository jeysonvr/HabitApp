import {
  IonButton,
  IonContent,
  IonMenu,
} from '@ionic/react';

import './Menu.css';
import { URL_PATHS } from '../const/UrlPath';

const Menu: React.FC = () => {

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <div className='headerMenu'>
          <img src='assets/img/user.png' height={'50px'} width={'50px'} />
          <h3>Erik</h3>
        </div>
        <div className='middleMenu'>
          <a href={URL_PATHS.Target}>Objetivos</a>
        </div>
        <div className='bottomMenu'>
          <hr />
          <IonButton
            color="light"
            className='mainButton'
            href={URL_PATHS.Login}
          >Cerrar sesión</IonButton>
        </div>
      </IonContent>
    </IonMenu >
  );
};

export default Menu;
