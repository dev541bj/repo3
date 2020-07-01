import React from "react";
import { Text, View, Link } from "@react-pdf/renderer";
import { styles } from "./styles";

const Table = ({ tableData, balanceTotal }) => {
  const balanceVal = +balanceTotal >= 0 ? "-$" + Math.abs(balanceTotal) : "$" + Math.abs(balanceTotal);
  return (
    <View style={styles.tableWrapper}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ ...styles.tableColHeader, width: "15%" }}>
            <Text style={styles.tableCellHeader}>Date</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "15%" }}>
            <Text style={styles.tableCellHeader}>Client</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "25%" }}>
            <Text style={styles.tableCellHeader}>Description</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "15%" }}>
            <Text style={styles.tableCellHeader}>Session Cost</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "15%" }}>
            <Text style={styles.tableCellHeader}>Payment</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "15%" }}>
            <Text style={styles.tableCellHeader}>Balance</Text>
          </View>
        </View>
        {tableData.map((d, i) => {
          const rowCol = i % 2 ? "#ffffff" : "#f0f0f0";
          const balance = +d.balance >= 0 ? "-$" + Math.abs(d.balance) : "$" + Math.abs(d.balance);
          return (
            <View style={{ ...styles.tableRow, backgroundColor: rowCol }} key={i}>
              <View style={{ ...styles.tableCol, width: "15%" }}>
                <Text style={styles.tableCell}>{d.date}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "15%" }}>
                <Text style={styles.tableCell}>{d.clients || d.payor}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "25%" }}>
                <Text style={styles.tableCell}>{d.description}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "15%" }}>
                <Text style={styles.tableCell}>{d.session_costs || d.session_cost || 0}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "15%" }}>
                <Text style={styles.tableCell}>{d.amount || 0}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "15%" }}>
                <Text style={styles.tableCell}>{balance}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.tableFooter}>
        <View style={styles.totalDue}>
          <Text style={{ fontSize: "14", marginRight: "12" }}>TOTAL DUE:</Text>
          <Text style={{ fontSize: "14" }}>{balanceVal}</Text>
        </View>
        <Link style={styles.payLink} src="https://www.paypal.com/us/home">
          Click Here to Pay
        </Link>
      </View>
    </View>
  );
};

export default Table;
