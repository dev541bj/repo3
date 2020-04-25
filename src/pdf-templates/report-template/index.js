import React from "react";
import { Page, Document, Font, View, Image, Text } from "@react-pdf/renderer";
import Chart from "./chart";
import Table from "./table";
import { googleLogo } from "../constants";
import sampleData from "./sample";

import { styles } from "./styles";

Font.register({
	family: "Roboto-Regular",
	src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf"
});

Font.register({
	family: "Roboto-Bold",
	src: "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlvAw.ttf"
});

const ReportTemplate = (props) => {
	const {data, reportType, startDate, endDate} = props;

	return (
		<Document>
			<Page size="LETTER" style={styles.page}>
				<View style={styles.header}>
					<Image style={styles.googleLogo} src={googleLogo}/>
					<Text style={styles.headerTitle}>{reportType}</Text>
					<Text style={styles.headerDate}>{`${startDate} to ${endDate}`}</Text>
				</View>
				<Table data={data}/>
				<View style={styles.footer}>
					<Text style={styles.companyTitle}>Company 123</Text>
					<Text style={styles.footerTitle}>{reportType}</Text>
				</View>
			</Page>
			<Page size="LETTER" style={styles.page}>
				<Chart data={data}/>
				<View style={styles.footer}>
					<Text style={styles.companyTitle}>Company 123</Text>
					<Text style={styles.footerTitle}>{reportType}</Text>
				</View>
			</Page>
		</Document>
	);
};

export default ReportTemplate;
