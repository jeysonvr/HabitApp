import React from 'react'
import { useHistory } from "react-router-dom";

import { URL_PATHS } from '../../../const/UrlPath';
import AddButton from '../../atoms/AddButton'
import InfoCard from '../../atoms/infoCard/InfoCard'

import './TargetComponent.css'

const TargetComponent = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(URL_PATHS.TargetCreate);
  }

  const btnWatchHandler = () => {
    history.push(URL_PATHS.Task);
  }

  return (
    <div id='targetContainer'>
      <div id='targetBody'>
        <h1>Hola, Erik</h1>
        <p>Sigue tus objetivos</p>
        <InfoCard
          title='Alimentarme'
          text='Comer e hidratarme correctamente'
          btnClickHandler={btnWatchHandler}
        />
        <AddButton clickHandler={clickHandler} type={'primary'} iconPath='plusIcon.png' />
      </div>
      <hr />
      <InfoCard
        text='Dormir las horas suficientes reduce la frecuencia de enfermedades...'
        imagePath='assets/img/sleep.png'
      />
    </div>
  )
}

export default TargetComponent
