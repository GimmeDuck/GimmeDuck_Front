import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./screens/History";
import Home from "./screens/Home";
import Introduction from "./screens/Introduction";
import Market from "./screens/Market";
import Tutorial from "./screens/Tutorial";
import NavBarElements from "./components/NavBarElements";
import Buyegg from "./screens/Buyegg";
import Custom from "./screens/Custom";
import Donate from "./screens/Donate";
import Custom_1 from "./screens/Custom_1";

import axios from "axios";
import { useEffect } from 'react';


function App() {

  const callApi = async()=>{
    axios.get("/api").then((res)=>{console.log(res.data.test)});
  };

  useEffect(()=>{
    callApi();
  }, []);

  return (
    <Router>
      <NavBarElements />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/History" element={<History />} />
        <Route path="/Market" element={<Market />} />

        <Route path="/Buyegg" element={<Buyegg />} />
        <Route path="/Custom" element={<Custom />} />
        <Route path="/Custom_1" element={<Custom_1 />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
