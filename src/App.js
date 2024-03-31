import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import Home from "./pages/Home.js";
import Recipes from "./pages/Recipes.js";
import SignUp from "./pages/SignUp.js";
function App(){
    return(
        <Router>
             <Navbar />
            <div className="container main">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/recipes" element={<Recipes/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
        
    );
}

export default App;