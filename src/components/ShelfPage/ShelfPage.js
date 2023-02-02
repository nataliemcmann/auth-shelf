import React from 'react';

function ShelfPage() {



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
    </div>
  );
}

export default ShelfPage;
