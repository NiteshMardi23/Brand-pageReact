"use client";
import React, { useState, useEffect } from "react";
import styles from "./Body.module.css";




const images = ["/images/shoes.jpg", "/images/shoes2.jpg", "/images/shoes3.jpg","/images/shoes4.jpg","/images/shoes5.jpg","/images/shoes6.jpg","/images/shoes7.jpg"]; // Add your image URLs


const Body = () =>{

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
    
        return () => {
          clearInterval(interval);
        };
      }, []);


    return(
        <div className={styles.container}>
            <div className={styles.container_content}>
              <h1>YOUR FEET DESERVE THE BEST</h1>
              <p>YOUR FEET DERSERVE THE BEST AND WE'RE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
            
            <div className={styles.container_btn}>
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className={styles.shopping}>
            <h3>Also available in</h3>
                <img src="/images/amazon.png" alt="" />
                <img src="/images/flipkart.png" alt="" />
            </div>
            </div>
            <div className={styles.container_image}>
                <img src={images[currentImageIndex]} alt="" />
            </div>
        </div>
    )
}
export default Body;