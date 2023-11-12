import { Component } from "react";
import { fetchImages } from '../Services/Api';
import { GlobalStyle } from "components/Services/GlobalStyle";
import { Loader } from "components/Loader/Loader";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "components/Button/Button";
import { AppContainer } from "./App.style";
export class App extends Component {
    state = {
        images: [],
        query: '',
        page: 1,
        largeImage: '',
        tags: '',
        isLoading: false,
        total: 0,
  }; 

  componentDidUpdate(prevProps, prevState) {
      const { query, page } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      this.fetchImages( query, page );
    }    
  }

   fetchImages = async ( query, page ) => {
    try {
      this.setState({ isLoading: true });      
      const { hits, totalHits } = await fetchImages( query, page );
        if (hits.length === 0 && page === 1) {
           toast.error('Sorry, there are no images matching your search query. Please try again.'); 
         return;
        } 
      this.setState((prevState) => ({
        images: page === 1 ? hits : [...prevState.images, ...hits],
        total: totalHits,
        loadMore: page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
       toast.error('Oops! Something went wrong. Please try again later.', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  
  onSubmit = query => {
    if (this.state.query !== query) {
      this.setState({
        query,
        images: [],
        page: 1,
      });
    }
  };

  handleImageClick = (largeImage) => {
    this.setState({ largeImage });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
     
  render() {
     const { isLoading, images, loadMore } = this.state;
        
    return (
      <AppContainer>        
        <Searchbar onSubmit={this.onSubmit} /> 
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} onImageClick={this.handleImageClick} />}
        {loadMore && !isLoading && images.length > 0 && <Button onClick={this.handleLoadMore} />}
        <GlobalStyle />
        <Toaster position="top-center" />
      </AppContainer>
    );
  }
}
