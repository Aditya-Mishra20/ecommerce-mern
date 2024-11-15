import { Router } from "express";
import {
  getLatestProducts,
  getProductCategories,
  getSingleProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/latest").get(getLatestProducts);

//get single product
router.route("/:id").get(getSingleProduct);

// router.route("/categories").get(getProductCategories);

export default router;
