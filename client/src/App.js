import { useEffect } from "react";
import "./App.css";
import RouteMap from "./Router/RouteMap";
import { BrowserRouter } from "react-router-dom";
import { setUser } from "./Redux/Slices/adminSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

function App() {
  const dispatch = useDispatch();
  let user = {};
  if (Cookies.get("token")) {
    const jsonUserData = Cookies.get("user");
    user = JSON.parse(jsonUserData);
    console.log("🚀 ~ App ~ user:", user);
  }
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <RouteMap />
      </BrowserRouter>
    </div>
  );
}

export default App;
