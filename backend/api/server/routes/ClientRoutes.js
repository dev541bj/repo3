//import { Router } from "express";
// import ClientController from "../controllers/ClientController";
const express = require("express");
var router = express.Router();
const ClientController = require("../controllers/ClientController");
//const router = Router();

router.get("/all", ClientController.getAllClients);
router.get("/active", ClientController.getActiveClients);
router.delete("/:id", ClientController.deleteOne);
router.get("/payors", ClientController.getAllPayors);
router.post("/addclient", ClientController.addClient);
router.get("/numclients", ClientController.totalClients);
router.put("/updateclientinfo", ClientController.updateClientInfo);
router.put("/updatecontactinfo", ClientController.updateContactInfo);
router.put("/updatebillinginfo", ClientController.updateBillingInfo);
router.put("/updategoals", ClientController.updateGoals);
//export default router;
module.exports = router;
