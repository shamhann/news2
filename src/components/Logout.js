import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutStart } from '../redux/action'

function Logout (props) {
  const dispatch = useDispatch();

  const logout = e => {
    e.preventDefault();
    dispatch(logoutStart())
  }
  return (
    <div>
      <a href="#" onClick={logout}>выход</a>
    </div>
  )
}

export default Logout