import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/update' element={<Update/>}></Route> */}
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
