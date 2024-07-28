// src/components/CategoryPage.js
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './ProductDetailPage.module.css';
import {updateProductQuantity} from '../../store/categorySlice'
import { getDatabase, ref, onValue, push, remove, get,onChildAdded } from "firebase/database";
import { app } from '../../firebase';

const ProductDetailPage = () => {
    const { name, productname } = useParams();
 const [productDetail, setProductDetail] = useState({});
 const dispatch = useDispatch;
 const select = useSelector(state => state.categories.categories);
 const nquantity = 0;
 const [productQuantity, setProductQuantity] = useState(0);
 const [selectedProduct, setSelectedProduct] = useState(0);
 const [fixedQuantity, setFixedQuantity] = useState(0);
  useEffect(() => {
    // dispatch(updateProductQuantity({ name, productname, nquantity }));
    // console.log(productname,name,select[name][productname].quantity,Object.keys(select));
    ProductDetailPage()
  }
    , []);


const decreaseProductQuantity = async () => {   
  
  
  const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${name}/${productname}/.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ changeQuantity:  productQuantity-1 }),
  });
  if (response.ok) {
    const data = await response.json();
            console.log(data);
            setSelectedProduct(prev=>prev+1);
  }



  const db = getDatabase(app);
  const emailsRef = ref(db, `category/${name}/${productname}/`);
  onValue(emailsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
     console.log(data);
     setProductQuantity(data.changeQuantity);
    }
  });



}


const increaseProductQuantity = async () => {   
  
  
  const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${name}/${productname}/.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ changeQuantity:  productQuantity+1 }),
  });
  if (response.ok) {
    const data = await response.json();
            console.log(data);
            setSelectedProduct(prev=>prev-1);
  }



  const db = getDatabase(app);
  const emailsRef = ref(db, `category/${name}/${productname}/`);
  onValue(emailsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
     console.log(data);
     setProductQuantity(data.changeQuantity);
    }
  });



}



    const ProductDetailPage = async () => {
        const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${name}/${productname}/.json`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            console.log(`https://pristine-pine-default-rtdb.firebaseio.com/category/${name}/${productname}.json`)
          const data = await response.json();
            console.log(data);
            setProductDetail(data);
            console.log(data.description,data.quantity,data.name);
            setFixedQuantity(data.quantity);

            setProductQuantity(data.changeQuantity);
            // dispatch(updateProductQuantity({ name, productname, nquantity }));
            console.log(productDetail.quantity);
    
        } else {
          const data1 = await response.json();
          let errorMessage = 'Authentication failed!';
          throw new Error(errorMessage);
        }
      };



  return (
    <div>
      <div className={classes.categoryDetailContainer}>
  
  
      <img src={`${productDetail.img}`} alt="category" />  
      <div className={classes.categoryDetail}>

       <h6>{productDetail.name}</h6>         
       <p>Price:{productDetail.price}</p>
       <p>  {productDetail.description}</p>      
       
<p>available quantity : {productQuantity}</p>

<p>selected product : {fixedQuantity - productQuantity}</p>
     { productQuantity ?  < button  className={classes.addButtonCategoryDetail} onClick={decreaseProductQuantity}>+add</button>: <p>out of stock</p>}
    {( (fixedQuantity - productQuantity)>0) && (< button  className={classes.removeButtonCategoryDetail} onClick={increaseProductQuantity}>+remove</button>)}

</div>
</div>
    </div>
  );
};

export default ProductDetailPage;
