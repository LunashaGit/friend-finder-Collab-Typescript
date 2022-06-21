import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const ACCEPT_FRIEND = "ACCEPT_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const getUser = (uid: any) => {
  return (dispatch: any) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data: any, id: string) => {
  return (dispatch: any) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
          .then((res) => {
            dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (userId: any, bio: any) => {
  return (dispatch: any) => {
    return axios
      .put(`${process.env.REACT_APP_API_URL}api/user/${userId}`, { bio })
      .then((res) => {
        dispatch({
          type: UPDATE_BIO,
          payload: bio,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const acceptFriend = (idToAccept: string, userId: string) => {
  return (dispatch: any) => {
    return axios
      .patch(
        `${process.env.REACT_APP_API_URL}api/user/accept-friend/${userId}/${idToAccept}`
      )
      .then((res) => {
        dispatch({
          type: ACCEPT_FRIEND,
          payload: idToAccept,
        });
      })
      .catch((err) => console.log(err));
  };
};
export const deleteFriend = (idToDelete: string, userId: string) => {
  return (dispatch: any) => {
    return axios
      .patch(
        `${process.env.REACT_APP_API_URL}api/user/delete-request-friend/${userId}/${idToDelete}`
      )
      .then((res) => {
        dispatch({
          type: DELETE_FRIEND,
          payload: idToDelete,
        });
      })
      .catch((err) => console.log(err));
  };
};
