import React from 'react';

class ProductStockDetail extends React.Component {
    state = {
        showDetail: false
    }

    render() {
        const { productName, stockTotal, stockEvents } = this.props;
        const { showDetail } = this.state

        return (
            <div
                className="ProductStockDetail"
                onClick={() => this.setState({ showDetail: !showDetail })}
            >
                <h2>Product: {productName} | Quantity: {stockTotal} </h2>
                {showDetail &&
                    <div>
                        {stockEvents.map((event, i) => (
                            <div key={i} className="StockEventCard">
                                <p>Id: {event.id} </p>
                                <p>Type: {event.type} </p>
                                <p>Quantity: {event.quantity} </p>
                                <p>Seller: {} </p>
                            </div>
                        ))
                        }
                    </div>
                }
            </div>
        );
    }
}

export default ProductStockDetail; 