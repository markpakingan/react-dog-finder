import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dogs from './Dogs';
import Navbar from './Navbar';
import Whiskey from './Whiskey';
import Perry from './Perry';
import Tubby from './Tubby'
import Duke from './Duke'

// photo sources
import whiskeyphoto from './whiskeyphoto.jpg'
import tubbyphoto from "./tubbyphoto.jpg"
import perryphoto from './perryphoto.jpg'
import dukephoto from "./dukephoto.jpg"


const App = () => {

  return(
    <div> 
      <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route exact path="/whiskey" element={<Whiskey/>}/>
            <Route exact path="/duke" element={<Duke/>}/>
            <Route exact path="/perry" element={<Perry/>}/>
            <Route exact path="/tubby" element={<Tubby/>}/>
          </Routes>

      </BrowserRouter>     
    </div>
  )
}

// Assign the defaultProps to the App component
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskeyphoto,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: dukephoto,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perryphoto,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubbyphoto,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;
