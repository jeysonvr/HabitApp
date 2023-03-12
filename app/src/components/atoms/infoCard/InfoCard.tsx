import React from 'react'
import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react'

import './InfoCard.css';

interface InfoCardProps {
  title?: string;
  text: string;
  imagePath?: string;
  btnClickHandler?: () => void;
  className?: string;
  iconAction?: string;
}

const InfoCard = ({
  title = '¿Sabías que?',
  text,
  imagePath,
  btnClickHandler,
  className,
  iconAction,
}: InfoCardProps): JSX.Element => {
  return (
    <div className={`infoCard ${className}`}>
      <h5>{title}</h5>
      <IonGrid>
        <IonRow>
          <IonCol size="9">
            <p>{text}</p>
          </IonCol>
          <IonCol>
            {imagePath && <img src={imagePath} />}
            {btnClickHandler && !iconAction && <IonButton color="secondary" id='verButton' onClick={btnClickHandler}>Ver</IonButton>}
            {btnClickHandler && iconAction && (
              <IonButton color={'light'} onClick={btnClickHandler}>
                <img src={iconAction} className='smallIcon' />
              </IonButton>
            )}
          </IonCol>
        </IonRow>
      </IonGrid>
    </div >
  )
}

export default InfoCard
