import "./App.css";
// importing components from react-router-dom package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import SignIn from "./components/SignIn";
// import Test Page component
import TestPage from "./components/TestPage";

import Results from "./components/Results";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="TestPage" element={<TestPage />} />
          <Route path="Results" element={<Results />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
