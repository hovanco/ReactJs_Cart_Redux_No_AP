import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

class Products extends Component {
  render() {
    return (
      <Router>
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
            { this.props.children }
          </div>
        </section>
      </Router>
    );
  }
}
export default Products;