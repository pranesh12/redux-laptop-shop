import axios from "axios";

export const getAllLaptop = () => async (dispatch) => {
  dispatch({ type: "GET_LAPTOP_REQUEST" });
  try {
    const res = await axios.get("http://localhost:5000/getAllLaptops");
    dispatch({ type: "GET_LAPTOP_REQUEST_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_LAPTOP_REQUEST_FAILED", payload: err });
  }
};
