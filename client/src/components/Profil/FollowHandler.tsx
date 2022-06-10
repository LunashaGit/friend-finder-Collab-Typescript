import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../actions/user.actions";
import { isEmpty } from "../Utils";

type FollowProps = {
  idToFollow: string;
};

const FollowHandler = (props: FollowProps) => {
  const userData = useSelector((state: any) => state.userReducer);
  const [isFollowed, setIsFollowed] = useState(false);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch<any>(followUser(userData._id, props.idToFollow));
  };

  const handleUnfollow = () => {};

  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(props.idToFollow)) {
        setIsFollowed(true);
      } else setIsFollowed(false);
    }
  }, [userData, props.idToFollow]);
  return (
    <>
      {isFollowed && !isEmpty(userData) && (
        <span onClick={handleUnfollow}>
          <button className="unfollow-btn">Abonné</button>
        </span>
      )}
      {isFollowed === false && !isEmpty(userData) && (
        <span onClick={handleFollow}>
          <button className="follow-btn">Suivre</button>
        </span>
      )}
    </>
  );
};

export default FollowHandler;
