import axios from "axios";

export const GET_SPOTS = "GET_SPOTS";

export const getSpots = () => {
  return (dispatch: any) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/spot`)
      .then((res) => {
        dispatch({ type: GET_SPOTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
