import "./App.css";
import RouteMap from "./Router/RouteMap";
import { BrowserRouter } from "react-router-dom";

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
