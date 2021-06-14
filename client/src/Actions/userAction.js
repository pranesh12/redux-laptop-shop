const axios = require("axios");
export const userRegister = (userInfo) => async (dispatch, getState) => {
  dispatch({ type: "UESER_REGISTER_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:5000/user/register",
      userInfo
    );
    console.log(response);
    dispatch({ type: "UESER_REGISTER_REQUEST_SUCCESS" });
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "UESER_REGISTER_REQUEST_FAILED", payload: error });
  }
};

export const userLogin = (userInfo) => async (dispatch) => {
  dispatch({ type: "UESER_LOGIN_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:5000/user/login",
      userInfo
    );
    console.log(response);
    dispatch({ type: "UESER_LOGIN_REQUEST_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "UESER_LOGIN_REQUEST_FAILED", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};
