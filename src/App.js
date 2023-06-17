import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Clothes from "./Components/Clothes/Clothes";
import { ShopContextProvider } from "./Context/ShopContext";
import { Fav } from "./Components/Favourite/Fav";
import { SignIn } from "./Components/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/Fav" element={<Fav/>}/>
            <Route path="/signIn" element={<SignIn/>}/>
          </Route>
        </Routes>
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
