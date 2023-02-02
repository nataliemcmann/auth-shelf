const shelfReducer = (state = {}, action) => {
    switch (action.type) {
      case 'CREATE_ITEM':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default shelfReducer;