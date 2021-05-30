import React, { Component } from "react";
export const DataContext = React.createContext();

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0,
    };
  }
  componentDidMount() {
    this.getTotal();
  }
  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }
  /**
   * get total of cart item
   */
  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };
  /**
   * remove qty item from the cart
   * @param {id} id 
   */
  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  /**
   * add qty item to cart
   * @param {*} id 
   */
  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  /**
   * remove product from the cart
   * @param {*} id 
   */
  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };
  render() {
    const { cart, total } = this.state;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 ">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th className="text-center">Price(LKR)</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="col-md-6">
                        <div className="media">
                          <a className="thumbnail pull-left" href="#">
                            <img
                              className="media-object"
                              src="https://i.pinimg.com/originals/2f/8a/35/2f8a35f369724a607d7d64dff7b81609.jpg"
                              style={{ width: "72px", height: "72px" }}
                            ></img>
                          </a>
                          <div className="media-body">
                            <h4 className="media-heading">{item.title}</h4>
                            <span>Status: </span>
                            <span className="text-success">
                              <strong>In Stock</strong>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="col-md-2">
                        <button
                          className="btn"
                          onClick={this.reduction.bind(this, item.id)}
                        >
                          -
                        </button>
                        <span> {item.count} </span>
                        <button
                          className="btn"
                          onClick={this.increase.bind(this, item.id)}
                        >
                          +
                        </button>
                      </td>
                      <td className="col-md-2 text-center">
                        <strong>{item.price}</strong>
                      </td>
                      <td className="col-md-2">
                        <button
                          type="button"
                          onClick={this.removeProduct.bind(this, item.id)}
                          className="btn btn-danger"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                      <h3>Total(LKR)</h3>
                    </td>
                    <td className="text-right">
                      <h3>
                        <strong> {total}</strong>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td></td>
                    <td>
                      <button type="button" className="btn btn-success">
                        Checkout
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
