import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import spotReducer from "./spot.reducer";
import spotsReducer from "./spots.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  spotReducer,
  spotsReducer,
});
