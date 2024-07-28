import React, { useState } from 'react';
import classes from './CategoryAdmin.module.css';
const CategoryAdmin = (props) => {
  const [categoryName, setCategoryName] = useState('');

  async function addCategory(e) {
    e.preventDefault();
    console.log("Category Added:", categoryName);

    try {
      const response = await fetch(`https://pristine-pine-default-rtdb.firebaseio.com/category/${categoryName.replace(/ /g, '-')}.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placeholder: true }) // Sending a placeholder value
       // Ensure the correct format for the request body
      });

      if (!response.ok) {
        throw new Error('Failed to add category to Firebase.');
      }

      console.log('Category added successfully to Firebase.');
      setCategoryName(''); // Reset the input field after successful addition
    } catch (error) {
      console.error('Error adding category to Firebase:', error);
    }
  }

  return (
    <>
    <div className={classes.adminOuterContainer}>
      <h5>Add new category</h5>
      <form onSubmit={addCategory}>
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          style={{ border: '2px solid #c7c0c0',borderRadius: '6px'}}
        />
        <button type="submit">Add Category</button>
      </form>
      </div>
    </>
  );
};

export default CategoryAdmin;
