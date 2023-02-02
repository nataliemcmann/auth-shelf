import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function ShelfPage() {

  const [descriptionInput, setdescriptionInput] = useState('');
  const [imageInput, setimageInput] = useState('');


  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);



  useEffect(() => {
    dispatch({
      type: "FETCH_THINGS",
    });
  }, []);

  const addItem = (event) => {
    event.preventDefault();
    let newItem = {
      description: descriptionInput,
      image_url: imageInput,
     
    }
    console.log('This is the new ITEM', newItem);
    dispatch({
      type: "SAGA/CREATE_ITEM",
      payload: newItem, // state/value we gave the input box
    });
  };

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.description}
              <img src={item.image_url} />
            </li>
          );
        })}
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
          <button onClick={() => addItem()}></button>
        </>
      </form>
    </div>
  );
}

export default ShelfPage;
