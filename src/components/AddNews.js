import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNews } from '../redux/action'

function AddNews (props) {
  const dispatch = useDispatch();

  const contactsLoading = useSelector((state ) => state.contactsLoading);

  const handleDelete = (id) => {
    dispatch(removeNews(id));
  }
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
      <button
              className='btn-primary px-4 m-2'
              onClick={() => handleDelete(props.news.id)}
              disabled={contactsLoading}>
                delete
      </button>
    </div>
  )
}

export default AddNews