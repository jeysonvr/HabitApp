import React, { useState } from 'react'
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import { useHistory } from "react-router-dom";

import AddButton from '../../atoms/AddButton';
import ErrorInLine from '../../atoms/ErrorInLine';
import { URL_PATHS } from '../../../const/UrlPath';
import ErrorPopup from '../../molecules/errorPopup/ErrorPopup';

const TargetCreateComponent = () => {
  const titleInputRef = React.createRef<HTMLInputElement>();
  const descriptionInputRef = React.createRef<HTMLInputElement>();
  const history = useHistory();

  const [{ titleError, descriptionError }, setHasError] = useState({
    titleError: false,
    descriptionError: false,
  });

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const cancelHandler = () => {
    setIsOpenPopup(true);
  }

  const closePopupHandler = () => {
    setIsOpenPopup(false);
  }

  const addHandler = () => {
    const isTitleEmpty = !titleInputRef.current?.value.trim();
    const isDescriptionEmpty = !descriptionInputRef.current?.value.trim();

    setHasError({ titleError: isTitleEmpty, descriptionError: isDescriptionEmpty });
    if (!isTitleEmpty && !isDescriptionEmpty) {
      history.push(`${URL_PATHS.Target}`);
    }
  }

  return (
    <IonContent fullscreen>
      <div id='targetContainer'>
        <h1>¿Qué quieres lograr?</h1>
        <div className='imgTargetContainer'>
          <img src='assets/img/target.png' />
          <img src='assets/img/editIcon.png' className='smallIcon' />
        </div>
        <div className='formContainer'>
          <p>Titulo</p>
          <input ref={titleInputRef} className={`${titleError ? 'error' : ''}`} />
          {titleError && <ErrorInLine />}
          <p>Descripción</p>
          <input ref={descriptionInputRef} className={`${descriptionError ? 'error' : ''}`} />
          {descriptionError && <ErrorInLine />}
        </div>
        <IonGrid id='buttonContainer'>
          <IonRow>
            <IonCol size="6">
              <AddButton clickHandler={cancelHandler} type='danger' className='spetialActions' iconPath='cancelIcon.png' />
            </IonCol>
            <IonCol size="6">
              <AddButton clickHandler={addHandler} type='primary' className='spetialActions' iconPath='checkIcon.png' />
            </IonCol>
          </IonRow>
        </IonGrid>
        <ErrorPopup isOpen={isOpenPopup} closePopupHandler={closePopupHandler}/>
      </div>
    </IonContent>
  )
}

export default TargetCreateComponent
