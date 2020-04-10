import { StyleSheet } from "@react-pdf/renderer";

export const regularFont = "Roboto-Regular";
export const boldFont = "Roboto-Bold";

export const styles = StyleSheet.create({
  page: {
    position: "relative",
    backgroundColor: "#FFF",
    fontFamily: regularFont,
    padding: "40 40",
  },
  header: {
    width: "100%",
    height: "100",
  },
  googleLogo: {
    position: "absolute",
    top: "-10",
    height: "80",
  },
  headerTitle: {
    position: "absolute",
    right: "0",
    fontSize: "28",
    fontFamily: boldFont,
    color: "#0c909f",
  },
  headerDate: {
    position: "absolute",
    right: "0",
    top: "40",
    fontFamily: boldFont,
    color: "#0c909f",
  },
  footer: {
    position: "absolute",
    bottom: "10",
    left: "30",
    width: "552",
    height: "32",
    backgroundColor: "#0c909f",
  },
  companyTitle: {
    position: "absolute",
    top: "4",
    left: "10",
    color: "white",
    fontFamily: boldFont,
  },
  footerTitle: {
    position: "absolute",
    top: "4",
    right: "10",
    color: "white",
    fontFamily: boldFont,
  },
  tableWrapper: {
    width: "100%",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: "auto",
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: "auto",
    margin: 5,
    fontSize: 10,
  },
  chartWrapper: {
    backgroundColor: "red",
    marginTop: "60",
    height: "400",
    width: "100%",
  },
});
