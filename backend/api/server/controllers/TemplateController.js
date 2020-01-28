//import TemplateService from "../services/TemplateService";
var TemplateService = require("../services/TemplateService");
//import Util from "../utils/Utils";
var Util = require("../utils/Utils");

const util = new Util();

class TemplateController {
  static async addNewTemplate(req, res) {
    try {
      const createdAt = new Date();

      await TemplateService.addNew({ ...req.body, createdAt });

      util.setSuccess(200, "Template added.");

      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  //this is this initial Controller for pulling the Templates table
  static async getAllTemplates(req, res) {
    try {
      const allTemplates = await TemplateService.getAll();
      if (allTemplates.length > 0) {
        util.setSuccess(200, "Templates retrieved", allTemplates);
      } else {
        util.setSuccess(200, "No Templates found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getTemplateById(req, res) {
    try {
      const template = await TemplateService.getById(req.params.id);

      if (template && template.length) {
        util.setSuccess(200, "Template retrieved", template[0]);
      } else {
        util.setSuccess(200, "No Templates found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async updateTemplateById(req, res) {
    try {
      await TemplateService.updateById(req.body, req.params.id);

      util.setSuccess(200, "Template updated.");

      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async deleteOne(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const oneToDelete = await TemplateService.deleteOne(id);

      if (oneToDelete) {
        util.setSuccess(200, "Template deleted");
      } else {
        util.setError(404, `Template with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

//export default TemplateController;
module.exports = TemplateController;
