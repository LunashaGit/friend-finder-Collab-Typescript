import { GET_SPOT } from "../actions/spot.actions";

const initialState = {};

export default function spotReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_SPOT:
      return action.payload;
    default:
      return state;
  }
}
