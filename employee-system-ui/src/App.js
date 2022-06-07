
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<EmployeeList />}></Route>
        <Route index element={<EmployeeList />}></Route>
        <Route path='/employeeList' element={<EmployeeList />}></Route>
        <Route path='/addEmployee' element={<AddEmployee />}></Route>
        <Route path='/updateEmployee/:id' element={<UpdateEmployee />}></Route>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
