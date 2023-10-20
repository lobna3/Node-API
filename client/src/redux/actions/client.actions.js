import {
  ADD_CLIENT,
  GET_CLIENT_LIST,
  GET_CLIENT_LIST_SUCCESS,
  UPDATE_CLIENT,
} from "../actionTypes";
import { getApi, postApi, deleteApi, updateApi } from "../../utils/apiHelpers";

export const addClient = () => {
  return {
    type: ADD_CLIENT,
  };
};

export const getClient = () => {
  return {
    type: GET_CLIENT_LIST,
  };
};

export const getClientSuccess = (data) => {
  return {
    type: GET_CLIENT_LIST_SUCCESS,
    payload: data,
  };
};

export const updateClient = (data) => {
  return {
    type: UPDATE_CLIENT,
    payload: data,
  };
};

export const getClientApi = () => async (dispatch) => {
  try {
    dispatch(getClient());
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await getApi("clients", config);
    dispatch(getClientSuccess(result));
    console.log("Listes des clients", result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const addClientApi = (body) => async (dispatch) => {
  try {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    dispatch(addClient());
    let result = await postApi("post_clients", body, config);
    if (result) {
      dispatch(getClientApi());
    }
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const deleteClientApi = (id) => async (dispatch) => {
  try {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    dispatch(addClient());
    let result = await deleteApi("delete_clients/" + id, config);
    if (result) {
      dispatch(getClientApi());
    }
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const updateClientApi = (body, id) => async (dispatch) => {
  try {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    let result = await updateApi("put_clients/" + id, body, config);
    if (result) {
      dispatch(getClientApi());
    }
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

export const getClientsByID = (id) => async (dispatch) => {
  try {
    dispatch(getClient());
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await getApi("clientsById/" + id, config);
    if (result) {
      dispatch(getClientSuccess(result));
    }

    console.log("details clients", result);
  } catch (error) {
    console.log("ERROR", error.message);
  }
};
