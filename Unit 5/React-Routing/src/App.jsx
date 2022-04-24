import './App.css';

import { Routes, Route } from "react-router-dom"


import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { Userslist } from './components/Userslist';
import { Userdetail } from './components/Userdetail';
import { PrivateComponent } from './components/PrivateRoute';
import { Login } from './components/login';
import { Proddetail } from './components/productDetails';
import { CartProduct } from './components/cart';


function App() {
  return (


    <div className='App'>


      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} ></Route>

        <Route path='/about' element={<About />} ></Route>

        <Route path='/product' element={<Product />} ></Route>

        {/* <Route path='/users' element={<Userslist />} ></Route> */}

        {/* <Route path='/users/:id' element={ <PrivateComponent><Userdetail /></PrivateComponent>} ></Route> */}

        <Route path='/product/:id' element={ <Proddetail />} ></Route>

        <Route path='/cart' element={ <CartProduct />} ></Route>
     
        {/* <Route path='/login' element={<Login/>} >{" "}</Route> */}
     
     
      </Routes>

    </div>

  );
}

export default App;