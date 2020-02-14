import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import { radioButtonChecked, radioButtonUnchecked } from "./constants";
import { green, styles } from "./NoteHistoryStyles";
import Rating from "./Rating";

const Section = ({ section }) => {
  return (
    <View style={styles.section}>
      {section.type === "Textbox" && (
        <View>
          <View style={{ display: "flex", marginTop: 20 }}>
            <Text style={styles.label}>Textbox Title: </Text>
            <Text style={styles.content}>{section.fields[0].title}</Text>
          </View>
          <View style={{ display: "flex", marginTop: 20 }}>
            <Text style={styles.label}>Textbox Notes: </Text>
            <Text style={styles.content}>{section.fields[0].notes}</Text>
          </View>
        </View>
      )}
      {section.type === "Percentage Scale" && (
        <View>
          {section.fields.map(field => (
            <View>
              <View style={{ display: "flex", marginTop: 20 }}>
                <Text style={styles.label}>Percentage Scale Title:</Text>
                <Text style={styles.content}>{field.title}</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 20
                }}
              >
                <View style={styles.radio}>
                  <Image
                    style={styles.radioIcon}
                    src={
                      field.value === "Never (0%)"
                        ? radioButtonChecked
                        : radioButtonUnchecked
                    }
                  />
                  <Text style={styles.radioText}>{"Never (0%)"}</Text>
                </View>
                <View style={styles.radio}>
                  <Image
                    style={styles.radioIcon}
                    src={
                      field.value === "Rarely (<50%)"
                        ? radioButtonChecked
                        : radioButtonUnchecked
                    }
                  />
                  <Text style={styles.radioText}>{"Rarely (<50%)"}</Text>
                </View>
                <View style={styles.radio}>
                  <Image
                    style={styles.radioIcon}
                    src={
                      field.value === "Inconsistent (51-79%)"
                        ? radioButtonChecked
                        : radioButtonUnchecked
                    }
                  />
                  <Text style={styles.radioText}>
                    {"Inconsistent (51-79%)"}
                  </Text>
                </View>
                <View style={styles.radio}>
                  <Image
                    style={styles.radioIcon}
                    src={
                      field.value === "Consistent (>80%)"
                        ? radioButtonChecked
                        : radioButtonUnchecked
                    }
                  />
                  <Text style={styles.radioText}>{"Consistent (>80%)"}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
      {section.type === "Rating Scale" && (
        <View>
          {section.fields.map(field => (
            <View>
              <View style={{ display: "flex", marginTop: 20 }}>
                <Text style={styles.label}>Rating Scale Title:</Text>
                <Text style={styles.content}>{field.title}</Text>
              </View>
              <Rating rating={field.rating} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Section;
