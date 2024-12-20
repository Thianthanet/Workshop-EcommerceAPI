const express = require("express");
const router = express.Router();
const {
  create,
  remove,
  list,
  listby,
  searchFilters,
  update,
  read,
  createImages,
  removeImage
} = require("../controllers/product");
const { authCheck, adminCheck } = require("../middlewares/authCheck");

//@EMTPOINT http://localhost:5000/api/porduct
router.post("/product", create);
router.get("/products/:count", list);
router.put("/product/:id", update);
router.get("/product/:id", read);
router.delete("/product/:id", remove);
router.post("/productby", listby);
router.post("/search/filters", searchFilters);

router.post("/images", authCheck, adminCheck, createImages);
router.post("/removeimages", authCheck, adminCheck, removeImage);

module.exports = router;
