import { IonButton } from '@ionic/react'
import './StartSessionContainer.css';

import { URL_PATHS } from '../../../const/UrlPath';
import Login from '../../organisms/startSession/Login';
import Register from '../../organisms/startSession/Register';

interface StartSessionContainerProps {
  path: string;
}

const StartSessionContainer = ({ path }: StartSessionContainerProps) => {

  console.log('Test::', path === URL_PATHS.Register, path)
  return (
    <>
      <img src='assets/img/alarm_banner.jpeg' />
      <h2>Bienvenido</h2>
      <p>
        Habitapp te ayuda a cumplir tus objetivos. Inicia sesión para comenzar a lograrlo.
      </p>
      {
        path === URL_PATHS.Register ? <Register /> : <Login />
      }
    </>
  )
}

export default StartSessionContainer
