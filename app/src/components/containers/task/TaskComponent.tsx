import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { URL_PATHS } from '../../../const/UrlPath';

import AddButton from '../../atoms/AddButton'
import InfoCard from '../../atoms/infoCard/InfoCard';
import ErrorPopup from '../../molecules/errorPopup/ErrorPopup';

import './TaskComponent.css';

interface TaskComponentProps {
  dummyAction?: string;
}

const TaskComponent = ({ dummyAction }: TaskComponentProps) => {
  const history = useHistory();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const clickHandler = () => {
    history.push(URL_PATHS.TaskCreate);
  }

  const deleteHandler = () => {
    setIsOpenPopup(true);
  }

  const closePopupHandler = () => {
    setIsOpenPopup(false);
  }

  return (
    <div id='targetBody'>
      {!!dummyAction ? (
        <div className='hasActon'>
          <h1>{dummyAction}</h1>
          <InfoCard
            title='Tomar agua'
            text='6 a.m y 4 p.m. Lunes a Jueves'
            btnClickHandler={deleteHandler}
            className={'dummyTask'}
            iconAction={'assets/img/delete.png'}
          />
        </div>
      ) : (
        <>
          <h1>Alimentarme</h1>
          <p>Aún no tienes tareas para cumplir este objetivo</p>
          <p>Dale al + para crear una tarea</p>
        </>
      )}
      <AddButton clickHandler={clickHandler} type={'primary'} iconPath='plusIcon.png' />
      <ErrorPopup
        title='¿Eliminar?'
        mainActionText='Aceptar'
        isOpen={isOpenPopup}
        closePopupHandler={closePopupHandler}
        referralPath={URL_PATHS.Task}
      />
    </div>
  )
}

export default TaskComponent
