import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SearchBarHeader, SearchForm,SearchFormInput,  SearchFormButton } from './Searchbar.styled';
import SearchIcon from '@mui/icons-material/Search';

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
         <SearchBarHeader >
            <SearchForm  onSubmit={this.handleSubmit}>
                <SearchFormButton onClick={this.handleSubmit} type="submit" >
                    <SearchIcon />
                </SearchFormButton>

                <SearchFormInput
                    onChange={this.handleChange}
                    name="query"
                    value={this.state.query}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
          </SearchBarHeader>
        </>
    )
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}