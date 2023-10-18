const initialState = {
  finaldata: null,
};

const reducer = (state = initialState, action) => {
  console.log("reducer");
  switch (action.type) {
    case 'GET_DETAILS':
      return {
        ...state,
        finaldata: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
