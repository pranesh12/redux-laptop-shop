export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case "UESER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "UESER_REGISTER_REQUEST_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "UESER_REGISTER_REQUEST_FAILED":
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "UESER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "UESER_LOGIN_REQUEST_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "UESER_LOGIN_REQUEST_FAILED":
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
