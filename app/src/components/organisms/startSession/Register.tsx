import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { IonButton } from '@ionic/react';
import './StartSession.css';
import ErrorInLine from '../../atoms/ErrorInLine';
import { URL_PATHS } from '../../../const/UrlPath';

const Register = () => {

  const userInputRef = React.createRef<HTMLInputElement>();
  const passwordInputRef = React.createRef<HTMLInputElement>();
  const confirmPasswordInputRef = React.createRef<HTMLInputElement>();
  const history = useHistory();

  const [{ userError, passwordError, confirmPasswordError }, setHasError] = useState({
    userError: false,
    passwordError: false,
    confirmPasswordError: false,
  });

  const submitHandler = () => {
    const isUserEmpty = !userInputRef.current?.value.trim();
    const isPasswordEmpty = !passwordInputRef.current?.value.trim();
    const isConfirmPasswordEmpty = !confirmPasswordInputRef.current?.value.trim();

    setHasError({ userError: isUserEmpty, passwordError: isPasswordEmpty, confirmPasswordError: isConfirmPasswordEmpty });
    if (!isUserEmpty && !isPasswordEmpty && !isConfirmPasswordEmpty) {
      history.push(`${URL_PATHS.Home}/${userInputRef.current?.value.trim()}`);
    }
  }
  return (
    <div className='main'>
      <div className='formContainer'>
        <p>Usuario</p>
        <input ref={userInputRef} className={`${userError ? 'error' : ''}`} />
        {userError && <ErrorInLine />}
        <p>Contraseña</p>
        <input type='password' ref={passwordInputRef} className={`${passwordError ? 'error' : ''}`} />
        {passwordError && <ErrorInLine />}
        <p>Repite tu contraseña</p>
        <input type='password' ref={confirmPasswordInputRef} className={`${confirmPasswordError ? 'error' : ''}`} />
        {confirmPasswordError && <ErrorInLine />}
      </div>
      <div className='buttonsContainer'>
        <div>
          <IonButton
            color="primary"
            className='mainButton'
            onClick={submitHandler}
          >Registrarme</IonButton>
        </div>
        <a href={URL_PATHS.Login} className='link'>Ingresar</a>
      </div>
    </div>
  )
}

export default Register
