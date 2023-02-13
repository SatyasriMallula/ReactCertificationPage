import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home/home';
import { Login } from './Home/login';
import { Navbar } from './Home/navbar';
import { Products } from './Products/products';
import User from './Users/users';

function App() {
  return (
    <div className="App" style={{ fontFamily: "Poppins, sans-serif" }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/home' element={<Home />}> </Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/users' element={<User />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
