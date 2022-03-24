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
import { Shipping } from "./Pages/Shipping/Shipping";
import { Order } from "./Pages/Order/Order";
import { OrderDetail } from "./Pages/Order/OrderDetail";
import { Payment } from "./Pages/Payment/Payment";
import "./Sass/app.scss";

function App() {
  return (
    <Router>
      <Header></Header>
      {/* MAIN*/}
      <Routes>
        <Route path='/' element={<Home></Home>} exact></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product/:id' element={<Detail></Detail>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/shipping' element={<Shipping></Shipping>}></Route>
        <Route path='/payment' element={<Payment></Payment>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/order/:idOrder' element={<OrderDetail></OrderDetail>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
