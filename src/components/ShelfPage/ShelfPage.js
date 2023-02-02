import React from 'react';
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';

function ShelfPage() {



    const dispatch = useDispatch();
    const items = useSelector(store => store.items);
   
    useEffect(() => {
        dispatch({
            type: 'FETCH_THINGS'
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
            {
                items.map((item) => {
                    return <li 
                        key={item.id}>
                        {item.discription}
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
