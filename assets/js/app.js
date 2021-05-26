import React from "react";
import ReactDOM from "react-dom";
import Items from "../components/Items";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      books: [],
    };
  }

  componentDidMount() {
      this.getCategory()
  }

  getCategory() {
    axios.get("/api/category").then((res) => {
        console.log(res.data)
      this.setState({
        categories: res.data,
      });
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.categories.map(({ category }) => (
          <Items key={category} title={category}></Items>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
