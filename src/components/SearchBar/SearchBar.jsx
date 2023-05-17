import { Component } from 'react';
import {
  Input,
  Button,
  Form,
  Header,
  SearchFormLabel,
} from './SearchBar.styled';
import { FcSearch } from 'react-icons/fc';

class SearchBar extends Component {
  state = { value: '' };

  handleChange = ({ target: { value } }) => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" aria-label="search">
            <SearchFormLabel>Search</SearchFormLabel>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </Form>
      </Header>
    );
  }
}

export default SearchBar;
