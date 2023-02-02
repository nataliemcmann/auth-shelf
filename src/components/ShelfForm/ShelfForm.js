import React from 'react';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';



const AddItemForm = () => { 

    const [descriptionInput, setdescriptionInput] = useState('');
    const [imageInput, setimageInput] = useState('');
  
      const dispatch = useDispatch();


const addItem = (event) => {
    event.preventDefault();
    let newItem = {
      description: descriptionInput,
      url: imageInput,
     
    }
    console.log('This is the new ITEM', newItem);
    dispatch({
      type: "SAGA/CREATE_ITEM",
      payload: 
      newItem, // state/value we gave the input box
    });
    dispatch({
      type: "SAGA/FETCH_ITEMS"
    })
    setdescriptionInput('');
    setimageInput('');
  };



return ( 

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

)

}

export default AddItemForm;