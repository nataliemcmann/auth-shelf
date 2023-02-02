import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';










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

function* shelfSaga() {
    yield takeEvery('SAGA/CREATE_ITEM', createItem);
  }
  
  export default shelfSaga;