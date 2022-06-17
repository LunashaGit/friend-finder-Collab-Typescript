import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spacing from "../components/Spacing";
import { uploadPicture } from "./../actions/user.actions";
import { styled } from "@mui/material/styles";

const Profil = () => {
  const userData = useSelector((state: any) => state.userReducer);
  const [file, setFile] = useState<any>();
  const [toggleImg, setToggleImg] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handlePicture = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);

    dispatch<any>(uploadPicture(data, userData._id));
    setToggleImg(false);
  };

  useEffect(() => {
    setToggleImg(!toggleImg);
  }, [file]);

  const Input = styled("input")({
    display: "none",
  });

  return (
    <>
      <header className="h-[70vh] md:h-[50vh] lg:h-[30rem]">
        <div className="fixed top-0 -z-10 h-full w-full bg-cover bg-center bg-[url(https://source.unsplash.com/random)] after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b from-black/70`" />
      </header>
      <div className="h-screen w-screen bg-white">
        <Spacing>
          <img
            src={userData.picture}
            alt="user-pic"
            className=" rounded-full border-4 border-white w-40 h-40 md:w-52 md:h-52 absolute top-0 left-6 sm:left-0 -translate-y-1/3"
          />
          <div className="flex justify-between items-start">
            <form
              action=""
              onSubmit={handlePicture}
              className="flex items-end justify-center ml-3 md:ml-0 w-40 md:w-52 h-24 md:h-32 lg:h-28"
            >
              {toggleImg ? (
                <label htmlFor="contained-button-file" className="w-full">
                  <Input
                    accept=".jpg, .jpeg, .png"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={(e: any) => setFile(e.target.files[0])}
                  />
                  <Button variant="contained" component="span" fullWidth>
                    Upload
                  </Button>
                </label>
              ) : (
                <Button type="submit" variant="contained" fullWidth>
                  Save picture
                </Button>
              )}
            </form>
            <div className="flex flex-col items-end">
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
                {userData.firstName} {userData.lastName}
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold italic">
                {userData.pseudo}
              </h3>
            </div>
          </div>
        </Spacing>
      </div>
    </>
  );
};

export default Profil;
