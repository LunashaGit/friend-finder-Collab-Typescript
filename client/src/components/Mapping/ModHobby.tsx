import { Typography } from "@mui/material";

const ModHobby = ({ hobby }: any) => {
  console.log(hobby);

  return (
    <>
      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        {hobby.description}
      </Typography>
      <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </>
  );
};

export default ModHobby;
