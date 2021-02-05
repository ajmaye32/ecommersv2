import React, { Component, } from 'react';
import './Food.json';
const food = require("./Food.json")


class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: food.Foods
        }
    }


    render() {
        return (
            <>
                <div id="here123">
                    <h1>products Page</h1>
                    {this.state.products.map((product, index) => (

                        <article key={product.Food}>

                            <p> {product.Food}</p>
                            <p>{product.price}</p>
                            <p>{product.type}</p>
                            <button>Order</button>
                            <p>{product.description}</p>
                            <img className="fp" src={product.img} alt={product.Food}></img>



                        </article>
                    ))}
                </div>
            </>


        )
    }
}
export default Products
// joe here, what's up
// Hey Joe I'm trying to link my json to the product.js the code we did earlier wasn't save idk how or it got deleted.
// yikes, k. can you share your server so that I can see the webpage result? it is in the liveshare tab on left.
// is it working now?
