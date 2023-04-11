import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
        <div className="aboutTop" 
        style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Welcome to our restaurant! We are a family-owned establishment that has been serving our community for over [number of years]. Our passion for food and hospitality is at the heart of everything we do.

Our menu features a wide variety of dishes made with fresh, locally-sourced ingredients. We believe in creating dishes that are not only delicious, but also healthy and sustainable. Whether you're a meat-lover, vegetarian, or vegan, we have something for everyone.

In addition to our food, we also offer a carefully curated selection of drinks, including craft beer, wine, and cocktails. Our knowledgeable staff can help you choose the perfect drink to complement your meal.

At our restaurant, we strive to create a warm and welcoming atmosphere that makes you feel like family. We believe that good food is best enjoyed with good company, and we love seeing our guests come together to share a meal and create memories.

Thank you for choosing our restaurant. We look forward to serving you and making your dining experience one to remember.</p>
        </div>
      
    </div>
  )
}

export default About
