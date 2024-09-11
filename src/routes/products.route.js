import { Router } from "express";
import {
  getLatestProducts,
  getSingleProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/latest").get(getLatestProducts);

//get single product
router.route("/:id").get(getSingleProduct);

export default router;
