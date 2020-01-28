//import { query } from "./connection";
var query = require("./connection");

class TemplateService {
  // add a new template
  static async addNew(template) {
    const sql =
      "INSERT INTO templates (template_name, visible, created, sections) VALUES (?,?,?,?)";

    const { name, visible, createdAt, sections } = template;

    try {
      return await query(sql, [name, visible, createdAt, sections]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  // this is the initial SELECT statement for pulling the templates table
  static async getAll() {
    const sql = "SELECT id, template_name, visible, created FROM templates";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getById(templateId) {
    const sql = "SELECT * FROM templates WHERE id = ?";

    try {
      return await query(sql, [templateId]);
    } catch (error) {
      throw error;
    }
  }

  // update template by id
  static async updateById(template, templateId) {
    const sql =
      "UPDATE templates SET template_name = ?, visible = ?, sections = ? WHERE id = ?";

    const { name, visible, sections } = template;

    try {
      return await query(sql, [name, visible, sections, templateId]);
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    const sql = `DELETE FROM templates WHERE id = ${id}`;

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }
}

//export default TemplateService;
module.exports = TemplateService;
