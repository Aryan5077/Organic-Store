import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Body = () => {
  const { products } = useContext(ProductContext);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero-600x514.png"
            alt="Organic Movement"
            className="hero-image"
          />
          <div className="hero-text">
            <img 
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png" 
              alt="bodyleafelogo"
              className="leaf-logo"
            />
            <h1>Best Quality Products</h1>
            <p className="main-text">Join The Organic <br /> Movement!</p>
            <p className="lorem-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Iure magni voluptatibus vel cupiditate.
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </section>

      <section className="info-strip">
  <div className="info-box">
    <h4>Free Shipping</h4>
    <p>above $5 Only</p>
  </div>
  <div className="info-box">
    <h4>100% Organic</h4>
    <p>Guaranteed fresh and healthy</p>
  </div>
  <div className="info-box">
    <h4>Money Back Guarantee</h4>
    <p>30-day return policy</p>
  </div>
  <div className="info-box">
    <h4>Secure Payment</h4>
    <p>SSL encryption for secure transactions</p>
  </div>
</section>

      <section className="featured-products">
        <h2>Best Selling Products</h2>
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png" // Replace with your image URL
          alt="Featured Products"
          className="featured-image"
        />
       <div className="products">
  {products.map((product, ind) => {
    if (ind < 4) {
      return (
        <div className="product-box" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p>{product.description}</p>
          <p className="product-price">${product.price}</p>
        </div>
      );
    } else {
      return null; 
    }
  })}
</div>
</section>

      <img
      src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"
      alt="mid logo"
      className='mid-logo'
      />

      <section className="boxes">
        <div className="box">
          <div className="box-text">
            <h3>Farm Fresh Fruits</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg" alt="Box 1" className="box-image" />
          </div>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="box">
          <div className="box-text">
            <h3>Fresh vegetables</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product13-free-img.jpg" alt="Box 2" className="box-image" />
          </div>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="box">
          <div className="box-text">
            <h3>Organic Legume</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product17-free-img.jpg" alt="Box 3" className="box-image" />
          </div>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      <section className="about-us">
        <h1><b>Get 25% Off On Your first Purchase!</b><button className="shop-now-btn">Shop Now</button></h1>
        <h2>Try It For Free. No Registration Needed</h2>
        <h3>Trending Products
        </h3>   
           <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png' alt="trending product" className='trending-logo'/>
           <div className="trending-products">
  {products.slice(0, 4).map((product) => (
    <div className="box" key={product.id} style={{ flex: 1, maxWidth: '25%' }}>
      <div className="box-text">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <img src={product.image} alt={product.name} className="box-image" />
      </div>
      <button className='decrement-btn'>-</button>
      <button className="shop-now-btn">Shop Now</button>
      <button className='inrement-btn'>+</button>
    </div>
             ))}
           </div>
      </section>


      <section className="reviews">
  <h1>Customers Reviews</h1>
  <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png' alt="trending product" className='trending-logo'/>
  <div className="review-box">
    <div>
      <span className="stars"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sed ducimus debitis aliquid nemo fugiat porro delectus, minus excepturi pariatur? Illum, dolore aperiam? Eaque corporis pariatur sed quaerat. Animi, quasi.</p>
      <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png" alt="Review 1"/>
    </div>
    <div className='mid-review'>
        <h1>Deal of The Day<br/>15% Off On All<br/>Vegetables</h1>
       <button>Get Deal</button>
    </div>
    <div>
      <span className="stars"></span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur iste sed unde laborum exercitationem sint maxime voluptatem dignissimos ex quasi deleniti quisquam harum aliquam.</p>
      <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png" alt="Review 2"/>
    </div>
  </div>
</section>
    </main>
  );
};

export default Body;