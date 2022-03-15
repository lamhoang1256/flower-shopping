import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { Product } from "./Pages/Product/Product";
import { Detail } from "./Pages/Detail/Detail";
import { Cart } from "./Pages/Cart/Cart";
import { Profile } from "./Pages/Profile/Profile";

import "./Sass/app.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>} exact></Route>
        <Route path='/login' element={<Login></Login>} exact></Route>
        <Route path='/register' element={<Register></Register>} exact></Route>
        <Route path='/product' element={<Product></Product>} exact></Route>
        <Route path='/detail' element={<Detail></Detail>} exact></Route>
        <Route path='/cart' element={<Cart></Cart>} exact></Route>
        <Route path='/profile' element={<Profile></Profile>} exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
