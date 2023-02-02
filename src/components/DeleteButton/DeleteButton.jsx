import React from 'react';
import { useDispatch } from 'react-redux';

function DeleteButton({ item }) {
    //declare dispatch
    const dispatch = useDispatch();

    //click should dispatch to saga http request to delete item by id
    const handleClick = (event) => {
        event.preventDefault();
        const itemID = item.id;
        dispatch({
            type: 'SAGA/DELETE_ITEM',
            payload: itemID
        })
    }

    return(
        <>
            <button onClick={(event) => {handleClick(event)}}>Delete</button>
        </>
    )
}

export default DeleteButton;