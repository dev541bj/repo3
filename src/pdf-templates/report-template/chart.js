import React from "react";
import { Text, View } from "@react-pdf/renderer";
import maxBy from "lodash/maxBy";
import { styles } from "./styles";

const Chart = ({data}) => {
	const chartHeight = 340;
	const maxHour = maxBy(data, "billable_hours").billable_hours;
	const range = maxHour <= 5 ? 5 : maxHour <= 10 ? 10 : maxHour <= 25 ? 25 : maxHour <= 50 ? 50
		: maxHour <= 100 ? 100 : maxHour <= 500 ? 500 : maxHour <= 1000 ? 1000 : 10000;
	const step = range / 10;
	let steps = [];
	for (var i = step; i <= range; i += step) {
		steps.push(i.toFixed(2).toString());
	}

	return (
		<View style={styles.chartWrapper}>
			<View style={styles.chart}>
				<View style={styles.chartAxisArea}>
					{steps.reverse().map(step => (
						<View style={styles.chartAxisSection}>
							<Text style={styles.chartAxisLabel}>{step}</Text>
						</View>
					))}
					<Text style={styles.chartAxisOriginLabel}>0.00</Text>
				</View>
				<View style={styles.chartBarArea}>
					{data.map(d => (
						<View style={styles.chartBar}>
							<View style={{...styles.chartBarLine, height: `${d.billable_hours * chartHeight / range}`}}/>
							<Text style={styles.chartBarLabel}>{d.therapists}</Text>
						</View>
					))}
				</View>
			</View>
		</View>
	);
};

export default Chart;