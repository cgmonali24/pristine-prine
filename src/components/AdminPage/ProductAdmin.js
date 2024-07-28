import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, push, remove, get,onChildAdded } from "firebase/database";
import { app } from '../../firebase';
import classes from './ProductAdmin.module.css';

const ProductAdmin = () => {
 
    const [productName, setProductName] = useState("");
    const [categories, setCategories] = useState([]);
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageURL, setProductImageURL] = useState('');
    const [productQuantity, setProductQuantity] = useState(0);
    const [productCategory, setProductCategory] = useState('');
const [chooseCategory, setChooseCategory] = useState('');

useEffect(() => {
    getCategory();
    }
    , []);



    const getCategory = async () => {
        const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/.json`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          const categoryNames = Object.keys(data.category);
          setCategories(categoryNames);
          console.log(categoryNames);
            console.log(data.category);
        } else {
          const data = await response.json();
          let errorMessage = 'Authentication failed!';
          throw new Error(errorMessage);
        }
      };

async function createProduct(e)  {
  const selectedValue = e.target.categorySelect.value;
  setChooseCategory(selectedValue);
  console.log(chooseCategory);
    e.preventDefault();
    const newProduct = {
        name:productName,
        description:productDescription,
        price: productPrice,
        img:productImageURL,
        quantity:productQuantity,
        changeQuantity:productQuantity
      };
      console.log('Product Added:', newProduct,productCategory);

      const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${productCategory}.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        const data = await response.json();
        // const categoryNames = Object.keys(data.category);
        // setCategories(categoryNames);
        // console.log(categoryNames);
          console.log(data.name);
      } else {
        const data = await response.json();
        let errorMessage = 'Authentication failed!';
        throw new Error(errorMessage);
      }
}

useEffect(() => {
  const db = getDatabase();
  const categoryRef = ref(db, 'category/');
  const unsubscribe = onValue(categoryRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const categoryNames = Object.keys(data);
      setCategories(categoryNames);
      console.log(categoryNames);
    }
  });

  return () => unsubscribe(); // Cleanup the listener on unmount
}, []);







    return (
        <div className={classes.productAdminContainer}>
        <h5>Create New Product</h5>
        <form onSubmit={createProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
               <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Image URL"
          value={productImageURL}
          onChange={(e) => setProductImageURL(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Quantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
          <select  name="categorySelect"  value={productCategory}    onChange={(e) => setProductCategory(e.target.value)}  >
            <option value="">Select Category</option>
            {categories &&
              categories.map((category) => (
              
                <option key={category} value={category}>
                  {category}  {console.log(category)}
                </option>
              ))}
          </select>
          <button type="submit" className={classes.addProductButton}>Add Product</button>
        </form>
      </div>
    );
    }
export default ProductAdmin; {/* have a glimpse of way to retreive data from input field */}