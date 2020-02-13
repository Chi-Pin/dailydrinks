import React from 'react';
import logo from './logo.svg';
import './App.css';

// main function
class App extends React.Component{
  constructor(props) {
    super(props);
    // init state
    this.state = {
        orders : {
          'order-1' : 'Kobe Bryant',
          'order-2' : 'Lebron James'
        }
      }
  }

    addOrder(order) {
      //create a unike key for each new order item
      var timestamp = (new Date()).getTime();
      // update the state object
      this.state.orders['order-' + timestamp ] = order;
      // set the state
      this.setState({ orders : this.state.orders });
     }

     removeOrder(orderKey) {
      // update the state object
      delete this.state.orders[orderKey];
      // set the state
      this.setState({ orders : this.state.orders });
      //alert(orderKey);
     }

     // render the component to DOM
     render() {
      return (
        <div className="component-wrapper">
          <OrderList orders={this.state.orders} />
          <AddOrderForm addOrder={this.addOrder.bind(this)} />
          <RemoveOrderForm removeOrder={this.removeOrder.bind(this)} orders={this.state.orders} />
        </ div>
       );
      }
}


class OrderList extends React.Component{
render() {
  return (
    <div className="container">
      <ul className="list-group text-center">
        {
          Object.keys(this.props.orders).map(function(key) {
            return <li className="list-group-item list-group-item-info">{this.props.orders[key]}</li>
          }.bind(this))
        }
      </ul>
     </div>
    );
  }
}

class AddOrderForm extends React.Component{
  createOrder(e) {
    e.preventDefault();
    //get the order object name from the form
    var order = this.refs.orderName.value;
    //call the addOrder method of the App component
    //to change the state of the order list by adding an new item
    if(order.length > 0) {
      this.props.addOrder(order);
    }
    //reset the form
    this.refs.orderForm.reset();
  }

  // rendor the add component to DOM
  render() {
    return(
      <form className="form-inline" ref="orderForm" onSubmit={this.createOrder.bind(this)}>
        <div className="form-group">
          <label for="fruitItem">
            Order: Name
            <input type="text" id="orderItem" className="form-control" placeholder="Michael Jordan" ref="orderName" />
          </label>
          <label for="priceItem">
            Price
            <input type="number" id="priceItem" className="form-control" placeholder="100" min="0" ref="priceValue" />
          </label>
          <label for="noteItem">
            Notes
            <input type="text" id="noteItem" className="form-control" placeholder="Notes" ref="noteContent" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
}

class RemoveOrderForm extends React.Component{
    constructor(props) {
      super(props);
    }

  selectOrdertoRemove(e) {
    var order = e.target.value;
    //get the order object name from the form
    //var order = this.refs.removeOrderSelect.value;
    //call the addOrder method of the App component
    //to change the state of the order list by adding an new item
    this.props.removeOrder(order);
    //reset the form
    this.refs.removeOrderForm.reset();
  }

  render() {
    return(
      <form className="form-inline" ref="removeOrderForm" onChange={this.selectOrdertoRemove.bind(this)}>
       <div className="form-group">
        <label for="selectOrder">
          List of Orders
          <select id="selectOrder" className="form-control">
            <option value="">Remove an order</option>
            {
              Object.keys(this.props.orders).map(function(key) {
                return <option value={key}>{this.props.orders[key]}</option>
              }.bind(this))
            }
          </select>
        </label>
        </div>
      </form>
    );
  }
}

export default App;
