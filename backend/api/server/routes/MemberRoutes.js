//import { Router } from "express";
const express = require("express");
var router = express.Router();
//import MemberController from "../controllers/MemberController";
const MemberController = require("../controllers/MemberController");

//const router = Router();

router.get("/", MemberController.getAllMembers);
router.get("/active", MemberController.getActiveMembers);
router.get("/getTherapists", MemberController.getActiveTherapistsDropDown);
router.post("/addmember", MemberController.addMember);
router.put("/updatememberinfo", MemberController.updateMemberInfo);
router.put("/updatememberpriv", MemberController.updateMemberPriv);
router.put("/assignclient", MemberController.assiCli);
router.get("/selected/:id", MemberController.getSelectedClient);
// category report
router.post("/catreport", MemberController.catReport);
// billable hours report
router.post("/billreport", MemberController.billReport);
// add report
router.post("/addreport", MemberController.addReport);
// get reports
router.get("/getreports", MemberController.getReports);

//export default router;
module.exports = router;
