import React from "react";
import { Page, Document, Font, View, Image, Text } from "@react-pdf/renderer";
import Table from "./table";
import { googleLogo } from "../constants";
import { styles } from "../account-template/styles";

Font.register({
  family: "Roboto-Regular",
  src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf",
});

Font.register({
  family: "Roboto-Bold",
  src: "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlvAw.ttf",
});

const InvoiceTemplate = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Image style={styles.googleLogo} src={googleLogo} />
          </View>
          <Text style={styles.headerAddress1}>123 Fake Street</Text>
          <Text style={styles.headerAddress2}>Los Angeles 100001</Text>
          <View style={styles.headerTexts}>
            <Text style={styles.headerText}>Bill To: </Text>
            <Text style={styles.headerText}>Jill Jackson</Text>
            <Text style={styles.headerText}>555 Lane</Text>
            <Text style={styles.headerText}>Frisco, TX</Text>
            <Text style={styles.headerText}>555-555-5544</Text>
            <Text style={styles.headerText}>jillljackson.gmail.com</Text>
          </View>
        </View>
        <View style={styles.invoice}>
          <Text style={styles.invoiceTitle}>Invoice</Text>
          <View style={styles.invoiceNumber}>
            <Text style={styles.invoiceNumberLabel}>Invoice Number </Text>
            <Text style={styles.invoiceNumberText}>0SAF8SD7-ASDF8A</Text>
          </View>
          <View style={styles.invoicePriorBalance}>
            <Text style={styles.invoicePriorBalanceLabel}>Prior Balance: </Text>
            <Text style={styles.invoicePriorBalanceText}>0SAF8SD7-ASDF8A</Text>
          </View>
          <View style={styles.invoiceDateRange}>
            <Text style={styles.invoiceDateRangeLabel}>Date Range: </Text>
            <Text style={styles.invoiceDateRangeText}>0SAF8SD7-ASDF8A</Text>
          </View>
        </View>
        {data.length > 0 && <Table tableData={data} />}
        <View style={styles.footer}>
          <Text style={styles.companyTitle}>Company 123</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceTemplate;
