const initState = {
  users: [],
  loading: false,
  error: "",
  searchTerm: "",
};

export const fetchReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADIING":
      return { ...state, users: [], loading: true, error: "" };
    case "SUCCESS":
      return { ...state, users: action.payload, loading: false, error: "" };
    case "FILTER":
      return { ...state, searchTerm: action.payload };
    case "ERROR":
      return {
        ...state,
        users: [],
        loading: false,
        error: "Error fetching data",
      };
    default:
      return state;
  }
};
