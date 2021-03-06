const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'MINUS':
      return {
        ...state,
        count: state.count === 0 ? 0 : state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
