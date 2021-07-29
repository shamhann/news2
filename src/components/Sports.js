import React from 'react'

function Sports (props) {
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-2 text-center'>
          <div className='sport-title'>
            <h2> СПОРТ</h2>
          </div>
        </div>
        <div className='col'>
          <div className='sport'>
            <b> Футбол</b>
            <p>
              Италия 1(3) : 1(2) Англия
            </p>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <div className='footballTitle text-center'>
            Футбол. Евро Италия - Англия
          </div>
          <p className='text-center mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sports