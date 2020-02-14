import React from "react";
import { Page, Text, Document, View, Image, Font } from "@react-pdf/renderer";
import Section from "./Section";
import Rating from "./Rating";
import { styles } from "./NoteHistoryStyles";
import { checkboxChecked, checkboxUnchecked } from "./constants";

Font.register(
  "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf",
  {
    family: "Roboto-Regular"
  }
);

const NoteHistoryTemplate = props => {
  const { data } = props;
  // console.log(data);
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Documentation</Text>
          <View style={styles.infos}>
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
          <View style={{ marginLeft: 24 }}>
            {data.sections && data.selectedID > 4 && (
              <View style={styles.sections}>
                {data.sections.map(section => {
                  return <Section section={section} />;
                })}
              </View>
            )}
            {data.noteType === "Rating Scale" && (
              <View>
                <View style={{ display: "flex", marginTop: 20 }}>
                  <Text style={styles.label}>Title:</Text>
                  <Text style={styles.content}>{data.ratingDesc1}</Text>
                </View>
                <Rating rating={data.rating1} />
                {data.addRating2 && (
                  <View>
                    <View style={{ display: "flex", marginTop: 20 }}>
                      <Text style={styles.label}>Title:</Text>
                      <Text style={styles.content}>{data.ratingDesc2}</Text>
                    </View>
                    <Rating rating={data.rating2} />
                  </View>
                )}
                {data.addRating3 && (
                  <View>
                    <View style={{ display: "flex", marginTop: 20 }}>
                      <Text style={styles.label}>Title:</Text>
                      <Text style={styles.content}>{data.ratingDesc3}</Text>
                    </View>
                    <Rating rating={data.rating3} />
                  </View>
                )}
              </View>
            )}
          </View>
          {data.noteType === "Narrative" && (
            <View style={{ display: "flex", marginTop: 36 }}>
              <Text style={styles.label}>Notes:</Text>
              <Text style={styles.content}>{data.narrativeNote || ""}</Text>
            </View>
          )}
          {data.noteType === "SOAP" && (
            <View>
              <View style={{ display: "flex", marginTop: 36 }}>
                <Text style={styles.label}>S note:</Text>
                <Text style={styles.content}>{data.s_note || ""}</Text>
              </View>
              <View style={{ display: "flex", marginTop: 36 }}>
                <Text style={styles.label}>O note:</Text>
                <Text style={styles.content}>{data.o_note || ""}</Text>
              </View>
              <View style={{ display: "flex", marginTop: 36 }}>
                <Text style={styles.label}>A note:</Text>
                <Text style={styles.content}>{data.a_note || ""}</Text>
              </View>
              <View style={{ display: "flex", marginTop: 36 }}>
                <Text style={styles.label}>P note:</Text>
                <Text style={styles.content}>{data.p_note || ""}</Text>
              </View>
            </View>
          )}
          <View style={{ display: "flex", marginTop: 20 }}>
            <Text style={styles.label}>Email: </Text>
            {/* <Text style={styles.content}>test@test.com</Text> */}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
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
                src={
                  data.checkedTherapist ? checkboxChecked : checkboxUnchecked
                }
              />
              <Text style={styles.checkboxText}>Therapist</Text>
            </View>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default NoteHistoryTemplate;
