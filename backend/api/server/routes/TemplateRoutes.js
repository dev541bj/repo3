//import { Router } from "express";
const express = require("express");
var router = express.Router();
const TemplateController = require("../controllers/TemplateController");
//import TemplateController from "../controllers/TemplateController";
//const router = Router();

// this will pull all templates
router.get("/templates", TemplateController.getAllTemplates);

// This will pull a single template by id
router.get("/templates/:id", TemplateController.getTemplateById);

// This will update a single template by id
router.put("/templates/:id", TemplateController.updateTemplateById);

// This will add a new template
router.post("/templates", TemplateController.addNewTemplate);

// This will delete a template
router.delete("/delete/:id", TemplateController.deleteOne);

//export default router;
module.exports = router;
