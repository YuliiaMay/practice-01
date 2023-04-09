import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    query: ''
  }

  onChange = ({ target: {value} }) => {
    this.setState({ query: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.reset();
  }

  reset = () => {
    this.setState({query: ''})
  }


  render() {

    return (
      <SearchFormStyled  onSubmit={this.handleSubmit}>
        <FormBtn type="submit" >
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={this.state.query}
          onChange={this.onChange}

        />
      </SearchFormStyled>
    )
  }
}
