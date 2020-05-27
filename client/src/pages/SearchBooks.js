import React, { Component } from "react";
import "./index.css";

class SearchBooks extends Component {
  render() {
    return (
      <div className='container '>
        <div className='book'>
          <h1 className=''>Google Books Search</h1>
          <h2 className='text-muted'>Search for and Save Books of Interest</h2>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
