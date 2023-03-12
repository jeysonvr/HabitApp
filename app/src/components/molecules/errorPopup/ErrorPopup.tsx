import { IonButton } from '@ionic/react';
import { useHistory } from "react-router-dom";

import './ErrorPopup.css'

interface ErrorPopupProps {
  isOpen?: boolean;
  closePopupHandler: () => void;
  referralPath?: string;
  title?: string;
  mainActionText?: string;
}

const ErrorPopup = ({
  isOpen,
  closePopupHandler,
  referralPath,
  title = '¿Deseas salir?',
  mainActionText = 'Salir',
}: ErrorPopupProps) => {
  const history = useHistory();

  if (!isOpen) return null;

  const exitHandler = () => {
    closePopupHandler()
    if (referralPath) {
      history.push(referralPath);
    } else {
      history.goBack();
    }
  }

  return (
    <>
      <div className='cancelPopupContainer'>
        <h3>{title}</h3>
        <div className='actionsContainer'>
          <IonButton
            color="danger"
            className='mainButton'
            onClick={exitHandler}
          >{mainActionText}</IonButton>
          <IonButton
            color="primary"
            className='mainButton'
            onClick={closePopupHandler}
          >Cancelar</IonButton>
        </div>
      </div>
      <div className='popupBackground' />
    </>
  )
}

export default ErrorPopup
