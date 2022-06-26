
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';

function App() {
  return (
    <div>
      <Router>
      <Navbar title="Text Convertor"/>
        <Routes>
          <Route exact path='/' element={<TextArea heading="Enter your Text to Perform some Actions :"/>}></Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
