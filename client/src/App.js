import { useEffect } from "react";
import "./App.css";
import RouteMap from "./Router/RouteMap";
import { BrowserRouter } from "react-router-dom";
import { getAllUserAsync } from "./Redux/Slices/adminSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <RouteMap />
      </BrowserRouter>
    </div>
  );
}

export default App;
