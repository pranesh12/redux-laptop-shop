const axios = require("axios");
export const userRegister = (userInfo) => async (dispatch) => {
  dispatch({ type: "UESER_REGISTER_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:5000/user/register",
      userInfo
    );
    console.log(response);
    dispatch({ type: "UESER_REGISTER_REQUEST_SUCCESS" });
  } catch (error) {
    dispatch({ type: "UESER_REGISTER_REQUEST_FAILED", payload: error });
  }
};
