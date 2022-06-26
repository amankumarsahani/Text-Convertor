
import './App.css';
import Navbar from './Components/Navbar';
// import TextArea from './Components/TextArea';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import About from './Components/About';

function App() {
  return (
    <div>
      
      {/* <Router> */}
      <Navbar title="Text Convertor"/>
      {/* <TextArea heading="Enter your Text to Perform some Actions :"/> */}
      <About />
        {/* <Routes>
          <Route exact path="/about">
            <About />
          </Route>
        </Routes>
      </Router> */}
      
    </div>
    
  );
}

export default App;
