import axios from "axios";

export const GET_SPOT = "GET_SPOT";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_SPOT = "FOLLOW_SPOT";
export const UNFOLLOW_SPOT = "UNFOLLOW_SPOT";

export const getSpot = (uid: any) => {
  return (dispatch: any) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/spot/${uid}`)
      .then((res) => {
        dispatch({ type: GET_SPOT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data: any, id: string) => {
  return (dispatch: any) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/spot/upload`, data)
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/spot/${id}`)
          .then((res) => {
            dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (spotId: any, bio: any) => {
  return (dispatch: any) => {
    return axios
      .put(`${process.env.REACT_APP_API_URL}api/spot/${spotId}`, { bio })
      .then((res) => {
        dispatch({
          type: UPDATE_BIO,
          payload: bio,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const followSpot = (followerId: string, idToFollow: string) => {
  return (dispatch: any) => {
    return axios
      .patch(`${process.env.REACT_APP_API_URL}api/spot/follow/${followerId}`, {
        idToFollow,
      })
      .then((res) => {
        dispatch({
          type: FOLLOW_SPOT,
          payload: idToFollow,
        });
      })
      .catch((err) => console.log(err));
  };
};
