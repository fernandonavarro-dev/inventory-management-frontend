import React from 'react';
import axios from 'axios';
import './App.css';
import StockEventsTable from './components/StockEventsTable';
import AddStockEvent from './components/AddStockEvent';

// const products = [{
//     id: "acme_1",
//     name: "catapult",
//     price: null,
//     commissionPct: null,
//     thumbnail: "url",
//     supplier: "supplier"
//   }]

// const stockEvents = [{
//   id: "",  
//   eventId: "event#",
//   type: 'add | remove',
//   status: 'delivered | processing',
//   location: "",
//   quantity: null,
//   product: products[0],
//   date: "eventDate",
//   employeeId: "",
//   employeeName: "name"
// }]

// const teamMemebers = [{
//   id: 'employeeId',
//   name: "employeeName",
//   category: "top | coordinator | seller",
//   sales: {
//     saleId: "",
//     saleAmount: null,
//     saleDate: "dateFormat",
//   },
//   commission: {
//     commissionId: "",
//     commissionAmount: null,
//     commissionDate: "dateFormat",
//   },
//   location: ""
// }]

class App extends React.Component {
  state = {
    products: [],
    stockEvents: [],
    teamMemebers: []
  }

  async componentDidMount() {
    const productsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    });

    const stockEventsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stock-events'
    })

    const products = productsRes.data;

    const stockEvents = stockEventsRes.data;

    this.setState({ products, stockEvents });
  }

  render() {
    const { products, stockEvents, teamMemebers } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p>Inventory Management Phase</p>
        </header>
        <div>
          <AddStockEvent products={products} />

          <StockEventsTable
            products={products}
            stockEvents={stockEvents}
            teamMemebers={teamMemebers}
          />
        </div>
      </div>
    );
  }

}

export default App;
