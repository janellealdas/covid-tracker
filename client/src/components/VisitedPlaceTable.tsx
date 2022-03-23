import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MaterialTable, { Column } from "material-table";
import { Link } from "react-router-dom";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { VisitedPlace } from "../models/VisitedPlace";
import { useData } from "../hooks/useData";
import * as VisitedPlaceActions from "../redux/actions/VisitedPlaceActions";
import "../components/Dashboard.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: "20px",
    },
    label: {
      fontSize: "12px",
    },
    checkbox: {
      marginLeft: "1000px",
    },
  })
);

const columnHeaders: Array<Column<VisitedPlace>> = [
  {
    title: "Id",
    field: "id",
    hidden: true,
    cellStyle: {
      textAlign: "center",
    },
  },
  {
    title: "Place",
    field: "place",
    cellStyle: {
      textAlign: "center",
    },
    validate: (rowData) => rowData.place !== "",
  },
  {
    title: "Date",
    field: "date",
    type: "date",
    cellStyle: {
      textAlign: "center",
    },
    validate: (rowData) => rowData.date !== null,
  },
  {
    title: "Hours",
    field: "hours",
    cellStyle: {
      textAlign: "center",
    },
    validate: (rowData) => rowData.hours >= 1,
  },
  {
    title: "Is Visited Place Crowded?",
    field: "isCrowded",
    type: "boolean",
    cellStyle: {
      textAlign: "center",
    },
  },
];

const VisitedPlacesList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { visitedPlace, isloading } = useData();
  const [showLast14Days, setshowLast14Days] = React.useState(false);

  const handleAddVisitedPlace = (visitedPlace: VisitedPlace) => {
    dispatch(VisitedPlaceActions.AddVisitedPlaceAction(visitedPlace));
  };

  const handleDeleteVisitedPlace = (visitedPlace: VisitedPlace) => {
    dispatch(VisitedPlaceActions.DeleteVisitedPlaceAction(visitedPlace));
  };

  const handleUpdateVisitedPlace = (visitedPlace: VisitedPlace) => {
    dispatch(VisitedPlaceActions.UpdateVisitedPlaceAction(visitedPlace));
  };

  const handleCheckBoxChange = () => {
    setshowLast14Days(!showLast14Days);
  };

  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  let dayAfterCurrentDate = currentDate.toISOString().slice(0, 10);

  let date = new Date();
  date.setDate(date.getDate() - 14);
  let fourteenDaysAgo = new Date(date).toISOString().slice(0, 10);

  let visitedPlaceFor14days = visitedPlace.filter(
    (item) =>
      new Date(item.date).toISOString().slice(0, 10) >= fourteenDaysAgo &&
      new Date(item.date).toISOString().slice(0, 10) <= dayAfterCurrentDate
  );

  useEffect(() => {
    dispatch(VisitedPlaceActions.FetchVisitedPlaceAction());
  }, []);

  return (
    <div>
      <div className="link-dashboard">
        <Link to="/home">Back to Dashboard</Link>
      </div>
      <FormControlLabel
        classes={{
          label: classes.label,
        }}
        control={
          <Checkbox
            classes={{
              root: classes.checkbox,
            }}
            checked={showLast14Days}
            onChange={handleCheckBoxChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Display records within last 14 days"
      />
      <MaterialTable
        title={
          <Typography variant="h6" className={classes.title}>
            Visited Place List
          </Typography>
        }
        isLoading={isloading}
        columns={columnHeaders}
        data={showLast14Days ? visitedPlaceFor14days : visitedPlace}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(null);
                handleAddVisitedPlace(newData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              resolve(null);
              handleUpdateVisitedPlace(newData);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              resolve(null);
              handleDeleteVisitedPlace(oldData);
            }),
        }}
        options={{
          rowStyle: (rowData) => {
            if (rowData.isCrowded) {
              return { backgroundColor: "#fccfcc" };
            }
            return { textAlign: "center" };
          },
          headerStyle: {
            backgroundColor: "#a7cef2",
            color: "#000",
            fontSize: "15px",
            textAlign: "center",
          },
          searchFieldStyle: {
            fontSize: "13px",
          },
        }}
      />
      <br />
    </div>
  );
};

export default VisitedPlacesList;
