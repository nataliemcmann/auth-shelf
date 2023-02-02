import React from 'react';
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import AddItemForm from '../ShelfForm/ShelfForm';

function ShelfPage() {

  const [descriptionInput, setdescriptionInput] = useState('');
  const [imageInput, setimageInput] = useState('');

    const dispatch = useDispatch();
    const itemsReducer = useSelector(store => store.itemsReducer);
   
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_ITEMS'
        });
    }, []);


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
      {   itemsReducer &&
        itemsReducer.map((item) => {
            return <li 
                key={item.id}>
                {item.description}
                <img src={item.image_url}/>
                <DeleteButton item={item}/>
                <AddItemForm />
            </li>
        })
    }
      </ul>
      
    </div>
  );
}

export default ShelfPage;
