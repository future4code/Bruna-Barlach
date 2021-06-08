import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import AdminHomePage from "./pages/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage"
import CreateTripPage from "./pages/CreateTripPage"
import Error from "./pages/Error"
import HomePage from "./pages/HomePage"
import ListTripsPage from "./pages/ListTripsPage"
import LoginPage from "./pages/LoginPage"
import TripDetailsPage from "./pages/TripDetailsPage"

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
      <HomePage />
      </Route>

      <Route exact path={"/applicationform"}>
      <ApplicationFormPage />
      </Route>

      <Route exact path={"/createtrip"}>
      <CreateTripPage />
      </Route>

      <Route exact path={"/admin"}>
      <AdminHomePage />
      </Route>

      <Route exact path={"/list"}>
      <ListTripsPage />
      </Route>

      <Route exact path={"/login"}>
      <LoginPage />
      </Route>

      <Route exact path={"/details"}>
      <TripDetailsPage />
      </Route>

      <Route>
      <Error />
      </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
