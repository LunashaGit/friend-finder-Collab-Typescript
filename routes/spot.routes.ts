import * as rtr from "express";
import * as spotController from "./../controllers/spot.controller";
import multer from "multer";

const router = rtr.Router();
const upload = multer();

router.get("/", spotController.getAllSposts);
router.post("/create", spotController.createSpot);
router.put("/update/:id", spotController.updateSpot);
router.get("/:id", spotController.spotInfo);
router.delete("/delete/:id", spotController.deleteSpot);
router.patch("/participate/:id/:idUser", spotController.InterestedPost);

/*router.delete("/:id", postController.deletePost);
router.patch("/like-post/:id", postController.likePost);
router.patch("/unlike-post/:id", postController.unlikePost); */

//comments
/* router.patch("/comment-post/:id", postController.commentPost);
router.patch("/edit-comment-post/:id", postController.editCommentPost);
router.patch("/delete-comment-post/:id", postController.deleteCommentPost); */

export default router;