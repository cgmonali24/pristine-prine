import { useEffect,useState } from "react";
import classes from './ListProductsCategory.module.css';
const ListProductsCategory = () => {
    const [products, setProducts] = useState([]);
    const [categoryListForProducts, setCategoryListForProducts] = useState([]);

useEffect(() => {
    loadInboxMail();

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
                    const productWithKey = {
                        ...productsArray[i][key], // Spread the existing product properties
                        id: key, // Add the key as a new property
                        categoryid:productsArray[i].id,
                      };
                  productsList.push(productWithKey);
                  console.log(productsArray[i][key],key,productsArray[i],productsArray[i].id);
                  if(productsArray[i][key].quantity-productsArray[i][key].changeQuantity){
                    cartItems.push(productsArray[i][key]);
                    console.log(cartItems);
                  }
                }
            }
            }
            console.log(categoryList);
            console.log(productsList);
            setProducts(productsList);
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




const deleteProduct = async (productId,categoryId) => {
    const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${categoryId}/${productId}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data,productId);
      loadInboxMail();
    } else {
      const data = await response.json();
      let errorMessage = 'Authentication failed!';
      throw new Error(errorMessage);
    }

    console.log(productId,categoryId);
}






    return (
        <div className={classes.createProductAdminContainer}>
        <h2>Products</h2>
        <ul className={classes.productItem}>
        <li className={classes.categoryListAdminPage} >
                <p>name</p>
                <p>description</p>
                <p>quantity</p> 
                <span></span> </li>
                </ul>


        <ul className={classes.productItem}>
            {products.map((product) => {
            return (
               ( product.placeholder !== true) &&(
                <li className={classes.categoryListAdminPage} key={product.id}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p> {product.quantity}</p>
                <button className ={classes.deleteProductButton} onClick={()=>deleteProduct(product.id,product.categoryid)} >delete</button>
                </li>)
            );
            })}
        </ul>
        </div>
    );
    }


    export default ListProductsCategory;