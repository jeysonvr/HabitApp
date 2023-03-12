import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react'

import ErrorInLine from '../../atoms/ErrorInLine';
import AddButton from '../../atoms/AddButton';
import ErrorPopup from '../../molecules/errorPopup/ErrorPopup';
import { URL_PATHS } from '../../../const/UrlPath';
import DayPicker from '../../molecules/dayPicker/DayPicker';

const TaskCreateComponent = () => {
  const taskInputRef = React.createRef<HTMLInputElement>();
  const hourInputRef = React.createRef<HTMLInputElement>();
  const history = useHistory();

  const [{ taskError, hourError }, setHasError] = useState({
    taskError: false,
    hourError: false,
  });
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const cancelHandler = () => {
    setIsOpenPopup(true);
  }

  const closePopupHandler = () => {
    setIsOpenPopup(false);
  }

  const addHandler = () => {
    const isTaskEmpty = !taskInputRef.current?.value.trim();
    const isHourEmpty = !hourInputRef.current?.value.trim();

    setHasError({ taskError: isTaskEmpty, hourError: isHourEmpty });
    if (!isTaskEmpty && !isHourEmpty) {
      history.push(`${URL_PATHS.Task}/${taskInputRef.current?.value.trim()}`);
    }
  }

  return (
    <IonContent fullscreen>
      <div id='targetContainer'>
        <h1>Crear tarea</h1>
        <div className='formContainer'>
          <p>Tarea</p>
          <input ref={taskInputRef} className={`${taskError ? 'error' : ''}`} />
          {taskError && <ErrorInLine />}
          <p>Hora</p>
          <input ref={hourInputRef} className={`${hourError ? 'error' : ''}`} />
          {hourError && <ErrorInLine />}
          <p>Día</p>
          <DayPicker />
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
        <ErrorPopup isOpen={isOpenPopup} closePopupHandler={closePopupHandler} />
      </div>
    </IonContent>
  )
}

export default TaskCreateComponent
