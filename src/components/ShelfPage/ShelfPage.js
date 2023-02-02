import React from 'react';
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';

function ShelfPage() {

    const dispatch = useDispatch();
    const itemsReducer = useSelector(store => store.itemsReducer);
   
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_ITEMS'
        });
    }, []);


  const addItem = () => {
    dispatch({
      type: 'SAGA/CREATE_ITEM',
      payload: newElement // state/value we gave the input box
    })
  }


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
    </div>
  );
}

export default ShelfPage;
