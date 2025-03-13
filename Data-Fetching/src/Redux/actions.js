import axios from "axios";

export const fetchloading = () => ({
  type: "LOADING",
});

export const fetchSuccess = (user) => ({
  type: "SUCCESS",
  payload: user,
});

export const fetchError = (error) => ({
  type: "ERROR",
  payload: error,
});

export const setSearchTerm = (searchTerm) => ({
  type: "FILTER",
  payload: searchTerm,
});


//Redux Thunk Actions

const API_URL = `https://jsonplaceholder.typicode.com/users`;

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(API_URL);
      console.log("DATA: ", res.data);
      dispatch(fetchSuccess(res.data));
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};
