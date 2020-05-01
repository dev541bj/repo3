import { StyleSheet } from "@react-pdf/renderer";

export const regularFont = "Roboto-Regular";
export const boldFont = "Roboto-Bold";
const mainColor = "#02838f";

export const styles = StyleSheet.create({
	page: {
		position: "relative",
		backgroundColor: "#FFF",
		fontFamily: regularFont,
		padding: "40 40"
	},
	header: {
		width: "100%",
		height: "100"
	},
	googleLogo: {
		position: "absolute",
		top: "-10",
		height: "80"
	},
	headerTitle: {
		position: "absolute",
		right: "0",
		fontSize: "28",
		fontFamily: boldFont,
		color: mainColor
	},
	headerDate: {
		position: "absolute",
		right: "0",
		top: "40",
		fontFamily: boldFont,
		color: mainColor
	},
	footer: {
		position: "absolute",
		bottom: "10",
		left: "30",
		width: "552",
		height: "32",
		backgroundColor: mainColor
	},
	companyTitle: {
		position: "absolute",
		top: "4",
		left: "10",
		color: "white",
		fontFamily: boldFont
	},
	footerTitle: {
		position: "absolute",
		top: "4",
		right: "10",
		color: "white",
		fontFamily: boldFont
	},
	tableWrapper: {
		width: "100%"
	},
	table: {
		display: "table",
		width: "auto",
	},
	tableRow: {
		margin: "auto",
		flexDirection: "row"
	},
	tableColHeader: {
		width: "50%",
		height: "40",
		backgroundColor: mainColor,
		color: "#ffffff",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	tableCol: {
		width: "50%",
		textAlign: "center"
	},
	tableCellHeader: {
		margin: 5,
		fontSize: 12,
		fontWeight: 500
	},
	tableCell: {
		margin: 5,
		fontSize: 10
	},
	chartWrapper: {
		position: "relative",
		marginTop: "60",
		padding: "20 20 120 54",
		height: "480",
		width: "100%"
	},
	chart: {
		position: "relative",
		width: "100%",
		height: "100%"
	},
	chartBarArea: {
		position: "absolute",
		width: "100%",
		height: "340",
		// backgroundColor: "red",
		display: "flex",
		flexDirection: "row"
	},
	chartBar: {
		position: "relative",
		height: "100%",
		flexGrow: "1",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center"
	},
	chartBarLine: {
		width: "30",
		backgroundColor: "#4472c4",
		border: "1px solid black"
	},
	chartBarLabel: {
		position: "absolute",
		height: "200",
		bottom: "-206",
		fontFamily: boldFont,
		fontSize: "12",
		color: "#52524f",
		padding: "0 2"
	},
	chartAxisArea: {
		position: "absolute",
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		borderBottom: "2 solid #52524f"
	},
	chartAxisSection: {
		position: "relative",
		flexGrow: "1",
		borderTop: "2 solid #52524f"
	},
	chartAxisLabel: {
		position: "absolute",
		top: "-8",
		left: "-100%",
		marginRight: "10",
		textAlign: "right",
		fontFamily: boldFont,
		fontSize: "12",
		color: "#52524f"
	},
	chartAxisOriginLabel: {
		position: "absolute",
		top: "332",
		left: "-100%",
		marginRight: "10",
		textAlign: "right",
		fontFamily: boldFont,
		fontSize: "12",
		color: "#52524f"
	}
});
