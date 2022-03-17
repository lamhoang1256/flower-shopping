import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { Product } from "./Pages/Product/Product";
import { Detail } from "./Pages/Detail/Detail";
import { Cart } from "./Pages/Cart/Cart";
import { Profile } from "./Pages/Profile/Profile";
import { Header } from "./Components/Header/Header";

import "./Sass/app.scss";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header></Header>
      {/* MAIN*/}
      <Routes>
        <Route path='/' element={<Home></Home>} exact></Route>
        <Route path='/login' element={<Login></Login>} exact></Route>
        <Route path='/register' element={<Register></Register>} exact></Route>
        <Route path='/product' element={<Product></Product>} exact></Route>
        <Route path='/product/:id' element={<Detail></Detail>}></Route>
        <Route path='/cart' element={<Cart></Cart>} exact></Route>
        <Route path='/profile' element={<Profile></Profile>} exact></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
