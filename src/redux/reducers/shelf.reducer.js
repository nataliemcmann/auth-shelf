
//Items reducer
const itemsReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_ITEMS': //yield put type from fetchItems Saga Function
            return action.payload;
        default:
            return state;
    }
}//end Items reducer









// const newItemReducer = (state = {}, action) => {
//     switch (action.type) {
//       case 'CREATE_ITEM':
//         return action.payload;
//       default:
//         return state;
//     }
//   };
  
  // user will be on the redux state at:
  // state.user
  export default itemsReducer;

