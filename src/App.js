import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { Product } from "./Pages/Product/Product";
import { Detail } from "./Pages/Detail/Detail";
import { Cart } from "./Pages/Cart/Cart";
import { Checkout } from "./Pages/Checkout/Checkout";
import { Profile } from "./Pages/Profile/Profile";
import { Footer } from "./Components/Footer/Footer";

import "./Sass/app.scss";
import { Shipping } from "./Pages/Shipping/Shipping";

function App() {
  return (
    <Router>
      <Header></Header>
      {/* MAIN*/}
      <Routes>
        <Route path='/' element={<Home></Home>} exact></Route>
        <Route path='/login' element={<Login></Login>} exact></Route>
        <Route path='/register' element={<Register></Register>} exact></Route>
        <Route path='/product/:id' element={<Detail></Detail>}></Route>
        <Route path='/product' element={<Product></Product>} exact></Route>
        <Route path='/cart' element={<Cart></Cart>} exact></Route>
        <Route path='/profile' element={<Profile></Profile>} exact></Route>
        <Route path='/shipping' element={<Shipping></Shipping>} exact></Route>
        <Route path='/checkout' element={<Checkout></Checkout>} exact></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
