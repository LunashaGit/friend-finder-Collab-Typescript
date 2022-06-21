import * as rtr from "express";
import * as authController from "./../controllers/auth.controller";
import * as userController from "./../controllers/user.controller";
import * as uploadController from "./../controllers/upload.controller";
import multer from "multer";

const router = rtr.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./client/public/uploads/profil/`);
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name + ".jpg");
  },
});
const upload = multer({ storage: storage });

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

router.patch("/add-friend/:id/:idToFollow", userController.addFriend);
router.patch("/accept-friend/:id/:idToAccept", userController.acceptFriend);
router.delete(
  "/delete-request-friend/:id/:idToAccept",
  userController.deleteRequestFriend
);
router.patch("/remove-friend/:id", userController.follow);

//upload

router.post("/upload", upload.single("file"), uploadController.uploadProfil);

export default router;
