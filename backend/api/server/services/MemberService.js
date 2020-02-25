//import { query } from "./connection";
var query = require("./connection");
//var query = connection.query();

class MemberService {
  static async getAllMembers() {
    const sql =
      "SELECT *, concat(substring(member_first_name, 1, 1), substring(member_last_name, 1, 1)) initials FROM members";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getActiveMembers() {
    const sql = `SELECT *, concat(substring(member_first_name, 1, 1), substring(member_last_name, 1, 1)) initials 
      FROM members
      WHERE active = 1`;

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  // showing the active therapists in the dropdown selection box
  static async getActiveTherapistsDropDown() {
    const sql = "SELECT * FROM members WHERE active =1";

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }

  static async getSelected(id) {
    const sql = "SELECT clients FROM members WHERE id = ?";

    try {
      return await query(sql, id);
    } catch (error) {
      throw error;
    }
  }

  static async addOne(newOne) {
    const sql =
      "INSERT INTO members (active, member_full_name, member_first_name, member_last_name, email, role, title, phone, street_address, location, npi, city, zip, notes, bday) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const {
      checkedActive,
      memberFullName,
      memberFirstName,
      memberLastName,
      memberEmail,
      memberRole,
      memberTitle,
      memberPhone,
      memberAddress,
      memberLocation,
      memberNpi,
      memberCity,
      memberZipCode,
      memberNotes,
      memberBday
    } = newOne;
    try {
      return await query(sql, [
        checkedActive,
        memberFullName,
        memberFirstName,
        memberLastName,
        memberEmail,
        memberRole,
        memberTitle,
        memberPhone,
        memberAddress,
        memberLocation,
        memberNpi,
        memberCity,
        memberZipCode,
        memberNotes,
        memberBday
      ]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  // updates information for member
  static async updateInfo(updatedOne) {
    const {
      id,
      checkedActive,
      memberFullName,
      memberFirstName,
      memberLastName,
      memberEmail,
      memberRole,
      memberTitle,
      memberPhone,
      memberAddress,
      memberLocation,
      memberNpi,
      memberCity,
      memberState,
      memberZipCode,
      memberNotes,
      memberBday
    } = updatedOne;
    const sql = `UPDATE members
    SET active = ?,
    member_full_name = ?,
    member_first_name = ?,
    member_last_name = ?,
    email = ?,
    role = ?,
    title = ?,
    phone = ?,
    street_address = ?,
    location = ?,
    npi = ?,
    city = ?,
    state = ?,
    zip =?,
    notes = ?,
    bday =?
    WHERE id = ?`;
    try {
      return await query(sql, [
        checkedActive,
        memberFullName,
        memberFirstName,
        memberLastName,
        memberEmail,
        memberRole,
        memberTitle,
        memberPhone,
        memberAddress,
        memberLocation,
        memberNpi,
        memberCity,
        memberState,
        memberZipCode,
        memberNotes,
        memberBday,
        id
      ]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  // updates privileges
  static async updatePriv(updatedOne) {
    const {
      id,
      invBilling,
      calEvery,
      vOtherCli,
      eOtherSched,
      vOtherSched,
      eOtherInfo,
      vOtherInfo,
      addCli,
      recAtt,
      takePay,
      vNote,
      vCreateRep,
      vOwnCal,
      vOwnCli
    } = updatedOne;
    const sql = `UPDATE members
    SET inv_billing = ?,
    cal_every = ?,
    view_other_clients = ?,
    edit_other_sched = ?,
    view_other_sched = ?,
    edit_other_info = ?,
    view_other_info = ?,
    add_client = ?,
    record_attendance = ?,
    take_pay = ?,
    view_note_hist = ?,
    view_create_rep = ?,
    view_own_cal = ?,
    view_own_clients = ?
    WHERE id = ?`;
    try {
      return await query(sql, [
        invBilling,
        calEvery,
        vOtherCli,
        eOtherSched,
        vOtherSched,
        eOtherInfo,
        vOtherInfo,
        addCli,
        recAtt,
        takePay,
        vNote,
        vCreateRep,
        vOwnCal,
        vOwnCli,
        id
      ]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  // current draft of assigning client
  static async assignClient(updatedOne) {
    var formdata = updatedOne;
    var id = formdata.id;
    var assiCli = formdata.assiCli;
    const sql =
      `UPDATE members SET clients =` + "'" + assiCli + "'" + ` WHERE id =` + id;
    console.log("assign query:", sql);
    try {
      return await query(sql);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  // category report
  static async categoryReport(newOne) {
    const sql = `
    
    SELECT category, SUM(TRUNCATE((TIMESTAMPDIFF(MINUTE, start,end)/60),2))  AS 'hours by category' 
    FROM testevent 
    WHERE bill_type = 'Billable' 
    AND (trans_date >= ? AND trans_date <= ?)
    GROUP BY category
    `;
    const { startDate, endDate } = newOne;
    try {
      return await query(sql, [startDate, endDate]);
    } catch (error) {
      console.log("exception: ", error);
      throw error;
    }
  }

  // billable hours report
  static async billableHours(newOne) {
    var sql = `SELECT therapists, SUM(TRUNCATE((TIMESTAMPDIFF(MINUTE, start,end)/60),2))  AS 'billable hours'  
    FROM testevent 
    WHERE bill_type = 'Billable' 
    AND (trans_date >= ? AND trans_date <= ?)
    GROUP BY therapists `;
    const { startDate, endDate } = newOne;
    try {
      return await query(sql, [startDate, endDate]);
    } catch (error) {
      throw error;
    }
  }

  // insert report
  static async newReport(newOne) {
    var sql = `INSERT INTO reports 
    (report_type, start_date, end_date, create_date)
    VALUES  (?,?,?,?)`;
    const { reportType, startDate, endDate, createDate } = newOne;
    try {
      return await query(sql, [reportType, startDate, endDate, createDate]);
    } catch (error) {
      throw error;
    }
  }

  // get reports
  static async getReports() {
    var sql = `SELECT id, report_type, 
    DATE_FORMAT(start_date, '%m/%d/%Y') AS start_date, DATE_FORMAT(end_date, '%m/%d/%Y') AS end_date,
    DATE_FORMAT(create_date, '%m/%d/%Y') AS create_date
     FROM reports`;

    try {
      return await query(sql);
    } catch (error) {
      throw error;
    }
  }
}

//export default MemberService;
module.exports = MemberService;
