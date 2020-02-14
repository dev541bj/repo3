import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { green, styles } from "./NoteHistoryStyles";

const Rating = ({ rating }) => {
  return (
    <View style={{ display: "flex", marginTop: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <View style={rating > 1 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>1</Text>
          {rating === 1 && <View style={styles.sliderCircle} />}
        </View>
        <View style={rating > 2 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>2</Text>
          {rating === 2 && <View style={styles.sliderCircle} />}
        </View>
        <View style={rating > 3 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>3</Text>
          {rating === 3 && <View style={styles.sliderCircle} />}
        </View>
        <View style={rating > 4 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>4</Text>
          {rating === 4 && <View style={styles.sliderCircle} />}
        </View>
        <View style={rating > 5 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>5</Text>
          {rating === 5 && <View style={styles.sliderCircle} />}
        </View>
        <View style={rating > 6 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>6</Text>
          {rating === 6 && <View style={styles.sliderCircle} />}
        </View>
        <View style={rating > 7 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>7</Text>
          {rating === 7 && <View style={styles.sliderCircle} />}
        </View>
        <View style={rating > 8 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>8</Text>
          {rating === 8 && <View style={styles.sliderCircle} />}
        </View>
        <View style={rating > 9 ? styles.sliderLine : styles.sliderLineLight}>
          <Text style={styles.sliderNum}>9</Text>
          {rating === 9 && <View style={styles.sliderCircle} />}
        </View>
        <View>
          <Text style={{ fontSize: 10, top: 8, left: -6 }}>10</Text>
          {rating === 10 && (
            <View
              style={{
                position: "absolute",
                top: -3,
                right: 6,
                width: 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: green
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Rating;
