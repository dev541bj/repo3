import React from "react";
import { Page, Document, Font, View, Image, Text } from "@react-pdf/renderer";
import moment from "moment";
import Table from "./table";
import { googleLogo } from "../constants";
import { styles } from "./styles";

Font.register({
  family: "Roboto-Regular",
  src: "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf",
});

Font.register({
  family: "Roboto-Bold",
  src: "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlvAw.ttf",
});

const AccountTemplate = (props) => {
  const { data, client, balance } = props;

  const dates = data.map((d) => moment(d));
  const minDate = moment.min(dates).format("YYYY-MM-DD");
  const maxDate = moment.max(dates).format("YYYY-MM-DD");

  const balanceVal = +balance >= 0 ? "-$" + Math.abs(balance) : "$" + Math.abs(balance);

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
            <Text style={styles.headerText}>{client.billing_full_name}</Text>
            <Text style={styles.headerText}>{client.billing_street_address}</Text>
            <Text style={styles.headerText}>{client.billing_city + client.billing_state}</Text>
            <Text style={styles.headerText}>{client.billing_phone}</Text>
            <Text style={styles.headerText}>{client.billing_email}</Text>
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
            <Text style={styles.invoicePriorBalanceText}>{balanceVal}</Text>
          </View>
          <View style={styles.invoiceDateRange}>
            <Text style={styles.invoiceDateRangeLabel}>Date Range: </Text>
            <Text style={styles.invoiceDateRangeText}>{minDate + " - " + maxDate}</Text>
          </View>
        </View>
        <Table tableData={data} balanceTotal={balance} />
        <View style={styles.footer}>
          <Text style={styles.companyTitle}>Company 123</Text>
        </View>
      </Page>
    </Document>
  );
};

export default AccountTemplate;
