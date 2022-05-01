import { store } from "../Store";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./Actions";

const init = { todos: [] };

export const todoReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: store.todos + payload };
    case DELETE_TODO:
      return {
        ...store,
        todos: [
          ...store.todos.filter((t) => {
            return t.id !== payload.id;
          }),
        ],
      };
    case TOGGLE_TODO:
      return {
        ...store,
        todos: [
          ...store.todos.map((t) => {
            if (t.id === payload.id) {
              t.status = !t.status;
            }
            return t;
          }),
        ],
      };

    default:
      return { ...store };
  }
};