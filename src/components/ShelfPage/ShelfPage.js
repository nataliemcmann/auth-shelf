import React from 'react';
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';

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

  const addItem = (event) => {
    event.preventDefault();
    let newItem = {
      description: descriptionInput,
      url: imageInput,
     
    }
    console.log('This is the new ITEM', newItem);
    dispatch({
      type: "SAGA/CREATE_ITEM",
      payload: newItem, // state/value we gave the input box
    });
    dispatch({
      type: "SAGA/FETCH_ITEMS"
    })
    setdescriptionInput('');
    setimageInput('');
  };

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
            </li>
        })
    }
      </ul>
      <form onSubmit={addItem}>
      <input
                  type='text'
                  placeholder="Description"
                  value={descriptionInput}
                  onChange={(evt) => setdescriptionInput(evt.target.value)} />
      <input
                  type='text'
                  placeholder="Image"
                  value={imageInput}
                  onChange={(evt) => setimageInput(evt.target.value)} />
        <>
          <button onClick={(event) => addItem(event)}>ADD ITEM</button>
        </>
      </form>
    </div>
  );
}

export default ShelfPage;
