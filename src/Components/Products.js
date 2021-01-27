import React, { Component, } from 'react';
import './Food.json';
const food = require("./Food.json")
// step 1: import the json file here, remember we had to use either a) a webpack loader (boo) or b) the "require" syntax to let node import the file instead of asking Webpack to do it.
// something like this, I don't know the syntax
// const food = require("./Food.json")


class Products extends Component {
    // FIXME: we need to add the constructor method. You can read this section on it.
    // https://reactjs.org/tutorial/tutorial.html#making-an-interactive-component:~:text=First%2C%20we%E2%80%99ll%20add%20a%20constructor%20to%20the%20class%20to%20initialize%20the%20state%3A
    constructor(props) {
        super(props);
        this.state = {
            products: food.Foods
        }
    }


    render() {
        return (
            <>
                <div>
                    {this.state.products.map((product, index) => (

                        <h1>
                            <p>Product Page</p>
                            <p> {product.Food}</p>
                            <p>{product.price}</p>
                            <p>{product.type}</p>
                            <p>{product.description}</p>
                            <p>{product.img}</p>

                            {/* step 2: reference that array of food items */}
                            {/* step 3: use Array.map to iterate through each individual food item, for example: foods.map(x => <Product item={x} />) */}
                            {/* step 4: in the map call, pass in a function, that function needs to transform each food item into a react components, i.e. a "Food" component */}


                        </h1>
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
