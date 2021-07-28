import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadLogin } from '../redux/action'

function Login (props) {
    const dispatch = useDispatch();

    const error = useSelector(state => state.error);

    const [login,setLogin] = useState("");
    const [pass,setPass] = useState("");

    const handleClick = () => {
      dispatch(loadLogin(login,pass))
    }
  return (
    <div className="container h-100">
      <div
        className="row justify-content-center align-items-center"
        style={{
          height: '100vh'
        }}
      >
        <div className='col-5 shadow p-5 rounder'>
          <h2 className='text-center pb-3'>Вход</h2>
          <div className='form-group'>
            <input
              type="text"
              className='form-control'
              placeholder='Введите логин'
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type="password"
              className='form-control'
              placeholder='Введите пароль'
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
          </div>
          {error && (
            <div className="form-group text-danger small">
              Неверный пароль или логин
            </div>
          )}
          <div className="form-group text-center">
            <button
              className='btn btn-primary px4'
              onClick={handleClick}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login