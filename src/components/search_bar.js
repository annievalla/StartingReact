import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({inputValue: e.target.value.toUpperCase()});
  }

  render() {
    return <input value={this.state.inputValue} onChange={this.onInputChange} />;
  }
}

export default SearchBar;
