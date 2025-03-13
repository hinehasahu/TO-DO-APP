const initState = {
  todo: JSON.parse(localStorage.getItem("todos")) || [],
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      let updatedState = {
        ...state.todo,
        todo:[...state.todo,{id: Date.now(), text: action.payload, completed: false }],
      };
      localStorage.setItem("todos", JSON.stringify(updatedState));
      return updatedState;

    case "TOGGLE_TODO":
      let ToggleState = state.todo.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(ToggleState));
      return {...state, todo:ToggleState};

    case "DELETE_TODO":
      let DeleteState = state.todo.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(DeleteState));
      return {...state, todo:DeleteState};

    default:
      return state;
  }
};
