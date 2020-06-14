import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "../account-template/styles";

const Table = ({ tableData }) => {
  return (
    <View style={styles.tableWrapper}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ ...styles.tableColHeader, width: "20%" }}>
            <Text style={styles.tableCellHeader}>Invoice Date</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "20%" }}>
            <Text style={styles.tableCellHeader}>Payor</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "20%" }}>
            <Text style={styles.tableCellHeader}>Start Date</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "20%" }}>
            <Text style={styles.tableCellHeader}>End Date</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "20%" }}>
            <Text style={styles.tableCellHeader}>Amount</Text>
          </View>
        </View>
        {tableData.map((d, i) => {
          const rowCol = i % 2 ? "#ffffff" : "#f0f0f0";
          return (
            <View style={{ ...styles.tableRow, backgroundColor: rowCol }}>
              <View style={{ ...styles.tableCol, width: "20%" }}>
                <Text style={styles.tableCell}>{d.inv_date}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "20%" }}>
                <Text style={styles.tableCell}>{d.payor}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "20%" }}>
                <Text style={styles.tableCell}>{d.start_date}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "20%" }}>
                <Text style={styles.tableCell}>{d.end_date}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "20%" }}>
                <Text style={styles.tableCell}>{d.amount}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Table;
