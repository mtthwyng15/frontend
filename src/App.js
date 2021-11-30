import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import DisplayTable from "./Components/DisplayTable";
import Display from "./Components/Display2";
// import "bootstrap/dist/css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayTable />
        {/* <Display /> */}
      </header>
    </div>
  );
}

export default App;
