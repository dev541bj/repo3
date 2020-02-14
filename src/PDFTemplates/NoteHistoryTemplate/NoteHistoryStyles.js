import { StyleSheet } from "@react-pdf/renderer";

export const grey = "#666";
export const lightGreen = "#ebf7f5";
export const green = "#b6e1db";
export const regularFont = "Roboto-Regular";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    fontFamily: regularFont,
    padding: "30 40"
  },
  wrapper: {
    // backgroundColor: lightGreen
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20
  },
  infos: {
    display: "flex",
    flexDirection: "row",
    margin: "10 0"
  },
  label: {
    fontSize: 9,
    color: grey
  },
  content: {
    fontSize: 11,
    marginTop: 6
  },
  sections: {
    display: "flex",
    width: "100%",
    marginTop: 6
  },
  section: {},
  radio: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12
  },
  radioIcon: {
    width: 14,
    height: 14
  },
  radioText: {
    fontSize: 11,
    marginLeft: 4
  },
  checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12
  },
  checkboxIcon: {
    width: 16,
    height: 16
  },
  checkboxText: {
    fontSize: 11,
    marginLeft: 4
  },
  sliderLine: {
    position: "relative",
    width: 36,
    height: 2,
    marginLeft: 1,
    backgroundColor: green
  },
  sliderLineLight: {
    position: "relative",
    width: 36,
    height: 2,
    marginLeft: 1,
    backgroundColor: lightGreen
  },
  sliderCircle: {
    position: "absolute",
    top: -3,
    left: -4,
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: green
  },
  sliderNum: {
    position: "absolute",
    fontSize: 10,
    left: -3,
    top: 8
  }
});
