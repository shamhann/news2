import React from 'react'

function Home (props) {
  return (
    <div className='row mt-5 justify-content-center'>
      <div className='col-8'>
        <div className='form-group'>
          <h3>Добавление новостей</h3>
          <input
            type="text"
            placeholder='поиск'
            className='border-0 mb-3 ml-3'/>
          <input
            type="text"
            className='form-control mb-3 ml-3'
            placeholder='Тема новостей'/>
          <input
            type="text"
            className='form-control ml-3 '
            placeholder='новость'/>
        </div>
      </div>
    </div>
  )
}

export default Home