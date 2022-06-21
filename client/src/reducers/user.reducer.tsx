import {
  ACCEPT_FRIEND,
  DELETE_FRIEND,
  GET_USER,
  UPDATE_BIO,
  UPLOAD_PICTURE,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        picture: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    case ACCEPT_FRIEND:
      return {
        ...state,
        friends: action.payload,
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friendRequestReceived: state.friendRequestReceived.filter(
          (id: any) => id !== action.payload
        ),
      };

    default:
      return state;
  }
}
