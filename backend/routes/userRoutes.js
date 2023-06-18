/*******************************************************************************
 * This file is the path that will redirect to the functions in userCon.js
 ******************************************************************************/
import express from "express";
import {
  register,
  getData,
  updateData,
  deleteData,
  getDataFirst,
  getDataByUsername,
  getDataByParameter,
  updateMany,
  deleteMany,
} from "../controllers/userCon.js";
const router = express.Router();

// POST -> Create data
// GET -> Get data
// PUT -> Update Data
// DELETE -> Delete data

router.post("/register", register);
router.get("/getData", getData);
router.get("/getDataFirst", getDataFirst);
router.get("/getByUsername", getDataByUsername);
router.get("/getDataByParameter", getDataByParameter);
router.put("/updateData", updateData);
router.put("/updateMany", updateMany);
router.delete("/deleteData", deleteData);
router.put("/deleteMany", deleteMany);
export default router;
