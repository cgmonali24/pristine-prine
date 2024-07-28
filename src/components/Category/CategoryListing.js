// src/components/HomePage.js
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setSelectedCategory,setCategories,addCategory} from '../../store/categorySlice.js';
import classes from './CategoryListing.module.css'



const CategoryListing = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const select = useSelector(state => state.categories.categories);
  const [category, setCategory] = useState([]);
  const [categoryListForProducts, setCategoryListForProducts] = useState([]);     
  const [productsList, setProductsList] = useState([]);

  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
    console.log(category,'hhh',select);
    navigate(`/${category}`);
  };





 








useEffect(() => {
    loadInboxMail();
    // const newCategory = { id: 1, name: '1 Door Wardrobes', products: ['Product 1', 'Product 2'] };
    //   dispatch(addCategory(newCategory));
    console.log(select,'select')
  }
    , []);



  const loadInboxMail = async () => {
    const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setCategories(data.category));
      // const newCategory = { id: 1, name: '1 Door Wardrobes', products: ['Product 1', 'Product 2'] };
      // dispatch(addCategory(newCategory));
      console.log(select,'select')

        console.log(data.category,Object.keys(data.category));
        console.log('-----------------');
        const productsArray = Object.keys(data.category).map((key) => {
          return {
            id: key,
            ...data.category[key],
          };
        }
        );
        const products =Object.keys(data.category)[0]
        const categoryList =[]
        console.log(data.category,productsArray.length,productsArray);
        const productsList = [];   
        let cartItems=[]
        for(let i=0;i<productsArray.length;i++){
          categoryList.push(productsArray[i].id);
          for (const key in productsArray[i]) {
            if (key !== "id") {
              productsList.push(productsArray[i][key]);
              if(productsArray[i][key].quantity-productsArray[i][key].changeQuantity){
                cartItems.push(productsArray[i][key]);
                console.log(cartItems);
              }
            }
        }
        }
        console.log(categoryList);
        console.log(productsList,productsList.length,'productsList');
        setProductsList(productsList);
     
//         productsList.forEach(product => {
// console.log(product.quantity-product.changeQuantity);
// if(product.quantity-product.changeQuantity>0){
//   cartItems.push(product);
//   console.log(cartItems);
// }
//           // cartItems.push(product);
//         });
        console.log(cartItems);
      productsList.forEach(product => {
        console.log(`Name: ${product.name}`);
        console.log(`Description: ${product.description}`);
        console.log(`Quantity: ${product.quantity}`);
        console.log('-------------------------');
    });
    setCategoryListForProducts(categoryList)

    } else {
      const data1 = await response.json();
      let errorMessage = 'Authentication failed!';
      throw new Error(errorMessage);
    }
  };

  return (
    <>
  
    <div className={classes.categoryListingHomePage}>
      <h3>Explore Top Picks Of India's Favourite Furniture Sale</h3>
      <ul className={classes.listingCategories}>
        {console.log(categories)}
        {console.log(categoryListForProducts)}
        {categoryListForProducts.map((category,index) => (
          <li key={category} onClick={() => handleCategoryClick(category)}>
         <img src={`https://picsum.photos/id/${27+index}/300/300`} alt="category" />
         {/* /to change id dynamicallywithin flower bracket there should be quotes */}
           <p> {category.replace(/-/g, ' ')}</p>
            {console.log(category)}
          </li>
        ))}
      </ul>
    </div> 

    <div className={classes.middleContainer}>
      <div>
Pristine Prine is a  company known for its commitment to providing high-quality, eco-friendly products. Specializing in sustainable and innovative solutions, Pristine Prine aims to enhance everyday living while minimizing environmental impact. Their product range includes home essentials, personal care items, and lifestyle goods, all designed with a focus on sustainability and aesthetic appeal. The company prides itself on transparency, ethical 
sourcing, and customer satisfaction, making it a trusted name in eco-conscious consumerism.</div>
      </div>


     <div className={classes.categoryListingHomePage}> 
     <h3>list of all the products </h3>
     <ul className={classes.listingCategories}>
        {console.log(categories)}
        {console.log(categoryListForProducts)}
      
        {productsList.map((product,index) => (
          (product.placeholder!==true) &&(
          <li key={200+index} >
         <img src={`${product.img}`} alt="category" />

           <p> {product.name}</p>
            {console.log(category)}
          </li>
       ) ))}
      </ul>
     </div>
    </>
  );
};

export default CategoryListing;
