import { Router } from "express";
import {
  addProductController,
  deleteUserController,
  getAllUserController,
  getUserController,
  updateProductController,
} from "../controllers/admin.controller.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

// admin - users
router.route("/getAllUsers").get(getAllUserController);

router.route("/get-user/:id").get(getUserController);

router.route("/delete-user/:id").get(deleteUserController);

//admin - products-CRUD
router
  .route("/add-product")
  .post(upload.array("images", 5), addProductController);

router
  .route("/update-product/:id")
  .post(upload.array("images", 5), updateProductController);
// router.route("/delete-product").post(deleteProductController);

export default router;
