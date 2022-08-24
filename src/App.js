import React from "react";
import Calendar from "./pages/Calander";
import Weather from "./pages/Weather";
import Card from 'react-bootstrap/Card';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
function App() {


  return (
    <>
     <Router>
     <Card className="container-sm">
      <Weather />
      </Card>
      <Card className="container-sm">
      <Calendar/>
      </Card>
</Router>

    </>
  );
}

export default App;
