import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//SAGA Get ShelfPage Function
function* fetchItems() {
    try {
        const items = yield axios({
            method: 'GET', 
            url: '/api/shelf'
        })
        yield put({
            type: 'SET_ITEMS',
            payload: items.data
        })
    }catch(error) {
        console.log('SAGA function fetchItems failed', error)
    }
}//end fetchItems function







//if we ever want to see action.payload in our function, we need to give it action as a parameter
function* createItem(action) {
	const newItem = action.payload;
	//send the newItem string (something like 'ducky') to our server in a POST request
	const response =  yield axios({
		method: 'POST', 
		url: '//api/shelf',
		data: {newItem}
		//👆🏾 same as {newItem: newItem}
	})
	//we've successfully created a new Item thanks to our post route
	//now we need to fetch the data again and bring our itemList reducer back in sync with the data on our server
	yield put({
		type: 'CREATE_ITEM'
	})
	
}

//I think I need to add the action so I can access req.user
function* deleteItem(action) {
    try {
        //capture id to delete
        const itemID = action.payload;
        //send if to server
        const response = yield axios({
            method: 'DELETE',
            url: `/api/shelf/${itemID}`
        })
        yield put({
            type: 'SAGA/FETCH_ITEMS'
        })
    } catch (error) {
        console.log('Shelf delete request failed', error)
    }
}



function* shelfSaga() {
    yield takeEvery('SAGA/CREATE_ITEM', createItem);
    yield takeEvery('SAGA/DELETE_ITEM', deleteItem);
    yield takeEvery('SAGA/FETCH_ITEMS', fetchItems)
}

export default shelfSaga;