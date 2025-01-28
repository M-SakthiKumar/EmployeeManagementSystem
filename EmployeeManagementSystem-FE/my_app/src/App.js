import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployees from './Components/ListEmployees';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CreateEmployee from './Components/CreateEmployee';
import ViewEmployee from './Components/viewEmployee';

function App() {
  return (
    <div className="App">
      <Header/>
            <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListEmployees/>}> </Route>
        <Route path='/employeesData' element={<ListEmployees/>}> </Route>
        <Route path='/add-employee' element={<CreateEmployee/>}> </Route>
        <Route path='/edit-employee/:id' element={<CreateEmployee/>}></Route>
        <Route path="/view-employee/:id" element={<ViewEmployee />} /> 
       
      </Routes>
      </BrowserRouter>
      
 
      
<Footer/>

      
    </div>
  );
}

export default App;
