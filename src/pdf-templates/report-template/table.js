import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";

const Table = ({data, reportType}) => {
  return (
    <View style={styles.tableWrapper}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>{reportType === "Hours By Category" ? "Category" : "Therapist"}</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text
              style={styles.tableCellHeader}>{reportType === "Hours By Category" ? "Hours" : "Billable Hours"}</Text>
          </View>
        </View>
        {data.map((d, i) => {
          const rowCol = i % 2 ? "#ffffff" : "#f0f0f0";
          return (
            <View style={{...styles.tableRow, backgroundColor: rowCol}}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{reportType === "Hours By Category" ? d.category : d.therapists}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text
                  style={styles.tableCell}>{reportType === "Hours By Category" ? d.hours_by_category : d.billable_hours}</Text>
              </View>
            </View>);
        })}
      </View>
    </View>
  );
};

export default Table;
