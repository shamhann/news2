import React from 'react'
import { NavLink } from "react-router-dom";

function Header (props) {
  return (
     <div className='header mt-5'>
       <h1 className='h1 text-center'>News</h1>
       <div className='navbar mt-3'>

         <NavLink exact to='/'>
           Главная
         </NavLink>

         <NavLink to='/news'>
           Экономика
         </NavLink>

         <NavLink to='/entrance'>
           Путешествие
         </NavLink>

         <NavLink to='/sport'>
           Спорт
         </NavLink>

         <NavLink to='/exit'>
           Выход
         </NavLink>
       </div>
     </div>
  )
}

export default Header