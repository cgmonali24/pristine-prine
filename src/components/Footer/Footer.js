import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.aboutDescription}>
      <div className={classes.breakLine}></div>
        <h4>About Pristinepine</h4>
        <p>
          Prinstinepine is a platform that provides you with the best quality
          products at the best price , we here at pristinepine believe in
          providing the best quality products to our customers at the best price
          possible. so that you can enjoy the best quality products at the best
          price possible.pristinepine products are made with the best quality
          materials and are made to last long. So what are you waiting for? go
          ahead and buy the best quality products at the best price possible
          from pristinepine.
        </p>
      </div>
      <div className={classes.breakLine}></div>
      <div className={classes.newsletternSubscription}>
        <h6>
          Join Our Newsletter To Receive Updates On Product Annoucements And
          Sales.
        </h6>
        <div className={classes.subscribeInput}>
          <input type="email" placeholder="Enter Your Email Address..." />
          <button>Subscribe</button>
        </div>
      </div>
      {/* <div className={classes.furnitureContainer}>
            <div>
               < h3>
Popular Furniture Categories :</h3> <span>	
CHAIRS,TABLES,CABINETRY,SOFAS,DINING ROOM FURNITURE & BAR FURNITURE,DESIGNER BEDS,KIDS FURNITURE,SEATING,</span>
            </div>

            <div>
               < h3>
               Shop Furniture By Room :</h3> <span>	
	
               LIVING ROOM,DINING ROOM,BED ROOM,STUDY ROOM,BATH ROOM,KITCHEN,</span>
            </div>


           </div> */}
      <div className={classes.breakLine}></div>
      <div className={classes.categoriesTableContainer}>
        {" "}
        <table>
          {" "}
          <tbody>
            <tr>
              {" "}
              <td>
                {" "}
                <b>Popular Furniture Categories :</b>
              </td>{" "}
              <td>
                {" "}
                <p>
                  <a href="/collections/chairs">CHAIRS,</a>
                  <a href="/collections/tables">TABLES,</a>
                  <a href="/collections/cabinetry">CABINETRY,</a>
                  <a href="/collections/sofas">SOFAS,</a>
                  <a href="/collections/dining-room-furniture-bar-furniture">
                    Dining Room Furniture &amp; Bar Furniture,
                  </a>
                  <a href="/collections/beds">Designer Beds,</a>
                  <a href="/collections/kids-furniture">KIDS FURNITURE,</a>
                  <a href="/collections/seating">SEATING,</a>
                </p>
              </td>
            </tr>{" "}
            <tr>
              {" "}
              <td>
                {" "}
                <b>Shop Furniture By Room :</b>
              </td>{" "}
              <td>
                {" "}
                <p>
                  <a href="/collections/living-room">Living Room,</a>
                  <a href="/collections/dining-room">Dining Room,</a>
                  <a href="/collections/bed-room">Bed Room,</a>
                  <a href="/collections/study-room">Study Room,</a>
                  <a href="/collections/bath-room">Bath Room,</a>
                  <a href="/collections/kitchen">Kitchen,</a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={classes.breakLine}></div>
      <div className={classes.listingContainer}>
        <div className={classes.furnitureListing}>
          <h3>Furniture</h3>
          <ul>
            <li>Chairs</li>
            <li>Tables</li>
            <li>Cabinetry</li>
            <li>Sofas</li>
            <li>Dining Room Furniture & Bar Furniture</li>
            <li>Designer Beds</li>
            <li>Kids Furniture</li>
            <li>Seating</li>
          </ul>
        </div>
        <div className={classes.aboutUsListing}>
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Our Team</li>
            <li>Our Blog</li>
            <li>Our Showroom</li>
            <li>Our Store</li>
            <li>Our Products</li>
            <li>Our Services</li>
            <li>Our Customers</li>
          </ul>
        </div>
        <div className={classes.helpListing}>
          <h3>Help</h3>
          <ul>
            <li>Shipping & Delivery</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Franchise Enquiry</li>
          </ul>
        </div>

        <div className={classes.helpListing}>
          <h3>Support</h3>
          <ul>
            <li>
              You can reach us 7 days a week. Chat with us or call our toll-free
              number between 10.00 am to 7.00 pm.
            </li>
            <li>pristine@gmailcom</li>
            <li>Karnataka, India</li>
          </ul>
        </div>
      </div>
      <div className={classes.breakLine}></div>
      <p>© 2021 Pristinepine. All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
