import { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import ContentInfo from './ContentInfo/ContentInfo';
import Loader from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = { isShowModal: false, searchText: '' };

  openModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <>
        <SearchBar handleSearch={this.handleSearch} />
        <ContentInfo searchText={this.state.searchText} />
        <Loader />
        <Button onClick={this.handleLoadMore} />
        {/* 
        {this.state.isShowModal && (
          <Modal close={this.closeModal}>
            <FormLogin close={this.closeModal} createUser={this.createUser} />
          </Modal>
        )} */}
      </>
    );
  }
}
