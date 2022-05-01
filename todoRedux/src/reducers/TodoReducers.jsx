// Reducer hold current state and action.
const initialData = {
  list: [], //This is the list so array used.
};

export const TodoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((el) => el.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};
