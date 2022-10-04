import Header from './Components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'; 
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
      
          <Route path="/">
           <Header/>
            <Home/>
          </Route>
        

      </div>
    </Router>
  );
}

export default App;
