import React, { Component } from "react";
import axios from "axios";
import "../styles/app.css";
export const DataContext = React.createContext();
class Items extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      books: [],
      cart: [],
      category_id: '',
      total: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
  }
  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }
  componentDidMount() {
    this.getBooks();
    this.getCategory();
    this.getTotal();
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
   * get category list
   */
  getCategory() {
    axios
      .get("api/categories", {
        headers: {
          accept: "application/json",
        },
      })
      .then((res) => {
        this.setState({
          categories: res.data,
        });
      });
  }
  /**
   * get book list
   */
  getBooks() {
    axios
      .get("api/books", {
        headers: {
          accept: "application/json",
        },
      })
      .then((res) => {
        this.setState({
          books: res.data,
        });
      });
  }
  /**
   * search books using category
   */
  searchBooks() {
    axios
      .get("api/books", {
        headers: {
          accept: "application/json",
        },
        params: {
          category: this.state.category_id
        }
      },)
      .then((res) => {
        this.setState({
          books: res.data,
        });
      });
  }
  /**
   * add item to cart
   * @param {*} id 
   */
  addCart = (id) => {
    const { books, cart } = this.state;
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = books.filter((book) => {
        return book.id === id;
      });
      this.setState({ cart: [...cart, ...data] });
      this.getTotal();
    } else {
      alert("The product has been added to cart.");
      this.getTotal();
    }
    console.log(this.state.cart)
  };

  /**
   * calculate total of cart
   */
  getTotal = () => {
    const { cart } = this.state;
    
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
   
    this.setState({ total: res });
  };

  /**
   * category id set
   * @param {*} e 
   */
  handleChange(e) {
    this.setState({ category_id: e.target.value });
  }

  render() {
    const { books, categories,category_id } = this.state;
    return (
      <div className="container">
        <div className="col-md-6">
          <label>Search Category</label>
          <select
            value={category_id}
            onChange={this.handleChange}
            className="form-control"
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mt-2">
          <button onClick={this.searchBooks} className="btn btn-success">Search</button>
        </div>
        <div className="shop-default shop-cards shop-tech mt-4">
          <div className="row">
            {books.map((book) => (
              <div key={book.id} className="col-md-3">
                <div className="block product no-border z-depth-2-top z-depth-2--hover">
                  <div className="block-image">
                    <a href="#">
                      <img
                        src="https://i.pinimg.com/originals/2f/8a/35/2f8a35f369724a607d7d64dff7b81609.jpg"
                        className="img-center"
                      ></img>
                    </a>
                  </div>
                  <div className="block-body text-center">
                    <h3 className="heading heading-5 strong-600 text-capitalize">
                      <a href="#">{book.title}</a>
                    </h3>
                    <p className="product-description">{book.description}</p>
                    <span className="price sale">LKR {book.price}</span>
                    <div className="product-buttons mt-4">
                      <div className="row align-items-center">
                        <div className="col-2">
                          <button
                            type="button"
                            className="btn-icon"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Favorite"
                          >
                            <i className="fa fa-heart"></i>
                          </button>
                        </div>
                        <div className="col-2">
                          <button
                            type="button"
                            className="btn-icon"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Compare"
                          >
                            <i className="fa fa-share"></i>
                          </button>
                        </div>
                        <div className="col-8">
                          <button
                            type="button"
                            onClick={this.addCart.bind(this, book.id)}
                            className="btn btn-block btn-primary btn-circle btn-icon-left"
                          >
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
