import React from 'react';
import './App.css';
import { render } from "react-dom";
import MyCarousel from "./MyCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    return (
        <div className="Homepage">
            <h1>Welcome to Coffee Food & Bake</h1>
            <p>Where you can get some nice and sweet caffinated coffee and nice and delicouis meals with some sweet dessert
          you won't regret.</p>
            <MyCarousel />
            <h2>About us</h2>
            <p>We make our Food & Bakery fresh with all natural ingredients. We strived to make the best food and bakery in
            town. We have all different Type of coffee beans that come from all around the world. We do our best to make the
        store clean and healthy environment to make our customers safe and comfortable. </p>
        </div>
    );
}

render(<Home />, document.getElementById("root"));
export default Home;