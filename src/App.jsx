import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/login";
import Profile from "./pages/profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
