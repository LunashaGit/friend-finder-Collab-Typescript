import { GET_SPOTS } from "../actions/spots.actions";

const initialState = {};

export default function spotsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_SPOTS:
      return action.payload;
    default:
      return state;
  }
}
