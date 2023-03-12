import { IonIcon, IonText } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';

const ErrorInLine = () => {
  return (
    <p className='error'>Campo requerido <IonText color="danger"><IonIcon icon={closeCircle} style={{ verticalAlign: 'middle' }}></IonIcon></IonText></p>
  )
}

export default ErrorInLine
