import React from 'react';
import ProductStockDetail from './ProductStockDetail';

function StockEventTable(props) {
    const { products, stockEvents } = props;

    return (
        <div className="StockEventTable">
            {products.map(product => {
                // const { id } = product;

                const productStockEvents = stockEvents.filter(se => se.product.id === product.id);

                const stockTotal = productStockEvents.reduce((accumulator, currentElement) => {
                    return accumulator + currentElement.quantity
                }, 0);

                return (
                    <div className="StockEventProductContainer">
                        <ProductStockDetail
                            productName={product.name}
                            stockTotal={stockTotal}
                            stockEvents={productStockEvents}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default StockEventTable;