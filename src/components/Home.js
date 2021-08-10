import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadComment } from '../redux/action'
import AddNews from './AddNews'
import Logout from './Logout'

function Home (props) {
   const dispatch = useDispatch();
   const addNews = useSelector(state => state.addNews);

   const [name, setName] = useState('')
   const [text,setText] = useState('')

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNews = (e) => {
    setText(e.target.value);
  };

  const handleClickNews = ( name, text) => {
    dispatch(loadComment( name, text));
    setName('');
    setText('');
  };

  const [value, setValue] = useState('');

  const filteredNews = addNews.filter(addNew => {
    return addNew.name.toLowerCase().includes(value.toLowerCase())
  })


  return (
   <div>
     <div className='row mt-5 justify-content-center'>
       <div className='col-8'>
         <div className='text-end'>
           <Logout/>
         </div>
         <div className='form-group '>
           <h3>Добавление новостей</h3>
           <input
             type="text"
             placeholder='поиск'
             onChange={(event) => setValue(event.target.value) }
             className='border-0 mb-3 ml-3'/>
           <input
             type="text"
             className='form-control mb-3 ml-3'
             value={name}
             onChange={handleName}
             placeholder='Тема новостей'/>
           <input
             type="text"
             className='form-control ml-3 '
             value={text}
             placeholder='новость'
             onChange={handleNews}/>
         </div>
         <div className='form-group text-center'>
           <button
             className="btn btn-primary px4 "
             onClick={() => handleClickNews( name, text)}
           >
             add
           </button>
         </div>
         <div className="modalComment">
           <h2 className='text-center'>
             Лента новостей
           </h2>
           {filteredNews.map((news) => {
             return  <AddNews  news={news} />;
           })}
         </div>
       </div>
     </div>
   </div>
  )
}

export default Home