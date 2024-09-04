 import {NavLink, Route,Routes} from "react-router-dom";
import './App.css'; 
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import Notfound from "./components/Notfound";
import MainHeader from "./components/MainHeader";


function App() {
  return ( 
    
    <div className="App">

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/labs">Labs</Link>
          </li>
        </ul>
      </nav> */}
      
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li> 
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

        {/* <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} /> */}


      <Routes>
         <Route path="/" element={<MainHeader></MainHeader>}>
<Route index element={<Home></Home>}/>
         {/* index likhaneka matalab default route */}
         <Route path="/support" element={<Support></Support>}></Route>
         <Route path="/about" element={<About></About>}></Route>
         <Route path="/labs" element={<Labs></Labs>}></Route>
         <Route path="/*" element={<Notfound></Notfound>}></Route>
         </Route>
      </Routes> 
     
    </div>
  );
}

export default App;
