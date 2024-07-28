import classes from './NavBar.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import CartItems from '../CartItems/CartItems';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const NavBar = (props) =>{


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return <>
    <div className={classes.navcontainer}>
    <div className={classes.navbar}>
       
            <ul className={classes.navMenu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Track Your Order</a></li>
                <li><a href="#">our Store</a></li>
            </ul>

          

      
    </div>  
    <div className={classes.navElements}>
    <div className={classes.navLogo}>Logo</div>
             <div className={classes.navSearch}> 
            
                <input type="text" placeholder="Search"/>

                </div>
<div className={classes.navOtherElements}>
                <div className={classes.navCart}>
                {/* <FaShoppingCart onClick={<CartItems/>} > </FaShoppingCart> */}
                <FaShoppingCart onClick={handleShow} />
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartItems />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
                    </div>

                <div className={classes.navLogin}>Login</div>
                <div className={classes.navRegister}>Register</div>
                </div>
                </div>
{/* 
    <div className={classes.navSubTitles}>
        <ul>
            <li><a href     ="#">New Arrivals</a></li>
            <li><a href     ="#">New Arrivals</a></li>
            <li><a href     ="#">New Arrivals</a></li>
            <li><a href     ="#">New Arrivals</a></li>
            <li><a href     ="#">New Arrivals</a></li>
            </ul>
        </div> */}
    </div>
    <main>
    {props.children}</main>

    <Footer/>
    </>
};

export default NavBar;