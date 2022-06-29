import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

export default function App() {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route index element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
