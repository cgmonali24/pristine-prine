// src/components/CategoryPage.js
import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './CategoryDetailPage.module.css';
import { getDatabase, ref, onValue, push, remove, get,onChildAdded } from "firebase/database";
import { app } from '../../firebase';

const CategoryDetailPage = () => {
  const { name } = useParams();
  const [productQuantity, setProductQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const [fixedQuantity, setFixedQuantity] = useState(0);
  // const category = useSelector((state) =>
  //   state.categories.categories.find((cat) => cat.id === parseInt(id))
  // );
  const navigate =useNavigate()
const [globalCategoryProductList, setGlobalCategoryProductList] = useState([]);
  useEffect(() => {
    categoryDetails()
    console.log(name);
  }
    , []);

const openProductDetailPage=(productname)=>{
navigate(`/${name}/${productname}`)
}




const decreaseProductQuantity = async (productname,productQuantity,changeQuantity) => {   
  
  
  const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${name}/${productname}/.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ changeQuantity:  changeQuantity-1 }),
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
     categoryDetails()
    }
  });



}


const increaseProductQuantity = async (productname,productQuantity,changeQuantity) => {   
  
  
  const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${name}/${productname}/.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ changeQuantity:  changeQuantity+1 }),
  });
  if (response.ok) {
    const data = await response.json();
            console.log(data);
            categoryDetails()
          
  }



  const db = getDatabase(app);
  const emailsRef = ref(db, `category/${name}/${productname}/`);
  onValue(emailsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
     console.log(data);
   
    }
  });



}
























    const categoryDetails = async () => {
      const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${name}.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
          console.log(data);
          // const categoryProduct = data.map((key) => {
          //   return {
          //     id: key,
          //     ...data[key],
          //   };
          // } 
          // );
          const categoryProduct = data ? Object.keys(data).map((key) => {
            return {
                id: key,
                ...data[key],
            };
        }) : [];
          const productsList = [];
          const productProperties = [];
          console.log(categoryProduct);
          setGlobalCategoryProductList(categoryProduct);
          console.log(globalCategoryProductList);
        // const categoryProductArray=  categoryProduct.map((product) => {
        //     return {
        //      product
        //     };
        //   })
          for(let i=0;i<categoryProduct.length;i++){
            productsList.push(categoryProduct[i].id);
            for (const key in categoryProduct[i]) {
              if (key !== "id") {
                
                productProperties.push(key);
               console.log(key);
              }
          } 
        }


 console.log(productsList,productProperties,);
console.log(categoryProduct);
  
      } else {
        const data1 = await response.json();
        let errorMessage = 'Authentication failed!';
        throw new Error(errorMessage);
      }
    };

  return (
    <div>
      {/* <h1>{category}</h1> */}
      <div className={classes.productsContainer}>
        {globalCategoryProductList.map((product, index) => (
        (product.placeholder!==true) &&(
          <div className={classes.productContainer}>
 
          <img src={`${product.img}`} />
          <div className={classes.productDescription}>
          <h2 key={index}>{product.name}</h2>
          <li key={index}>{product.description}</li>
          {/* <li key={index}>{product.quantity}</li> */}
    <p>available quantity : {product.changeQuantity}</p>
    {console.log(product.quantity-product.changeQuantity)}
<p>selected product : {product.quantity-product.changeQuantity}</p>
<div className={classes.buttonContainer}>
{ (product.changeQuantity) ?  < button className={classes.addButtonCategoryDetail} onClick={()=>decreaseProductQuantity(product.id,product.quantity,product.changeQuantity)}>+add</button>: <p>out of stock</p>}
    {( (product.quantity-product.changeQuantity)>0) && (< button className={classes.removeButtonCategoryDetail} onClick={()=>increaseProductQuantity(product.id,product.quantity,product.changeQuantity)}>-remove</button>)}

</div>


          <li key={100+index} onClick={()=>openProductDetailPage(product.id)} className={classes.fullView}>Complete view</li>
          </div></div>)
        ))}
      </div>
     

    </div>
  );
};

export default CategoryDetailPage;
