import React from 'react'

function AddNews (props) {
  return (
    <div>
      <div className='border p-3 m-3 text-center'>
        <div className="com">{props.news.date}</div>
        <div className="com">
          <div className="com">Тема: {props.news.name}</div>
        </div>
        <div>
          <div className="com">Новости: {props.news.text}</div>
        </div>
      </div>
    </div>
  )
}

export default AddNews