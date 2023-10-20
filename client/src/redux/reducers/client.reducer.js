import {
  ADD_CLIENT,
  GET_CLIENT_LIST,
  GET_CLIENT_LIST_SUCCESS,
  UPDATE_CLIENT,
} from "../actionTypes";

const clientInitState = {
  loading: false,
  clientlist: [],
  selectedClient: {},
};

const clientReducer = (state = clientInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_CLIENT:
      return { ...state, loading: true };
    case GET_CLIENT_LIST:
      return { ...state, loading: true };
    case GET_CLIENT_LIST_SUCCESS:
      return { ...state, loading: false, clientlist: payload };
    case UPDATE_CLIENT:
      return { ...state, selectedClient: payload };

    default:
      return state;
  }
};
export default clientReducer;
