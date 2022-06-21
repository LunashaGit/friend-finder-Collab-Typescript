import {
  ACCEPT_FRIEND,
  DELETE_FRIEND,
  GET_USER,
  UPDATE_BIO,
  UPLOAD_PICTURE,
} from "../actions/user.actions";

interface stateProps {
  pseudo?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  adresse?: string;
  latitude?: number;
  longitude?: number;
  password?: string;
  picture?: string;
  bio?: string;
  friendRequestSend?: [string];
  friendRequestReceived?: [string];
  friends?: [string];
  hobbies?: [string];
  isAdmin?: boolean;
  userInterestedIn?: [string];
}
const initialState: stateProps = {};

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
      if (state.friendRequestReceived) {
        return {
          ...state,
          friendRequestReceived: state.friendRequestReceived.filter(
            (id: any) => id !== action.payload
          ),
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}
