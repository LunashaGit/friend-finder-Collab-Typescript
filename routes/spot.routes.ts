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
router.patch("/participate/:id", spotController.InterestedPost);

router.patch("/comment-spot/:id", spotController.commentPost);
router.patch("/edit-comment-spot/:id", spotController.editCommentPost);
router.delete("/delete-comment-spot/:id", spotController.deleteCommentPost);

export default router;