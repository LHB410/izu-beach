import React, { Component } from 'react';
// import axios from 'axios';
import { search } from '../utils';
import BeachCard from './BeachCard';

class BeachSearch extends Component {
  state = {
    beaches: null,
    loading: false,
    value: ''
  };

  search = async value => {
    this.setState({ loading: true });
    // const res = await axios(
    const res = await search(
      `/api/v1/search?q=${value}`
    );
    const movies = res;

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderBeaches() {
    let beaches = <h1>There's no beaches</h1>;
    if (this.state.beaches) {
      beaches = <BeachCard list={this.state.beaches} />;
    }

    return beaches;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderBeaches}
      </div>
    );
  }
}

export default BeachSearch;
