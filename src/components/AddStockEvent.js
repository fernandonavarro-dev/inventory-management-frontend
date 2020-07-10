import React, { Component } from 'react';
import axios from 'axios';

class AddStockEvent extends Component {
    // select the product
    // add the quantity
    // select a type
    // submit to strapi

    state = {
        quantity: 0,
        type: 'add',
        product: 'no',
        show: false
    }

    handleChange = (e) => {

        // console.log("AddStockEvent.handleChange name", e.target.name);
        // console.log("AddStockEvent.handleChange value", e.target.value);

        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { quantity, type, product } = this.state;

        // console.log("AddStockEvent.handleSubmit quantity", quantity);
        // console.log("AddStockEvent.handleSubmit type", type);

        if (product !== 'no') {
            const data = {
                quantity,
                type,
                product: parseInt(product)
            }
            const addStockRes = await axios({
                method: 'POST',
                url: 'http://localhost:1337/stock-events',
                data
            })
            // console.log("AddStockEvent.handleSubmit addStockRes", addStockRes);
            if (addStockRes.status === 200) {
                alert('success!');
                window.location = window.location;
            }
        } else {
            alert('no product chosen');
            return
        }
    }

    render() {
        const { type, quantity, product, show } = this.state;
        const { products } = this.props;

        return (
            <div className="AddStockEvent" >
                <h2>Add Stock Event <button onClick={() => this.setState({ show: true })} >+</button> </h2>
                {show &&
                    <form onSubmit={this.handleSubmit} >
                        <select onChange={this.handleChange} name="product" value={product} >
                            <option value='no'>Please select a product</option>
                            {products.map((product, i) => (
                                <option key={i} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                        <input
                            onChange={this.handleChange}
                            type="number"
                            name="quantity"
                            value={quantity} />
                        <select onChange={this.handleChange} name="type" value={type} >
                            <option value="add">Add</option>
                            <option value="remove">Remove</option>
                        </select>

                        <button>Submit</button>
                    </form>
                }
            </div>
        )
    }
}

export default AddStockEvent;
