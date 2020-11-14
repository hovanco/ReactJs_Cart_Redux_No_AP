import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as Message from "./../constants/Message";

class CartItem extends Component {

  render() {
    var { item } = this.props;
    var { quantity } = item; 
    return (
      <Router>
        <tr>
          <th scope="row">
            <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
          </th>
          <td>
            <h5>
              <strong>{item.product.name}</strong>
            </h5>
          </td>
          <td>{item.product.price}</td>
          <td className="center-on-small-only">
            <span className="qty">{ quantity } </span>
            <div className="btn-group radio-group" data-toggle="buttons">
              <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                onClick={ ()=> this.onUpdateQuantity(item.product, item.quantity-1)}
              >
                <Link to=""> — </Link>
              </label>
              <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                onClick={ ()=> this.onUpdateQuantity(item.product, item.quantity+1)}
              >
                <Link to=""> + </Link>
              </label>
            </div>
          </td>
          <td>{this.showTotal(item.product.price, item.quantity)}$</td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-primary waves-effect waves-light"
              data-toggle="tooltip"
              data-placement="top"
              title data-original-title="Remove item"
              onClick={ () => this.onDelete(item.product) } 
            >
              X
            </button>
          </td>
        </tr>
      </Router>
    );
  }
  showTotal = (price, quantity) =>{
    return price * quantity;
  }

  onDelete = (product) => {
    var { onDeleteProductInCart, onChangeMessage } = this.props;
    onDeleteProductInCart(product);
    onChangeMessage(Message.MESSAGE_DELETE_PRODUCT_IN_CART_SUCCESS); 
  }

  onUpdateQuantity = (product, quantity) => {
    if(quantity > 0){
      var { onUpdateProductInCart, onChangeMessage } = this.props;
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MESSAGE_UPDATE_CART_SUCCESS);
    }
  }
}
export default CartItem;
