import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import SocialInteractionsList from "./components/SocialInteractionTable";
import VisitedPlacesList from "./components/VisitedPlaceTable";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Paper elevation={24} className="size">
        <Col md={12}>
          <Header />
          <Col md={12} className="profile-app">
            <Profile />
          </Col>
          <Col md={12}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route
                path="/socialinteractionlist"
                element={<SocialInteractionsList />}
              />
              <Route path="/visitedplacelist" element={<VisitedPlacesList />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Col>
        </Col>
      </Paper>
    </div>
  );
}

export default App;
