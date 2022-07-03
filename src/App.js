import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import AccSetting from "../src/component/AccSetting";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
    {/* //   <Signup />
    //   <AccSetting /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="/mehmaan" element={<AccSetting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
