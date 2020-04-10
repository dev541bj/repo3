import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";

const Table = ({ data }) => {
  return (
    <View style={styles.tableWrapper}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Therapist</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Billable Hours</Text>
          </View>
        </View>
        {data.map((d) => (
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{d.therapists}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{d.billable_hours}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Table;
