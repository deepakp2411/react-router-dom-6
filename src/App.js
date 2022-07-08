import { BrowserRouter as Router,Navigate,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Post from "./components/pages/Post";

function App() {
  const isLogged = false;
  const data = {
    "st": "User not logged in"
  }

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:category" element={<Post />} />
          <Route  path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to='/login' replace state={data} />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/logout" element={<Logout />} />

          <Route path="*" element={<h1>Error! 404 Page Not found</h1>} />
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
