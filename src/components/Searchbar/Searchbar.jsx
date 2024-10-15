// import React from 'react'

// const Searchbar = (onSubmit) => {
//   return (
//     <header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>
//   )
// }

// export default Searchbar

import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';

import css from '../../styles.module.css'
    
    
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleChange = (evt) => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                <button className={css.SearchFormButton} type="submit"><span className={css.SearchFormButtonLabel}>Search</span>
                </button>
                <input
                    className={css.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="serchQuery"
                    value={this.state.searchQuery}
                    onChange={this.handleChange}
                />
            </form>
        </header>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};