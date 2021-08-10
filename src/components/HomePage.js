import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

function HomePage (props) {
  return (
    <div>
     <div className='row justify-content-center'>
       <div className='col-8'>
       <div className='HomePage'>
         <Header/>
         <Home/>
         <Footer/>
       </div>
       </div>
     </div>
    </div>
  )
}

export default HomePage