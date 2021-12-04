import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Test from "./Components/Test.js";
import NavBar from "./Components/NavBar.js";
import Banner from "./Components/Banner.js"


import About from './Pages/About.js';
import Reps from './Pages/Reps.js';
import Senators from './Pages/Senators.js';
import ErrorPage from './Pages/ErrorPage.js';


function App() {
//localhost:3000/products
//my-page.com/
//https://www.youtube.com/watch?v=zEQiNFAwDGo&t=123s&ab_channel=Academind

    return ( 
        <div>
            <Banner />
            <NavBar />
            
            

        </div>
      
  );
}

export default App;
