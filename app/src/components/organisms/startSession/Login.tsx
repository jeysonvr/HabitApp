import React, { useState } from 'react'
import { IonButton } from '@ionic/react';
import { useHistory } from "react-router-dom";

import ErrorInLine from '../../atoms/ErrorInLine';
import './StartSession.css';
import { URL_PATHS } from '../../../const/UrlPath';

const Login = () => {
  const userInputRef = React.createRef<HTMLInputElement>();
  const passwordInputRef = React.createRef<HTMLInputElement>();
  const history = useHistory();

  const [{ userError, passwordError }, setHasError] = useState({
    userError: false,
    passwordError: false,
  });

  const submitHandler = () => {
    const isUserEmpty = !userInputRef.current?.value.trim();
    const isPasswordEmpty = !passwordInputRef.current?.value.trim();

    setHasError({ userError: isUserEmpty, passwordError: isPasswordEmpty });

    if (!isUserEmpty && !isPasswordEmpty) {
      history.push(`${URL_PATHS.Home}/${userInputRef.current?.value.trim()}`);
    }
  }

  return (
    <div>
      <div className={'formContainer'}>
        <p>Usuario</p>
        <input ref={userInputRef} className={`${userError ? 'error' : ''}`} />
        {userError && <ErrorInLine />}
        <p>Contraseña</p>
        <input type='password' ref={passwordInputRef} className={`${passwordError ? 'error' : ''}`} />
        {passwordError && <ErrorInLine />}
      </div>
      <div className='buttonsContainer'>
        <div>
          <IonButton
            color="primary"
            className='mainButton'
            onClick={submitHandler}
          >Ingresar</IonButton>
        </div>
        <a href={URL_PATHS.Register} className='link'>Registrarme</a>
      </div>
    </div>
  )
}

export default Login
