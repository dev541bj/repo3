import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import moment from "moment";
import { saveAs } from "file-saver";
import { pdf } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Cyan from "@material-ui/core/colors/cyan";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import DownloadIcon from "@material-ui/icons/CloudDownload";

import API from "../utils/API";
import NoteHistoryTemplate from "../PDFTemplates/NoteHistoryTemplate";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: "start", disablePadding: true, label: "Start" },
  { id: "noteDate", label: "Note Date" }
  //{ id: "clients", label: "Clients" }
];

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: Cyan[800],
    color: theme.palette.common.white,
    fontSize: 18
  },
  body: {
    fontSize: 12
  }
}))(TableCell);

// Table Header

class EnhancedTableHead extends React.Component {
  static defaultProps = { order: "asc" };
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          <CustomTableCell align="center">
            <TableSortLabel />
          </CustomTableCell>
          {rows.map(
            row => (
              <CustomTableCell
                key={row.id}
                padding={row.disablePadding ? "none" : "default"}
                align="center"
                sortDirection={orderBy === row.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </CustomTableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired
  //rowCount: PropTypes.number.isRequired,
};

const styles = theme => ({
  root: {
    //width: "60%",
    marginTop: theme.spacing(1) * 3,
    // marginLeft: theme.spacing(1) * 30,
    overflowX: "auto",
    alignItems: "center"
  },
  appBar: {
    position: "relative",
    backgroundColor: Cyan[800]
  },

  table: {
    //minWidth: 1020,
  },
  tableWrapper: {
    overflowX: "auto"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

// Table Body

class EventsTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "asc",
      open: false,
      orderBy: "",
      noteData: [],
      curEventId: 0,
      redirectDocs: false,
      page: 0,
      rowsPerPage: 5
    };
  }
  static defaultProps = { TableSortLabel: "asc" };

  async componentDidMount() {
    try {
      const { data: history } = await API.get("/clients/notehist");
      const noteData = history.data || [];
      this.setState({
        noteData
      });
      console.log("here's the event data length: ", noteData.length);
      console.log("Here's the data ", noteData);
      /* if (history.data.length > 0) {
        console.log("here's the good length: ", history.data.length);
        this.setState({
          noteData: history.data
        });
      } else {
        console.log("here's the zero length: ", history.data.length);
        this.setState({
          noteData: []
        });
      } */
    } catch (error) {
      const noteData = this.state.noteData;
      console.log("Event fetch error: ", error);
      console.log("Here's the error length: ", noteData.length);
    }
  }

  componentWillUnmount() {}

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickRedirect = (eventId = 0) => {
    this.setState({
      redirectDocs: true,
      curEventId: eventId
    });
  };

  handleDownload = async id => {
    try {
      let pdfData = {
        clientData: [],
        therapistData: [],
        client: this.props.location.state.client,
        noteType: "Narrative",
        attendanceType: "Present ($)",
        sessionDate: moment(this.props.location.state.sessionDate).format(
          "MM/DD/YYYY h:mm a"
        ),
        calID: this.props.location.state.calID,
        checkedPayor: true,
        checkedFamily: false,
        checkedTherapist: false,
        checkedPortal: false,
        validationBox: false,
        redirect: false,
        narrativeNote: "",
        noteTypes: [],
        // SOAP
        s_note: "",
        o_note: "",
        a_note: "",
        p_note: "",
        // Rating Scale
        rating1: 10,
        rating2: 10,
        rating3: 10,
        ratingDesc1: "",
        ratingDesc2: "",
        ratingDesc3: "",
        addRating2: false,
        addRating3: false,
        // Percentage Scale
        scaleResult: "",
        scaleResult2: "",
        scaleResult3: "",
        addScale2: false,
        addScale3: false,

        first: "",
        second: "",
        third: "",
        sections: [],
        selectedID: 2,
        note_date: "",
        initTemplate: 2,
        customType: ""
      };

      const formsResp = await API.get("/templates/templates");
      const formData = formsResp.data.data;

      pdfData = {
        ...pdfData,
        noteTypes: formData.map(template => {
          return {
            value: template.id,
            label: template.template_name
          };
        })
      };

      const res = await API.get(`events/templates/${id}`);
      const template = res.data.data;

      if (template[0].type_note === 1) {
        pdfData = {
          ...pdfData,
          sections: JSON.parse(template[0].notes),
          noteType: "SOAP",
          selectedID: 1,
          s_note: this.state.sections.s_note,
          o_note: this.state.sections.o_note,
          a_note: this.state.sections.a_note,
          p_note: this.state.sections.p_note
        };
      } else if (template[0].type_note === 2) {
        pdfData = {
          ...pdfData,
          sections: JSON.parse(template[0].notes),
          noteType: "Narrative",
          selectedID: 2,
          narrativeNote: this.state.sections.narrativeNote
        };
      } else if (template[0].type_note === 3) {
        pdfData = {
          ...pdfData,
          sections: JSON.parse(template[0].notes),
          noteType: "Rating Scale",
          selectedID: 3,
          rating1: this.state.sections ? this.state.sections.rating1 : 1,
          rating2: this.state.sections ? this.state.sections.rating2 : 1,
          rating3: this.state.sections ? this.state.sections.rating3 : 1,
          ratingDesc1: this.state.sections
            ? this.state.sections.ratingDesc1
            : 1,
          ratingDesc2: this.state.sections
            ? this.state.sections.ratingDesc2
            : 1,
          ratingDesc3: this.state.sections
            ? this.state.sections.ratingDesc3
            : 1,
          addRating2: this.state.sections ? this.state.sections.addRating2 : 1,
          addRating3: this.state.sections ? this.state.sections.addRating3 : 1
        };
      } else if (template[0].type_note === 4) {
        pdfData = {
          ...pdfData,
          sections: JSON.parse(template[0].notes),
          noteType: "Percentage Scale",
          selectedID: 4,
          first: this.state.sections.first,
          scaleResult: this.state.sections.scaleResult,
          second: this.state.sections.second,
          scaleResult2: this.state.sections.scaleResult2,
          third: this.state.sections.third,
          scaleResult3: this.state.sections.scaleResult3,
          addScale2: this.state.sections.addScale2,
          addScale3: this.state.sections.addScale3
        };
      } else if (template[0].type_note > 4) {
        pdfData = {
          ...pdfData,
          selectedID: template[0].type_note,
          sections: JSON.parse(template[0].notes)
        };
      }

      pdfData = {
        ...pdfData,
        initTemplate: this.state.selectedID
      };
      const blob = await pdf(<NoteHistoryTemplate data={pdfData} />).toBlob();
      saveAs(blob, "note.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  // isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { noteData, order, orderBy, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, noteData.length - page * rowsPerPage);

    return (
      <Container maxWidth="md">
        {this.state.redirectDocs ? (
          <Redirect
            to={{
              pathname: "/dochist",
              state: { calID: this.state.curEventId }
            }}
          />
        ) : null}
        {noteData.length > 0 ? (
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  //numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                  rowCount={noteData.length}
                />
                <TableBody>
                  {stableSort(noteData, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                      // const isSelected = this.isSelected(n.id);
                      return (
                        <TableRow
                          hover
                          className={classes.row}
                          tabIndex={-1}
                          key={n.id}
                          onClick={() => this.handleClickRedirect(n.id)}
                        >
                          <TableCell align="center">
                            <IconButton
                              color="inherit"
                              onClick={e => {
                                e.stopPropagation();
                                this.handleDownload(n.id);
                              }}
                            >
                              <Badge color="inherit">
                                <DownloadIcon />
                              </Badge>
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">{n.start}</TableCell>
                          <TableCell align="center">{n.noteDate}</TableCell>
                          {/* <TableCell align="center">{n.clients}</TableCell> */}
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 49 * emptyRows
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={noteData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                "aria-label": "Previous Page"
              }}
              nextIconButtonProps={{
                "aria-label": "Next Page"
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
        ) : (
          "This client does not have any session notes!"
        )}
      </Container>
    );
  }
}

EventsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(EventsTable));
