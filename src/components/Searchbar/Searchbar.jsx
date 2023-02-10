// import PropTypes from 'prop-types';
import React, { Component } from 'react';


export default class Searchbar extends Component {
    state = {
       query:'',
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value.toLowerCase()});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.query.trim() === '') {
            alert('Ведіть назву')
            return
        }
        this.props.onSubmit(this.state.query);
        this.setState({query:''});
    }

  render() {
    return (
        <>
         <header className="searchBar">
            <form className="form"  onSubmit={this.handleSubmit}>
                <button onClick={this.handleSubmit} type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>

                <input
                    onChange={this.handleChange}
                     className="input"
                    name="query"
                    value={this.state.query}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
          </header>
        </>
    )
  }
}
