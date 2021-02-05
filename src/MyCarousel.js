import React from "react";
import { Carousel } from "react-responsive-carousel";
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const imgs = [
    "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1576039716095-29ab1f8de050?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMzfHxjaW5uYW1vbiUyMGJ1bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1582576569353-2e80e00c26c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTJ8fHdhZmZsZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1595443339479-9d1bb7d65b60?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpcHMlMjB3aXRoJTIwcXVlc298ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1547458784-bdc75d9a6cd9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZWNsYWlyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
]

const MyCarousel = () => (
    <Carousel >
        {imgs.map((src, index) => (
            <div className="carousel-img-container">
                <img alt="" src={src} />
                {/* <p className="legend">Legend {index}</p> */}
            </div>
        ))}
    </Carousel>
);

export default MyCarousel;