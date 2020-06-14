import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";

const Table = ({ tableData }) => {
  return (
    <View style={styles.tableWrapper}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ ...styles.tableColHeader, width: "17%" }}>
            <Text style={styles.tableCellHeader}>Date</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "17%" }}>
            <Text style={styles.tableCellHeader}>Client</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "32%" }}>
            <Text style={styles.tableCellHeader}>Description</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "17%" }}>
            <Text style={styles.tableCellHeader}>Session Cost</Text>
          </View>
          <View style={{ ...styles.tableColHeader, width: "17%" }}>
            <Text style={styles.tableCellHeader}>Payment</Text>
          </View>
        </View>
        {tableData.map((d, i) => {
          const rowCol = i % 2 ? "#ffffff" : "#f0f0f0";
          return (
            <View style={{ ...styles.tableRow, backgroundColor: rowCol }}>
              <View style={{ ...styles.tableCol, width: "17%" }}>
                <Text style={styles.tableCell}>{d.last_pay_date}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "17%" }}>
                <Text style={styles.tableCell}>{d.client}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "32%" }}>
                <Text style={styles.tableCell}>Description</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "17%" }}>
                <Text style={styles.tableCell}>{d.balance}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "17%" }}>
                <Text style={styles.tableCell}>{d.balance}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Table;
