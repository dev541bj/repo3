import React from "react";
import { Page, Text, Document, View, Image, Font } from "@react-pdf/renderer";

import { green, styles } from "./NoteHistoryTemplateStyles";

Font.register(
  "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf",
  {
    family: "Roboto-Regular"
  }
);

const radioButtonUnchecked =
  "https://img.icons8.com/material-rounded/24/000000/circled.png";
const radioButtonChecked =
  "https://img.icons8.com/material/24/b6e1db/unchecked-radio-button--v2.png";

const checkboxUnchecked =
  "https://img.icons8.com/material-outlined/24/000000/unchecked-checkbox.png";
const checkboxChecked =
  "https://img.icons8.com/material-sharp/24/b6e1db/checked-checkbox.png";

const NoteHistoryTemplate = props => {
  const { data } = props;
  console.log(data);
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 16,
            fontSize: 18,
            marginBottom: 20
          }}
        >
          Documentation
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10 0 10 50"
          }}
        >
          <View style={{ display: "flex", width: "16%" }}>
            <Text style={styles.label}>Client: </Text>
            <Text style={styles.content}>{data.client || ""}</Text>
          </View>
          <View style={{ display: "flex", width: "26%" }}>
            <Text style={styles.label}>Session Date: </Text>
            <Text style={styles.content}>{data.sessionDate || ""}</Text>
          </View>
          <View style={{ display: "flex", width: "18%" }}>
            <Text style={styles.label}>Attendance: </Text>
            <Text style={styles.content}>{data.attendanceType || ""}</Text>
          </View>
          <View style={{ display: "flex", width: "16%" }}>
            <Text style={styles.label}>Note Type: </Text>
            <Text style={styles.content}>
              {data.selectedID > 4
                ? data.noteTypes.filter(n => n.value === data.selectedID)[0]
                    .label
                : data.noteTypes[data.selectedID - 1].label || ""}
            </Text>
          </View>
        </View>
        {data.selectedID > 4 && (
          <View
            style={{
              display: "flex",
              width: "100%",
              marginLeft: 64,
              marginTop: 6
            }}
          >
            {data.sections.map(section => {
              return (
                <View>
                  {section.type === "Textbox" && (
                    <View>
                      <View style={{ display: "flex", marginTop: 20 }}>
                        <Text style={styles.label}>Textbox Title: </Text>
                        <Text style={styles.content}>
                          {section.fields[0].title}
                        </Text>
                      </View>
                      <View style={{ display: "flex", marginTop: 20 }}>
                        <Text style={styles.label}>Textbox Notes: </Text>
                        <Text style={styles.content}>
                          {section.fields[0].notes}
                        </Text>
                      </View>
                    </View>
                  )}
                  {section.type === "Percentage Scale" && (
                    <View>
                      {section.fields.map(field => (
                        <View>
                          <View style={{ display: "flex", marginTop: 20 }}>
                            <Text style={styles.label}>
                              Percentage Scale Title:
                            </Text>
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
                              <Text style={styles.radioText}>
                                {"Never (0%)"}
                              </Text>
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
                              <Text style={styles.radioText}>
                                {"Rarely (<50%)"}
                              </Text>
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
                              <Text style={styles.radioText}>
                                {"Consistent (>80%)"}
                              </Text>
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
                            <Text style={styles.label}>
                              Rating Scale Title:
                            </Text>
                            <Text style={styles.content}>{field.title}</Text>
                          </View>
                          <View style={{ display: "flex", marginTop: 20 }}>
                            <View
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <View
                                style={
                                  field.rating > 1
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>1</Text>
                                {field.rating === 1 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View
                                style={
                                  field.rating > 2
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>2</Text>
                                {field.rating === 2 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View
                                style={
                                  field.rating > 3
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>3</Text>
                                {field.rating === 3 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View
                                style={
                                  field.rating > 4
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>4</Text>
                                {field.rating === 4 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View
                                style={
                                  field.rating > 5
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>5</Text>
                                {field.rating === 5 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View
                                style={
                                  field.rating > 6
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>6</Text>
                                {field.rating === 6 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View
                                style={
                                  field.rating > 7
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>7</Text>
                                {field.rating === 7 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View
                                style={
                                  field.rating > 8
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>8</Text>
                                {field.rating === 8 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View
                                style={
                                  field.rating > 9
                                    ? styles.sliderLine
                                    : styles.sliderLineLight
                                }
                              >
                                <Text style={styles.sliderNum}>9</Text>
                                {field.rating === 9 && (
                                  <View style={styles.sliderCircle} />
                                )}
                              </View>
                              <View>
                                <Text
                                  style={{ fontSize: 10, top: 8, left: -6 }}
                                >
                                  10
                                </Text>
                                {field.rating === 10 && (
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
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        )}
        <View style={{ display: "flex", marginLeft: 50, marginTop: 36 }}>
          <Text style={styles.label}>Notes:</Text>
          {data.noteType === "Narrative" && (
            <Text style={styles.content}>{data.narrativeNote || ""}</Text>
          )}
        </View>
        <View style={{ display: "flex", marginLeft: 50, marginTop: 20 }}>
          <Text style={styles.label}>Email: </Text>
          {/* <Text style={styles.content}>test@test.com</Text> */}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 50,
            marginTop: 20
          }}
        >
          <View style={styles.checkbox}>
            <Image
              style={styles.checkboxIcon}
              src={data.checkedPayor ? checkboxChecked : checkboxUnchecked}
            />
            <Text style={styles.checkboxText}>Payor</Text>
          </View>
          <View style={styles.checkbox}>
            <Image
              style={styles.checkboxIcon}
              src={data.checkedFamily ? checkboxChecked : checkboxUnchecked}
            />
            <Text style={styles.checkboxText}>Family</Text>
          </View>
          <View style={styles.checkbox}>
            <Image
              style={styles.checkboxIcon}
              src={data.checkedTherapist ? checkboxChecked : checkboxUnchecked}
            />
            <Text style={styles.checkboxText}>Therapist</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default NoteHistoryTemplate;
