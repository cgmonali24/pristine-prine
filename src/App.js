import CategoryDetailPage from "./components/Category/CategoryDetailPage";
import NavBar from "./components/NavBar/NavBar";
import Swiper from "./components/Swiper/Swiper";
import CategoryListing from "./components/Category/CategoryListing";
import { HashRouter as Router,Route, Redirect,Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import CategoryAdmin from "./components/AdminPage/CategoryAdmin";
import ProductAdmin from "./components/AdminPage/ProductAdmin";
import AdminPage from "./components/AdminPage/AdminPage";
import ProductDetailPage from "./components/Category/ProductDetailPage";
import AdminSignup from "./components/AdminPage/AdminSignup";
import { useSelector } from "react-redux";
function App() {
  const count = useSelector((state) => state.auth.isLoggedIn);
  return (


        <Router>

    <NavBar>
    <Routes>
    {/* <Swiper/> */}
    <Route path="/" element={<Home />} />
    {/* <Route path="/category" element={<CategoryListing />} /> */}
    <Route path="/:name" element={<CategoryDetailPage />} />
    <Route path="/:name/:productname" element={<ProductDetailPage />} />

{   count && ( <Route path="/adminpage" element={<AdminPage />} />)}
    <Route path="/admin" element={<AdminSignup />} />

    </Routes>
    </NavBar>
</Router>


  );
}

export default App;
