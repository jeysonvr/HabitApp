import { IonCol, IonGrid, IonRow } from '@ionic/react'
import React from 'react'

import './DayPicker.css'

const DayPicker = () => {
  return (
    <IonGrid class='dayPickerContainer'>
      <IonRow>
        <IonCol><label htmlFor="cbL">L</label></IonCol>
        <IonCol><label htmlFor="cbM">M</label></IonCol>
        <IonCol><label htmlFor="cbMi">M</label></IonCol>
        <IonCol><label htmlFor="cbJ">J</label></IonCol>
        <IonCol><label htmlFor="cbV">V</label></IonCol>
        <IonCol><label htmlFor="cbS">S</label></IonCol>
        <IonCol><label htmlFor="cbD">D</label></IonCol>
      </IonRow>
      <IonRow>
        <IonCol><input type="checkbox" name="my-checkbox" id="cbL" /></IonCol>
        <IonCol><input type="checkbox" name="my-checkbox" id="cbM" /></IonCol>
        <IonCol><input type="checkbox" name="my-checkbox" id="cbMi" /></IonCol>
        <IonCol><input type="checkbox" name="my-checkbox" id="cbJ" /></IonCol>
        <IonCol><input type="checkbox" name="my-checkbox" id="cbV" /></IonCol>
        <IonCol><input type="checkbox" name="my-checkbox" id="cbS" /></IonCol>
        <IonCol><input type="checkbox" name="my-checkbox" id="cbD" /></IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default DayPicker
