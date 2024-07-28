import CategoryAdmin from "./CategoryAdmin";
import ProductAdmin from "./ProductAdmin";
import ListProductsCategory from "./ListProductsCategory";
import CartItems from "../CartItems/CartItems";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";



const AdminPage = () => {
    const dispatch = useDispatch();
    function logoutHandler(){
      dispatch(logout());
      console.log('logout');
    }
    const count = useSelector((state) => state.auth);
    console.log(count);
    // if(count){
        return(
            <div>
               { (count.isLoggedIn)&&(
                <div  onClick={logoutHandler} style={   { float: 'right', margin: '0 40px'}}>logout</div>)}
            <CategoryAdmin/>
            <hr/>
            <ProductAdmin/>
            <hr/>
            <ListProductsCategory/>
            <hr/>
            <CartItems/>
                </div>
        )
    // }
    // return (
    //     <div>
    // <CategoryAdmin/>
    // <hr/>
    // <ProductAdmin/>
    // <hr/>
    // <ListProductsCategory/>
    // <hr/>
    // <CartItems/>
    //     </div>
    // );
    }

export default AdminPage;