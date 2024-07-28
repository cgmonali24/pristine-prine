import { useEffect } from "react";
import { useState } from "react";
import classes from './CartItems.module.css';

const CartItems=()=>{
const [cartItems,setCartItems]=useState([]);
    useEffect(() => {
        getAllCartItem()
        console.log('cartItems');
    }
        , []);
        const getAllCartItem = async () => {
            const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/.json`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (response.ok) {
              const data = await response.json();

                const productsArray = Object.keys(data.category).map((key) => {
                  return {
                    id: key,
                    ...data.category[key],
                  };
                }
                );


                let cartItems=[]
                for(let i=0;i<productsArray.length;i++){
                  for (const key in productsArray[i]) {
                    if (key !== "id") {
                      if(productsArray[i][key].quantity-productsArray[i][key].changeQuantity){
                        cartItems.push(productsArray[i][key]);
                        console.log(cartItems);
                      }
                    }
                }
                }
                setCartItems(cartItems);
        
            } else {
              const data1 = await response.json();
              let errorMessage = 'Authentication failed!';
              throw new Error(errorMessage);
            }
          };


return (
  <div className={classes.cartItemAdminContainer}>
    <h4>Cart Items</h4>
    <ul>
   { cartItems.map((item) => {
        return (
          <li key={item.id} className={classes.cartList}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity-item.changeQuantity}</p>
          </li>
        );
      })}
    </ul>
  </div>
);
}
export default CartItems;