import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ReportTemplate from "./pdf-templates/report-template";
import AccountTemplate from "./pdf-templates/account-template";

function PDFTest() {
  return (
    <div className="App">
      <PDFViewer style={{ height: "840px", width: "600px" }}>
        <AccountTemplate />
      </PDFViewer>
    </div>
  );
}

export default PDFTest;
