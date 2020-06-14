import { StyleSheet } from "@react-pdf/renderer";

export const regularFont = "Roboto-Regular";
export const boldFont = "Roboto-Bold";
const mainColor = "#02838f";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    fontFamily: regularFont,
    padding: "40 40",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    position: "relative",
    width: "40%",
    height: "240",
  },
  googleLogo: {
    height: "60",
    objectFit: "contain",
  },
  headerAddress1: {
    textAlign: "center",
    fontSize: "15",
    fontFamily: boldFont,
  },
  headerAddress2: {
    textAlign: "center",
    fontSize: "15",
    fontFamily: boldFont,
  },
  headerTexts: {
    marginTop: "30",
  },
  headerText: {
    textAlign: "center",
    fontSize: "13",
  },
  invoice: {
    width: "60%",
    height: "240",
    display: "flex",
    alignItems: "end",
  },
  invoiceTitle: {
    marginTop: "30",
    fontFamily: regularFont,
    fontSize: "20",
  },
  invoiceNumber: {
    marginTop: "10",
    display: "flex",
    flexDirection: "row",
  },
  invoiceNumberLabel: {
    fontSize: "12",
  },
  invoiceNumberText: {
    fontSize: "12",
    fontFamily: boldFont,
  },
  invoicePriorBalance: {
    marginTop: "20",
    display: "flex",
    flexDirection: "row",
  },
  invoicePriorBalanceLabel: {
    fontFamily: boldFont,
    fontSize: "14",
  },
  invoicePriorBalanceText: {
    fontFamily: regularFont,
    fontSize: "14",
  },
  invoiceDateRange: {
    marginTop: "20",
    display: "flex",
    flexDirection: "row",
  },
  invoiceDateRangeLabel: {
    fontFamily: boldFont,
    fontSize: "14",
  },
  invoiceDateRangeText: {
    fontFamily: regularFont,
    fontSize: "14",
  },
  footer: {
    position: "absolute",
    bottom: "10",
    left: "30",
    width: "552",
    height: "32",
    backgroundColor: mainColor,
  },
  companyTitle: {
    position: "absolute",
    top: "4",
    left: "10",
    color: "white",
    fontFamily: regularFont,
  },
  footerTitle: {
    position: "absolute",
    top: "4",
    right: "10",
    color: "white",
    fontFamily: regularFont,
  },
  tableWrapper: {
    width: "100%",
    marginTop: "20",
  },
  table: {
    display: "table",
    width: "auto",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    height: "36",
    backgroundColor: mainColor,
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tableCol: {
    width: "50%",
    textAlign: "center",
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
});
