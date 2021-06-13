export const getAllLaptopReducer = (state = { laptops: [] }, action) => {
  switch (action.type) {
    case "GET_LAPTOP_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_LAPTOP_REQUEST_SUCCESS":
      return {
        ...state,
        laptops: action.payload,
      };
    case "GET_LAPTOP_REQUEST_FAILED":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
