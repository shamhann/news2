import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

function HomePage (props) {
  return (
    <div>
    <BrowserRouter>
     <div className='row justify-content-center'>
       <div className='col-8'>
         <Header/>
         <Main/>
         <Footer/>
       </div>
     </div>
    </BrowserRouter>
    </div>
  )
}

export default HomePage