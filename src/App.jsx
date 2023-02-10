import { Component } from 'react';
import { getGallery } from '../src/services/postGallery';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader.jsx';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import { AppDiv } from './App.styled';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    gallery: [],
    isLoading: false,
    isShowModal: false,
    error: null,
    total_pages: null,
    currentImg: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.search !== prevState.search ||
      this.state.page !== prevState.page
    ) {
      this.fetchPosts();
    }
  }

  fetchPosts = async () => {
    this.setState({ isLoading: true });
    try {
      const result = await getGallery(this.state.search, this.state.page);
      this.setState({ isLoading: false });
      console.log(result);
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...result.hits],
        total_pages: Math.ceil(result.totalHits / 12),
      }));
    } catch (error) {
      alert(error.message);
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handlerFormSubmit = imgName => {
    this.setState({ search: imgName, page: 1, gallery: [] });
  };
  handleChangePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  handleToggle = value => {
    this.setState(prevState => ({
      isShowModal: !prevState.isShowModal,
    }));
  };
  handleOpenModal = value => {
    this.setState({ isShowModal: true, currentImg: value });
  };

  render() {
    const { isLoading, isShowModal, currentImg } = this.state;
    const isShowButton = this.state.gallery.length > 0 && !isLoading;
    const isHidden = this.state.total_pages === this.state.page;
    console.log(isHidden);
    return (
      <AppDiv>
        <Searchbar onSubmit={this.handlerFormSubmit} />

        <ImageGallery
          onClick={this.handleOpenModal}
          gallery={this.state.gallery}
        />
        {isLoading && <Loader />}
        {isShowButton ? (
          <Button onClick={this.handleChangePage} hidden={isHidden} />
        ) : null}
        {isShowModal && (
          <Modal currentImg={currentImg} onCloseModal={this.handleToggle} />
        )}
      </AppDiv>
    );
  }
}
