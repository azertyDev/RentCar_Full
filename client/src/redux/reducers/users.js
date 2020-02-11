import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  CLEAR_ALL_FAIL,
  READ_USER_SUCCESS
} from "../consts/index";

const initialState = {
  pending: false,
  fail: false,
  data: [],
  addPending: false,
  addFail: false,
  deletePending: {
    pending: false,
    id: 1
  },
  deleteFail: false,
  editPending: false,
  editFail: false,
  user:{}
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        pending: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        fail: false,
        data: [...payload],
        editPending: false,
        editFail: false,
        addFail: false,
        deleteFail: false,
        deletePending:{
          pending:false,
          id:1
        }
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        fail: false
      };
    case ADD_USER:
      return {
        ...state,
        addPending: true
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload],
        addPending: false
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        addFail: false,
        addPending: false
      };
    case DELETE_USER:
  
      return {
        ...state,
        deletePending: {
          pending: true,
          id: payload
        }
      };
    case DELETE_USER_SUCCESS:
      const user = payload;
      const filteredData = state.data.filter(item => {
        return item._id !== user._id;
      });
      return {
        ...state,
        data: [...filteredData],
        deletePending:{
          pending:false,
          id:1
        },
        deleteFail:false
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        deleteFail: true
      };
    case EDIT_USER:
      return {
        ...state,
        editPending: true
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        editPending: false,
        editFail: true
      };
    case CLEAR_ALL_FAIL:
        return{
            ...state,
            deleteFail:false,
            editFail:false,
            addFail:false
        }
    case READ_USER_SUCCESS:
      return{
        ...state,
        user:payload
      }
    default:
      return {
        ...state
      };
  }
};
