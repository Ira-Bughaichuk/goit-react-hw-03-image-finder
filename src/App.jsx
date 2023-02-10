import { Component } from 'react';
import { getGallery } from '../src/services/postGallery';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader.jsx';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';


export class App extends Component  {
  state = {
    search: '',
    page: 1,
    gallery: [],
    isLoading: false,
    isShowModal: false,
    error: null,
    total_pages: null,
    currentImg: '',
  }
 
  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search ||
      this.state.page !== prevState.page) {
        this.fetchPosts();
      }
  }
  
  
  // fetchPosts() {
  //     this.setState({isLoading: true})
  //   getGallery(this.state.search, this.state.page)
  //     .then((response) => {
  //       console.log(response)
  //       this.setState(pevState => ({
  //         gallery: [...pevState.gallery, ...response.hits],
  //         // total_pages: ((response.totalHits / 12) - prevState.total_pages)
  //       }));
        
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //        this.setState({ error: error.message})
  //     })
  //     .finally(() => {
  //      this.setState({isLoading:false})
  //   })
   
  // }
  

  fetchPosts = async () => {
       this.setState({isLoading: true})
    try {
      const result = await getGallery(this.state.search, this.state.page);
      this.setState({ isLoading: false })
      console.log(result);
      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...result.hits],
        total_pages: Math.ceil(result.totalHits / 12) 
      }));
      console.log(result.totalHits);
    } catch (error) {
      alert(error.message)
      this.setState({ error: error.message })
    } finally {
      this.setState({ isLoading: false })
    }
  } 
  

  handlerFormSubmit = imgName => {
    this.setState({ search: imgName, page: 1, posts: [] })
  }
  handleChangePage () {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  }
  handleToggle = (value) => {
    this.setState(prevState =>({ 
      isShowModal: !prevState.isShowModal,
      }))
  }
  handleOpenModal = (value) =>  {
    this.setState({ isShowModal: true, currentImg: value})
  }
 
 
  render() {
    const { isLoading, isShowModal, currentImg} = this.state
    const isShowButton = this.state.gallery.length > 0 && !isLoading;
    return (
      <>
        <Searchbar onSubmit={this.handlerFormSubmit} />
       
        <ImageGallery onClick={this.handleOpenModal} gallery={this.state.gallery} />
        {isLoading && <Loader /> }
        {isShowButton  ? <Button onClick={this.handleChangePage}  disabled={this.state.total_pages === this.state.page}/> : null}
        {isShowModal && <Modal currentImg={currentImg } onCloseModal={this.handleToggle} />}
      </>  
  )
 }
};
